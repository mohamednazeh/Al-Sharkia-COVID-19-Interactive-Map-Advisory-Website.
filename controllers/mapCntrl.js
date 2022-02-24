const mapServices = require("../services/mapServices")
const getMap = async (req, res, next) => {
	// console.log(await mapServices.getVaccineConveysData())
	// console.log(await mapServices.getHospitalsData())	
	res.render("map", {
		title: "Map Service",
		hospitalData: JSON.stringify(await mapServices.getHospitalsData()),
		vaccineData: JSON.stringify(await mapServices.getVaccineConveysData()),
		mapData: "Map Data"
	})
}
const showMap = (req, res) => {
	// const available_hospitals =
	// let availableHospitals = JSON.parse(req.params.available_hospitals);
	// console.log((req.params['available_hospitals']));
	// const availableHospitals = req.params['available_hospitals'];
	// console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
	// // console.log(availableHospitals[0]);
	// // let y = JSON.parse(availableHospitals);
	// console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
	// res.send(availableHospitals);
	// res.send("data received...")
	// res.render("index")
//	console.log(req.body);
}
module.exports = {
	getMap: getMap,
	showMap:showMap,
}