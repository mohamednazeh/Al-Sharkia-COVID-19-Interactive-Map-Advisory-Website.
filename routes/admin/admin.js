const express = require("express");
const router = express.Router();

const adminCntrl  = require("../../controllers/admin/adminCntrl")

router.get("/database/manage", adminCntrl.getManageDatabase)
router.post("/database/manage", adminCntrl.updateHospitals)







module.exports = router;
