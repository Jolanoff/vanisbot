export default {
	// Manually solve captchas on the client.
	manualSolving: false,

	// API key for CapMonster (ignore if you're manually solving captchas.)
	apiKey: 'd77b662141c17c3eaa18aec2f43da04f',

	// Collection of name(s) for minions to use.
	names: ['feet'],

	// Collection of skin(s) for minions to use.
	skins: ['XEqQpF', 'vanis1'],

	// Collection of tag(s) for minions to be in.
	tags: ['', '69'],
	
	skinOnJoin: true, // Give minions a skin when they join the server.
	skinOnSpawn: false, // Give minions a different skin each time they spawn.
	spawnOnJoin: true, // Minions spawn as soon as they join the server.

	respawnDelay: 1500, // Delay for auto respawning.

	getSkin() { return this.skins[Math.floor(Math.random() * this.skins.length)]; },
	getTag() { return /*decodeURIComponent(*/this.tags[Math.floor(Math.random() * this.tags.length)]/*);*/ },
	getName() { return /*decodeURIComponent(*/this.names[Math.floor(Math.random() * this.names.length)]/*);*/ }
};