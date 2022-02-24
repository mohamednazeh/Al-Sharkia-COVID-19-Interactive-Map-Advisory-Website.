var express = require('express');
var router = express.Router();

// Auth user
const { isUser } = require("../middlewares/auth")

// Diagnose controller
let dgsCntrl = require("../controllers/diagnoseCntrl")


// )+ Get diagnose service
router.get('/', dgsCntrl.getDiagnose)
router.get("/start", dgsCntrl.startDiagnose)
router.get("/isolationCase", isUser, dgsCntrl.getIsolationCase)
router.get("/examinationsCase", isUser, dgsCntrl.getExaminationsCase)
router.get("/complete", dgsCntrl.completeDiagnose)
// )+ Select the current available hospitals
//router.get("/selectHospitals", isUser, dgsCntrl.selectHospitals)
router.get("/selectHospitals", dgsCntrl.selectHospitals)
router.get("/selectModerateHospitals", isUser, dgsCntrl.selectModerateHospitals)


router.get("/end", dgsCntrl.endDiagnoseService)
router.get('/done/:patientCase', dgsCntrl.doneDiagnose);


module.exports = router;

