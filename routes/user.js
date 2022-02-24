const { body, validationResult } = require('express-validator')
// const { checkEmailUser} = require("../services/registerService")
const db = require("../root/database")
const { getAccount } = require("../services/loginServices")
const bcrypt = require("bcrypt")

const { isUser } = require("../middlewares/auth")



var express = require('express');
var router = express.Router();

let userCntrl = require('../controllers/userCntrl');
const { checkEmailUser } = require('../services/registerService');
const e = require('express');

router.get('/login', userCntrl.login);
router.post('/login',
  [
    body('email').isEmail().custom( (value, { req }) => {
      return new Promise( async  (resolve, reject) => {
        await db.query("select * from User where email = ?", [value], (err, rows)=> {
          if (rows.length === 0) {
            req.session.emailCheck = true;
            return reject("email doesn't registered, you need to create account");
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
          bcrypt.compare(value, USER_ACCOUNT.Password1, function(err, result) {
            // console.log(USER_ACCOUNT.Password1);
            // console.log(value);
            if (result) {
              // req.session.id = USER_ACCOUNT.User_id;
              req.session.loggedinUser = true;
              req.session.emailAddress = USER_ACCOUNT.email;
              console.log("session -------------------------- -- ");
              console.log(req.session.loggedinUser);
              console.log(req.session.emailAddress);
              console.log("session -------------------------- -- ");
              // console.log(req.session.id);
              return resolve(true)  
            }else {
              return reject("Password is incorrect")
            }
          });
        }
      
      })
    }),
  ],
   userCntrl.checkUser
)
router.get('/signup', userCntrl.signup);
router.post('/signup',
  [
    body('name').isLength({min:7}),
    body('email').isEmail().withMessage("email already exists").custom(  (value, {req}) => {
      return new Promise( async  (resolve, reject) => {
        await db.query("select * from User where email = ?", [value], (err, rows)=> {
          // rows undefined...
          // if ( rows !== "undefined" ) {
          if (rows.length > 0) {
            return reject('E-mail already in use');
          }else {
            return resolve(true);
          }
          // }else {
          //   return resolve(true);
          // }
        })
      })
    }),
    body('password').isLength({min:8}),
    body('confirm-password').custom( ( value, { req } ) => {
      return new Promise ( ( resolve, reject ) => {
        if ( req.body.password == value ) {
          resolve( true )
        }
        return reject( " Password must be matched " )
      }) 
    })
  ],
  userCntrl.createUser
)
router.get("/forgot-password", userCntrl.getForgotPassword)
router.post("/forgot-password", userCntrl.forgotPassword)
router.get('/reset-password/:id/:token', userCntrl.getResetPassword)
router.post('/reset-password/:id/:token',
body('password').isLength({min:8}),
body('password2').custom( ( value, { req } ) =>{
  return new Promise ( ( resolve, reject ) => {
    if ( req.body.password == value ) {
      resolve( true )
    }
    return reject( " Password must be matched " )
  }) 
}),
userCntrl.resetPassword)

router.get('/profile', isUser, userCntrl.getProfile);
router.post('/update', isUser, userCntrl.updateProfile);


router.get('/logout', userCntrl.logout);



module.exports = router;
