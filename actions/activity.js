var User = require('../model/user.js');

module.exports = {
	list: function(req, res) {
		res.render('activity', {
			title: 'activity'
		});
	}
}