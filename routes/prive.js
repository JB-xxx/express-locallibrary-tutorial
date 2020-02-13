var express = require('express');
var router = express.Router();

// Require controller modules.
var prive_controller = require('../controllers/priveController');
var payment_controller = require('../controllers/paymentController');
var paymentgroup_controller = require('../controllers/paymentgroupController');

router.get('/payment', payment_controller.payment_list);
router.get('/paymentgroup', paymentgroup_controller.paymentgroup_list);
router.get('/image', prive_controller.foto_list);
//
router.get('/bootstrap', prive_controller.bootstrap_get);

router.get('/layout', prive_controller.layout_get);

router.get('/gridview', prive_controller.gridview_get);

// Oefeningen
router.get('/javascript', prive_controller.javascript_get);
router.get('/document', prive_controller.document_get);

router.get('/cool', function(req, res, next) {
  res.send('You\'re so cool');
});

module.exports = router;