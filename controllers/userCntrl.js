const { validationResult, body } = require('express-validator')
const JWT = require("jsonwebtoken");
const JWT_SECRET = "healthcaseofsharqia";
let bcrypt = require("bcrypt")
let db = require("../root/database")

let {createNewUser, checkEmailUser} = require("../services/registerService")
let {checkPassword, getAccount, getAccountById } = require("../services/loginServices")

const nodemailer = require("nodemailer")


const login =  (req, res, next) => {
  if (req.session.loggedinUser) {
    res.redirect("/")   
  } else {
    res.render("login", {
      title: "Log In",
      success: req.session.success,
      error: req.session.error,
    })
  }
}

// 
const checkUser =  (req, res, next) => {
 
  const ERRORs = validationResult(req);
  return new Promise( async (resolve, reject) => {
    let newUser = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }
    if (!ERRORs.isEmpty()) {
      req.session.error = ERRORs;
      req.session.success = false;
      // console.log(req.session.error);
      res.redirect("/user/login")
    }else {
      req.session.success = true;
      if ( req.session.next == "startDiagnose" ) {
        console.log("diagnose start");
        res.redirect("/diagnose/start")
      }else if( req.session.next == "completeDiagnose" ) {
        res.redirect("/diagnose/complete")
      }else {
        res.redirect("/")
      }
    }    
  })
}

const signup = (req, res, next) => {
  if ( req.session.loggedinUser ) {
    res.redirect("/")
  }else {
    res.render("signup", { 
      title: "Sign Up",
      success: req.session.success,
      error: req.session.error,
      email_exist: req.session.EMAIL_EXIST,
    })
  }
}

const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  // global.$user_email = req.body.email;
  if (!errors.isEmpty()) {
    console.log(errors)
    req.session.success = false;
    req.session.error = errors;
    console.log(req.session.error);
    // req.session.error
    res.redirect("/user/signup")
    // return
  }else {
      try {
        let newUser = {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
        }
        await createNewUser(newUser, req);
        req.session.success = true;
        // req.session.error = null;
        const SQL = "select * from User where email = ?";
        await db.query(SQL, [ req.body.email ], (err, rows) => {
          // req.session.user_id = rows[0].User_id;
          // console.log("New User Id");
          // console.log(req.session.user_id);
        })
        return res.redirect("/user/login")
        // return res.redirect("/")
      }catch(e) { 
        return res.redirect("/user/signup")
      }
    }
  // }
}

const getForgotPassword = (req, res, next) => {
  res.render("user/forgot-password", {
    title: "Reset Password"  
  })
}
const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  // Check user if exists
  const user = await getAccount(email);
  if (!user) {
    return res.send("User is not exist");
  }
  console.log(user);
  const userData = {
    userId: user.User_id,
    email:user.email,
  }
  const SECRET = JWT_SECRET + user.Password1;
  const TOKEN = JWT.sign(userData, SECRET, {expiresIn: '15m'})
  // Create JWT Link
  const link = `http://localhost:3000/user/reset-password/${userData.userId}/${TOKEN}`;
  // Send to email of user
  // console.log(link);
  let transport =  nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'ahmedelgiedfuture@outlook.com',
      pass: "AH01281603263ah"
    }
  });
  let mailOptions = {
    from: 'ahmedelgiedfuture@outlook.com',
    to: `${user.email}`,
    subject: 'Activation Link',
    text: "",
    html: `
      <p> The Activation Link...</p>
      <p>The activation link will be expired in 15 minutes...</p>
      <p>${link}</p>
      
      `
  }
  transport.sendMail(mailOptions, ( err, info ) => {
    if ( err ) {
      return console.log(err);
    }
    console.log("Message Sent: "+info.response);
  })

  res.send("Link has been send to to "+email);
}

const getResetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  // check id or user of it exists or not
  const user = await getAccountById(id);
  console.log(user);
  if (!user) {
    res.send("User is not exist");
  }
  // console.log("exists");
  const SECRET = JWT_SECRET + user.Password1;
  try {
		const PAYLOAD = JWT.verify(token, SECRET);
		res.render('user/reset-password', {email: user.email, title: 'Reset Password', success: req.session.success, error: req.session.error})
		// res.send("reset password")
	}catch ( error ) {
		console.log(error);
		// Not Found Or Expiration
		res.send(error);
	}

}

