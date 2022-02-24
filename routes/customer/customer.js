var express = require('express');
var router = express.Router();

const customerCntrl = require("../../controllers/customer/customerCntrl")



router.post('/subscribe', customerCntrl.reqSubscriptionService)


module.exports = router;
