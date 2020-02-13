var mongoose = require('mongoose');
// var Float = require('mongoose-float').loadType(mongoose);
var moment = require('moment');
moment.locale('nl');


var Schema = mongoose.Schema;

var PaymentSchema = new Schema(
  {
    description: {type: String, required: true, max: 100},
    payment_amount: {type: String, required: true},
    payment_date: {type: Date},
    paymentgroup: [{type: Schema.Types.ObjectId, ref: 'Paymentgroup'}],
  }
);


// Virtual for author's lifespan
PaymentSchema
.virtual('betaal_datum')
.get(function () {
  return moment(this.payment_date).format('dddd DD-MM-YYYY');

});

// Virtual for author's URL
PaymentSchema
.virtual('url')
.get(function () {
  return '/prive/payment/' + this._id;
});

//Export model
module.exports = mongoose.model('Payment', PaymentSchema);
