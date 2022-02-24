const db = require("../../root/database")



const getHospitals = () => {
  return new Promise ( async ( resolve, reject ) => {
  
    let SQL = "select H_name, Num_beds, Num_intensive_case_beds from Hospital";
    await db.query( SQL, ( err, rows ) => {
      
      if ( err ) {
        return reject( err );
      }
      
      return resolve( rows ); 
      
    })
  })
}




module.exports = {
  getHospitals : getHospitals,
  
};
