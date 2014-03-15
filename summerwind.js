// jshint ignore: start

function SummerWind(fn) {

	var _app = require('express')();

	function get(route, callback) {
		_app.get(route, function(_req, _res, pass) {
			var params = _req.headers;
			_res.send(eval('(' + callback.toString() + ')()'));
		});
	}

	eval('(' + fn.toString() + ')()');

	_app.listen(5000, function() {
		console.log('Listening on port 5000');
	});

}

module.exports = SummerWind;
