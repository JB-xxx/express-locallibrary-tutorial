var express = require('express');
var router = express.Router();

// Require controller modules.
var wms_controller = require('../controllers/wmsController');


// Require controller modules.
router.get('/item', wms_controller.item_list);
router.get('/magazijn', wms_controller.magazijn_list);
router.get('/voorraad', wms_controller.voorraad_list);

module.exports = router;
