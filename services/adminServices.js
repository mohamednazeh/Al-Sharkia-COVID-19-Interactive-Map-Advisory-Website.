const db = require("../root/database")
let bcrypt = require("bcrypt")

// Get account
const getAccount = (email) => {
	return new Promise ( async (resolve, reject) => {
		try {
			await db.query("select * from Admin where Email = ?", [email], (err, rows)=> {
				if ( err ) {
					reject(err)
				}else {
					resolve(rows[0])
				}
			})
		}catch(e) {
			reject(e);
		}
	})
}

module.exports = {
  
  getAccount: getAccount,
  
};



