var Paymentgroup = require('../models/paymentgroup');
var async = require('async');



// Display list of all Paymentgroups.
exports.paymentgroup_list = function(req, res, next) {
    Paymentgroup.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_paymentgroup) {
        if (err) { return next(err); }
        // Successful, so render.
        res.render('prive/paymentgroup', { title: 'Betalingsgroepen Lijst', paymentgroup_list: list_paymentgroup });
    })
}; 