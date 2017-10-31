const Command = require('command');

module.exports = function Boomerang(dispatch) {
	const command = Command(dispatch);
	let enabled = false;
	
	dispatch.hook('C_START_SKILL', 3, event => {
		if (enabled && 67529864 === event.skill) {
			event.toZ = event.z + 814.5;
			event.toX = event.x + Math.cos(Math.PI * event.w / 32768.0) * 437;
			event.toY = event.y + Math.sin(Math.PI * event.w / 32768.0) * 437;
			return true;
		}
	});
	
	command.add('boomerang', () => {
		enabled = !enabled;
		command.message(`Boomerang is ${enabled ? 'on' : 'off'}`);
	});
}
