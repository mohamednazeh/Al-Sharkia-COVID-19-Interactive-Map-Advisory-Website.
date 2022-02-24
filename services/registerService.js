const db = require("../root/database")
let bcrypt = require("bcrypt")

const createNewUser = (newUser, req) => {
		return new Promise ( async (resolve, reject) => {
				try {
					// let check = await checkEmailUser(newUser.email)
					// console.log(check)
					// if (check) {
					// 	// Send Message "email already exists"
					// 	req.session.success = false;
					// 	req.session.error.errors.push({
					// 		param: "email_exist",
					// 	})
					// 	console.log("email exists");
					// 	res.redirect("/user/signup")
					// }else {
						// Hash the user password
						let hashedPassword;
						const saltRounds = 10;
						bcrypt.genSalt(saltRounds, function(err, salt) {
						    bcrypt.hash(newUser.password, salt, function(err, hash) {
						      let data = {
									  User_id: Math.floor((Math.random() * 2000) + 1),
									  FullName: newUser.name,
									  email: newUser.email,
									  age: 20,
									  Password1: hash,
									  Birth_date: null,
									  Street: null,
									  City: null,
									  Phone: null,
									  Gender: null,
									  State: 0,
									  Medicine: null,
									  Medicine_history: null,  
								 	}
								 	storeData(data);
						    });
						});
						// console.log("hash password")
						
						let storeData = (data) => {
							db.query("insert into User set ?", data, (err, rows) => {
								if ( err ) {
									reject( err )
									console.log("No user created")
								}
								resolve("Create a new user")
								// console.log("create new user")
							}).sql
						// }
					}
				}catch(e) {
						reject(e)
				}
		})
}
let checkEmailUser = (email) => {
	return new Promise ( (resolve, reject) => {
		try {
			db.query("select * from User where email = ?", [email], (err, rows)=> {
				if ( err ) {
					reject(err)
				}
				if ( rows.length > 0 ) {
					resolve(rows[0])
				}else {
					resolve(false)
				}
			})
		}catch(e) {
			reject(e);
		}
	})
}
module.exports = {
	createNewUser: createNewUser,
	checkEmailUser: checkEmailUser,


}  