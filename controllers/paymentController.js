var Payment = require('../models/payments');
var Paymentgroup = require('../models/paymentgroup');

// Display list of all books.
exports.payment_list = function(req, res) {
    Payment.find()
    .populate('paymentgroup')
    .exec(function (err, list_payments) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('prive/payment_list', { title: 'Betalings Lijst', payment_list: list_payments });
    });
};


//test
exports.payment_list2 = function(req, res) {
    res.render('prive/payment_list', { title: 'Betalings lijst' });
};
 