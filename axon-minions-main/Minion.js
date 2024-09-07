import { RecaptchaV2Task } from 'node-capmonster';
import HttpsProxyAgent from 'https-proxy-agent';
import WebSocket from 'ws';
import { SmartBuffer } from 'smart-buffer';

import config from './config.js';
import { XorKey } from './Authenticator.js';
import { generateHeaders, clamp, noop } from './util.js';
import { parseOwnCells } from './cells/Parsers.js';

const captcha = new RecaptchaV2Task('d77b662141c17c3eaa18aec2f43da04f');

export class Minion {
    constructor() {
        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        console.log(`Minion instance created with ID: ${this.id}`);
    }

    /** @param {String} url */
    connect(url) {
        console.log(`Connecting to server with URL: ${url}`);
        this.serverUrl = url;

        this.ws = new WebSocket(url, 'tFoL46WDlZuRja7W6qCl', {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders()
        });

        this.ws.binaryType = 'buffer';

        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));

        this.x = 0;
        this.y = 0;

        this.movementEnabled = true;
    }

    disconnect() {
        console.log(`Disconnecting minion '${this.id}'`);
        if (this.ws) {
            this.ws.terminate();
            delete this.ws;
        }

        clearInterval(this.pingInterval);
        clearTimeout(this.spawnTimeout);

        delete this.connected;
        delete this.open;
    }

    /** @param {Buffer} message */
    onMessage(message) {
        console.log(`Received message for minion '${this.id}': ${message.toString('hex')}`);

        const reader = SmartBuffer.fromBuffer(message);

        const opcode = reader.readUInt8();  // Read the opcode
    
        console.log(`Opcode: ${opcode}`);
        console.log(`Full message: ${message.toString('hex')}`);



        switch (opcode) {
            case 1:
                console.log(`Initial data received for minion '${this.id}'`);
                this.initialData(reader);
                break;

            case 2: {
                console.log(`Authentication key received for minion '${this.id}'`);
                const key = message.slice(1);
                this.authenticate(new XorKey(key).build());
                break;
            }

            case 6:
                console.log(`Pong received for minion '${this.id}'`);
                this.pong();
                break;

            case 10:
                console.log(`Computing cells for minion '${this.id}'`);
                this.computeCells(reader);
                break;

            case 20:
                console.log(`Respawn requested for minion '${this.id}'`);
                setTimeout(() => this.spawn(), config.respawnDelay);
                break;

            case 16:
                console.log(`Captcha required for minion '${this.id}'`);
                if (!this.open) return;
                this.handleCaptcha();
                break;

            default:
                console.log(`Unhandled message opcode for minion '${this.id}'`);
                break;
        }
    }

    handleCaptcha() {
        if (config.manualSolving) {
            if (!this.captchaQueue) {
                console.log(`Captcha queue not available for minion '${this.id}'`);
                return;
            }
            console.log(`Adding minion '${this.id}' to captcha queue`);
            this.captchaQueue.add(this);
        } else {
            captcha.decodeReCaptchaV2('https://vanis.io', '6LfN7J4aAAAAAPN5k5E2fltSX2PADEyYq6j1WFMi')
                .then(result => {
                    console.log(`Captcha solved for minion '${this.id}'`);
                    const { gRecaptchaResponse: token } = result.solution;
                    this.sendRecaptchaToken(token);
                })
                .catch(error => {
                    console.error(`Captcha solving failed for minion '${this.id}':`, error);
                });
        }
    }

    onOpen() {
        console.log(`WebSocket connection opened for minion '${this.id}'`);
        this.name = config.getName();
        this.tag = config.getTag();
        this.skin = config.skinOnJoin ? config.getSkin() : 'vanis1';
        this.open = true;
    }

    onClose(code, reason) {
        console.warn(`Minion '${this.id}' disconnected. Code: ${code}, Reason: ${reason ? reason.toString('utf-8') : 'No reason provided'}`);
        clearInterval(this.pingInterval);
        clearTimeout(this.spawnTimeout);
        delete this.connected;
        delete this.open;
    }

    onError(error) {
        console.error(`WebSocket error for minion '${this.id}':`, error);
    }

    get active() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    /** @param {SmartBuffer} data */
    send(data) {
        if (this.active) {
            console.log(`Sending data for minion '${this.id}': ${data.toBuffer().toString('hex')}`);
            this.ws.send(data.toBuffer());
        }
    }

    /** @param {SmartBuffer} reader */
    initialData(reader) {
        console.log(`Initial data being processed for minion '${this.id}'`);
        this.connected = true;

        this.pingInterval = setInterval(() => this.ping(), 1000);

        if (config.spawnOnJoin) {
            this.spawnTimeout = setTimeout(() => this.spawn(), Math.max(500, Math.random() * 1000));
        }

        const protocol = reader.readUInt8();
        if (protocol >= 4) {
            reader.readUInt8();
            reader.readUInt16LE();
            this.playerId = reader.readUInt16LE();
            reader.readInt16LE();
            reader.readInt16LE();
            reader.readInt16LE();
            reader.readInt16LE();
            reader.readUInt8();
        } else {
            if (protocol >= 2) {
                reader.readUInt8();
                reader.readUInt16LE();
                this.playerId = reader.readUInt16LE();
            } else {
                reader.readUInt16LE();
                this.playerId = reader.readUInt16LE();
            }
        }
    }

    computeCells(reader) {
        console.log(`Computing cells for minion '${this.id}'`);
        const cells = parseOwnCells(reader, this.playerId);
        this.alive = cells.size !== 0;
    }

    spawn() {
        console.log(`Spawning minion '${this.id}'`);
        if (this.spawnTimeout) {
            clearTimeout(this.spawnTimeout);
            delete this.spawnTimeout;
        }

        if (config.skinOnSpawn) this.skin = config.getSkin();
        else if (config.staticSkin) this.skin = config.staticSkin;

        const packet = SmartBuffer.fromSize(1);
        packet.writeUInt8(1);
        packet.writeStringNT(this.name);
        packet.writeStringNT(`https://skins.vanis.io/s/${this.skin}`);
        packet.writeStringNT(this.tag);
        this.send(packet);
    }

    /** @param {Array<Number>} key */
    authenticate(key) {
        console.log(`Authenticating minion '${this.id}'`);
        if (config.skinOnJoin) this.skin = config.getSkin();
        else this.skin = 'vanis1';

        const packet = SmartBuffer.fromSize(2 + key.length);
        packet.writeUInt8(0x05); 
        packet.writeUInt8(0x1E); 
        key.forEach(x => packet.writeUInt8(x));

        packet.writeStringNT(this.name);
        packet.writeStringNT(`https://skins.vanis.io/s/${this.skin}`);
        packet.writeStringNT(this.tag);

        if (this.token) {
            packet.writeStringNT(this.token);
        }

        this.send(packet);
    }

    pong() {
        console.log(`Sending pong for minion '${this.id}'`);
        const packet = SmartBuffer.fromSize(1);
        packet.writeUInt8(6);
        this.send(packet);
    }

    /** @param {Boolean} state */
    feed(state) {
        console.log(`Feeding state for minion '${this.id}': ${state}`);
        const packet = SmartBuffer.fromSize(2);
        packet.writeUInt8(21);
        packet.writeUInt8(+state);
        this.send(packet);
    }

    ping() {
        console.log(`Pinging for minion '${this.id}'`);
        const packet = SmartBuffer.fromSize(1);
        packet.writeUInt8(3);
        this.send(packet);
    }

    /** @param {Number} pid  */
    spectate(pid) {
        console.log(`Spectating for minion '${this.id}', pid: ${pid}`);
        const packet = SmartBuffer.fromSize(pid ? 3 : 1);
        packet.writeUInt8(2);
        if (pid) packet.writeUInt16LE(pid);
        this.send(packet);
    }

    /** @param {String} token */
    sendRecaptchaToken(token) {
        console.log(`Sending CAPTCHA token for minion '${this.id}': ${token}`);
        const packet = SmartBuffer.fromSize(1 + token.length + 1);
        packet.writeUInt8(11);
        packet.writeStringNT(token);
        this.send(packet);
    }
}
