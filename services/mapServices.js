const  db = require("../root/database")



const getHospitalsData = async () => {
	return new Promise ( async (resolve, reject) => {
		try {
			await db.query("select * from Hospital", (err, rows)=> {
				if ( err ) {
					reject(err)
				}else {
					resolve(rows)
				}
			})
		}catch(e) {
			reject(e);
		}
	})	
}

const getVaccineConveysData = async () => {
	return new Promise ( async (resolve, reject) => {
		try {
			await db.query("select * from Vaccine_Conveys", (err, rows)=> {
				if ( err ) {
					reject(err)
				}else {
					resolve(rows)
				}
			})
		}catch(e) {
			reject(e);
		}
	})	
}


module.exports = {
  getHospitalsData: getHospitalsData,
  getVaccineConveysData: getVaccineConveysData,
};
