var express = require('express');
var router = express.Router();

const db = require("../root/database")
let bcrypt = require("bcrypt")

const { getAccount } = require("../services/adminServices")

const { body } = require("express-validator")

// )+ Controllers 
// )+ Index controller
const indexCntrlr = require('../controllers/indexCntrlr');
// )+ Admin controller
const adminCntrl = require("../controllers/admin/adminCntrl")

// )+ Get home
router.get('/', indexCntrlr.getHome);
router.get('/login/s-p!187', adminCntrl.getAdmin)
  router.get('/s-p!187/dashboard', adminCntrl.getDashboard)
router.post("/s-p!187/login", 
  [
    body('email').isEmail().custom( (value, { req }) => {
      return new Promise( async  (resolve, reject) => {
        await db.query("select * from Admin where Email = ?", [value], (err, rows)=> {
          if (rows.length === 0) {
            req.session.emailCheck = true;
            return reject("email is not an admin account, revise the manager");
          }else {
            // global.$_emailVld = false;
            req.session.emailCheck = false;
            return resolve(true)
          }
        })
      })
    }),
    // - - - ---- - -- - - ----- --- - -- -- -- -- 
    body("password").custom( (value, { req }) => {
      return new Promise( async (resolve, reject) => {
        // Get account password
        if (req.session.emailCheck) {
          resolve(true)
        }else {
          const USER_ACCOUNT =  await getAccount(req.body.email)
          console.log(USER_ACCOUNT);
          bcrypt.compare(value, USER_ACCOUNT.A_password, function(err, result) {
            // console.log(USER_ACCOUNT.Password1);
            // console.log(value);
            if (result) {
              // req.session.id = USER_ACCOUNT.User_id;
              req.session.loggedinAdmin = true;
              req.session.adminAcc = USER_ACCOUNT;
              console.log("session -------------------------- -- ");
              console.log(req.session.loggedinAdmin);
              console.log(req.session.adminAcc);
              console.log("session -------------------------- -- ");
              // console.log(req.session.id);
              return resolve(true)  
            }else {
              return reject("Password is incorrect, Revise the manager")
            }
          });
        }
      
      })
    }),
  ],
  adminCntrl.checkAdmin
)



module.exports = router;
