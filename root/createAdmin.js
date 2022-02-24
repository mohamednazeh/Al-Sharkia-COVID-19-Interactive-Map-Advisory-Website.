const db = require("./database");
const bcrypt = require("bcrypt");
let admin = {
  Fname: "ahmed",
  Age: "12",
  Email: "adminadmin@gmail.com",
  A_password: "123456789", 
  Phone: "01287455",
}
const saltRounds = 10;
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(admin.A_password, salt, function(err, hash) {
      let adminInfo= {
              Admin_id: Math.floor((Math.random() * 2000) + 1),
              Fname: admin.Fname,
              Email: admin.Email,
              Age: admin.Age,
              A_password: hash,							
              Phone: admin.Phone,  		
            }
            storeData(adminInfo);
    });
});
// Store data...
let storeData = (data) => {
    db.query("insert into Admin set ?", data, (err, rows) => {
        if ( err ) {
            //reject( err )
            console.log(err)
            console.log("No admin created...")
        }
        //resolve("Create a new admin...")
    }).sql
    // }
}