const db = require("../root/database")
let bcrypt = require("bcrypt")

let checkPassword = (newUser, dbUser) => {
	return new Promise( async (resolve, reject) => {
		try {
			// let hashedPassword;
			// const saltRounds = 10;
			// bcrypt.genSalt(saltRounds, function(err, salt) {
		    // bcrypt.hash(newUser.password, salt, function(err, hash) {
       	bcrypt.compare(newUser.password, dbUser.Password1, function(err, result) {
       	  // console.log(hash);
       	  console.log(dbUser.Password1);
    			resolve(result)
				});
		    // });
			// });
		}catch ( e ) {
			reject( e )
		}
	})

}

// Get account
const getAccount = (email) => {
	return new Promise ( async (resolve, reject) => {
		try {
			await db.query("select * from User where email = ?", [email], (err, rows)=> {
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

const getAccountById = (id) => {
	return new Promise ( async (resolve, reject) => {
		try {
			await db.query("select * from User where User_id = ?", [id], (err, rows)=> {
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
	checkPassword: checkPassword,
	getAccount: getAccount,
	getAccountById: getAccountById,

}




