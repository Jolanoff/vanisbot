import * as randomUseragent from 'random-useragent';

const generateHeaders = () => {
	const tags = [
		['en-US', 'en'],
		['en-GN', 'en'],
		['fr-CH', 'fr']
	];

	const tag = tags[Math.floor(Math.random() * tags.length)];
	const weight = Math.max(0.1, Math.random() * 0.9).toFixed(1);

	return {

		Origin: 'https://vanis.io',
		Pragma: 'no-cache',
		'Cache-Control': 'no-cache',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': `${tag[0]}, ${tag[1]};${weight}`,
		'User-Agent': randomUseragent.getRandom(),
		'Sec-WebSocket-Version': 13,
		'Sec-WebSocket-Key': 'IS40IkQ+Xowa1cJMkpfyEw==',
		'Connection': 'Upgrade',
		'Upgrade': 'websocket',
		'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
		'Host': 'game-eu-9.vanis.io',
	};
};

/**
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const noop = () => { };

export { generateHeaders, clamp, noop };