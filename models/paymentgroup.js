var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var PaymentgroupSchema = new Schema ({
    name: {type: String, required: true, min: 3, max: 100}
});

// Virtual for this genre instance URL.
PaymentgroupSchema
.virtual('url')
.get(function () {
  return '/prive/paymentgroup/'+this._id;
});

//Export model
module.exports = mongoose.model('Paymentgroup', PaymentgroupSchema);
