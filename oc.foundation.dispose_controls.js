var dispose = require('@tschallacka/oc.foundation.controlutils');
module.exports = function(ev) {
	dispose.disposeControls(ev.target);
}