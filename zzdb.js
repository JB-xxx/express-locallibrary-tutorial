#! /usr/bin/env node

console.log('This script populates some test payments, paymentgroups and to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Payments = require('./models/payments')
var Paymentgroup = require('./models/paymentgroup')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var paymentgroups = []
var payments = []

function paygroupCreate(name, cb) {
  var paygroup = new Paymentgroup({ name: name });
       
  paygroup.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Paymentgroup: ' + paygroup);
    paymentgroups.push(paygroup)
    cb(null, paygroup);
  }   );
}

function paymentCreate(description, payment_amount, payment_date, paymentgroup, cb) {
  bookdetail = { 
    description: description,
    payment_amount: payment_amount,
    payment_date: payment_date
  }
  if (paymentgroup != false) bookdetail.paymentgroup = paymentgroup
    
  var payment = new Payments(bookdetail);    
  payment.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Payments: ' + payment);
    payments.push(payment)
    cb(null, payment)
  }  );
}


function createPaymentgroup(cb) {
    async.series([
        function(callback) {
            paygroupCreate("Jan", callback);
        },
        function(callback) {
            paygroupCreate("Gera", callback);
        },
        function(callback) {
            paygroupCreate("Jody", callback);
        },
        function(callback) {
            paygroupCreate("Thijs", callback);
        },        
        function(callback) {
            paygroupCreate("Bob", callback);
        },        
    ],
        // optional callback
        cb);
}


function createPayments(cb) {
    async.parallel([
        function(callback) {
            paymentCreate('betaling1', '75.00', '2019-12-01', [paymentgroups[4],], callback);
        },
        function(callback) {
            paymentCreate('Betaling2', '29.89', '2019-12-03', [paymentgroups[2],], callback);
        },
        function(callback) {
            paymentCreate('Betaling3', '15.75', '2019-12-02', [paymentgroups[3],], callback);
        },
        function(callback) {
            paymentCreate('Betaling4', '27.35', '2019-12-01', [paymentgroups[1],], callback);
        },
        function(callback) {
            paymentCreate('Betaling5', '210.15', '2019-12-06', [paymentgroups[1],], callback);
        },
        function(callback) {
            paymentCreate('Betaling6', '125.80', '2019-12-08', [paymentgroups[0],paymentgroups[1]], callback);
        },
        function(callback) {
            paymentCreate('Betaling7', '6.80', '2019-12-09', [paymentgroups[1],], callback)
        }
        ],
        // optional callback
        cb);
}


async.series([
    createPaymentgroup,
    createPayments,
],

// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Weet dit niet zie oorspronkelijk bestand');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



