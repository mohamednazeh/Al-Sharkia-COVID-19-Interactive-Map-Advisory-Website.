var express = require('express');
var router = express.Router();
// )+ Controllers 
// )+ Index controller
let mapCntrl = require('../controllers/mapCntrl');
// )+ Get home
router.get('/', mapCntrl.getMap);
// router.post("/show_available_hospitals/:available_hospitals", mapCntrl.showMap);
router.post("/show_available_hospitals", mapCntrl.showMap);
module.exports = router;