const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors)
    req.session.success = false;
    req.session.error = errors;
    console.log(req.session.error);
    res.redirect(`/user/reset-password/${id}/${token}`)
  }else {
    req.session.success = true;
    const { password } = req.body;
    const user = await getAccountById(id);
    // console.log(user);
    if (!user) {
      res.send("User is not exist");
    }
    const SECRET = JWT_SECRET + user.Password1;
    console.log("--- --- --- --- --- --- --- ");
    console.log(user.email);
    console.log("--- --- --- --- --- --- --- ");
    try {
      const PAYLOAD = JWT.verify(token, SECRET);
      // Hash password  & Update Password
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          updatePassword(hash, user.email);
        });
      });
        let updatePassword = (password, email) => {
          db.query(`update User set Password1 =? where email = ?`, [ password, email],  (err, rows) => {
            if ( err ) {
              // reject( err )
              console.log("No user created")
              console.log(err);
            }
            // resolve("Create a new user")
            console.log("Updates have been occured")
          }).sql
        }
      // update password
      
      // Redirect to logIn page 
      res.redirect("/user/login")
    }catch ( error ) {
      console.log(error);
      res.send(error);
    }
  }

  
  
}


const logout = ( req, res) => {
  // req.logout()
  // redirect("/")
  req.session.destroy();
  res.redirect('/');
}

const getProfile = async (req, res, next) => {
  
  // +1 Get info about @User
  const USER_INFO = await getAccount(req.session.emailAddress);
  // console.log("++++++++++++++++++++++++++");
  // console.log(USER_INFO.FullName);
  // Get info about @user
  // let userData = await
  res.render("profile", {
    title: "profile",
    userInfo: {
      name: USER_INFO.FullName,
      email: USER_INFO.email,
      age: USER_INFO.Age,
      birth_date: USER_INFO.Birth_date,
      street: USER_INFO.Street,
      city: USER_INFO.City,
      phone: USER_INFO.Phone,
      gender: USER_INFO.Gender,
      // state: USER_INFO.State,
    }
  });
}

// UPDATE PROFILE OF USER
const updateProfile = (req, res, next) => {
  console.log( req.body );
  console.log("Email Address =  ");
  console.log(req.session.emailAddress)
  // +1 EXTRACT DATA FROM USER
  const userData = {
    FullName: req.body.user_name,
    email: req.body.user_email,
    Age: req.body.user_age,
    Birth_date: req.body.user_birthdate,
    Street: req.body.user_street,
    City: req.body.user_city,
    Phone: req.body.user_phone,
    Gender: req.body.user_gender,
  }
  
  
  // +2 UPDATE DATA >> SPECIFY THE UPDATED_USER...
  const updateSql = "UPDATE ?? SET ? where ?? = ?";
  db.query(updateSql, ['User', userData, 'User.email', req.session.emailAddress ], (err, rows, fields) => {
    if ( err ) {
      console.log(err)
      return res.redirect("/user/profile");
      // return res.send(err)
    }
    // +3 REDIRECT TO PROFILE PAGE
    // console.log(rows);
    res.redirect("/user/profile");
  }).sql
}
module.exports = {
  login: login,
  signup: signup,
  checkUser: checkUser,
  createUser: createUser,
  getForgotPassword, getForgotPassword,
  forgotPassword: forgotPassword,
  getResetPassword: getResetPassword,
  resetPassword: resetPassword,
  logout: logout,
  getProfile: getProfile,
  updateProfile: updateProfile,
};

// // Check user existance
//  db.query("select * from User", (err, rows, fields) => {
//   let cnt = 0;
//   global.checked = () => { 
//     while(cnt < rows.length) {
//       if ( rows[cnt].email == req.body.email) {
//         console.log(req.body.email)
//         console.log(rows[cnt].email)
//         return true
//       }
//     cnt++;
//     }
//   }
//   // Send error message
//   // res.send("email exist aready"); 
//  })
//  console.log(global.checked)
//  if ( global.exist ) {
//     res.redirect("/user/signup")
//     return
//   }

 
//  // Add new user
//  const SQL = "INSERT INTO User SET ?";
//  let hashedPassword = await bcrypt.hash(req.body.password, 10);
//  let newUser = {
//   User_id: Math.floor((Math.random() * 2000) + 1),
//   FullName: req.body.name,
//   email: req.body.email,
//   age: 20,
//   Password1: hashedPassword,
//   Birth_date: null,
//   Street: null,
//   City: null,
//   Phone: null,
//   Gender: null,
//   State: null,
//   Medicine: null,
//   Medicine_history: null,  
//  }
//  db.query(SQL, newUser, (err, rows, fields) => {
//   if ( err ) {
//     throw err;
//   }else {
//     // res.redirect("/")
//     res.redirect("/")
//   }
//  }).sql;
