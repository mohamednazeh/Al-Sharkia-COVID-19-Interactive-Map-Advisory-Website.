// Authentication factor
// let authenticated = CheckAuthentication($_user);
// require("dotenv").config();
// const db = require("../root/database")

// const auth = (req, res, next) => {
//   // // Check user authentication
//   // // console.log(global.$_user);
//   // console.log("+++++++++++++++++++++++++")
//   // console.log(req.session.id);
//   // console.log("+++++++++++++++++++++++++")
//   // if (req.session.id !== false) {
//   //   next()
//   // }else {
//   //   res.redirect("/user/login")
//   //   // next()
//   // }
//   return new Promise( async (resolve, reject) => {
//     req.session.user_id = req.session.user_id || "";
//     if ( req.session.user_id === "" ) {
//       console.log("Session Id is Empty");
//     }
//     console.log(console.log(req.session.user_id));
//     if ( req.session.user_id !== "undefined" ) {
//         console.log(req.session.user_id);
//         const SQL = "select email from User where User_id = ?";
//         await db.query( SQL, [req.session.user_id], (err, rows) => {
//           // let checked = true;
//           // let cnt = 0;
//           if ( rows.length > 0) {
//             console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//             console.log(rows);
//             console.log(req.session.user_id);
//             return resolve(next())
//           }else {
//             const err = new Error("No account");
//             err.status = 400;
//             return next(err);
//           }
//         })
//       }else {
//         const err = new Error("Not authorized! Go back!");
//         err.status = 400;
//         return next(err);
//       }
//   })
// }

// // // Check authentication
// // function CheckAuthentication ($_user) {
// //   return $_user;
// // }

const isUser = ( req, res, next ) => {
  
  if ( req.session.emailAddress ) {
    next()
  }else {
    res.redirect("/")
  }
  
}


module.exports = {
  // auth: auth,
  isUser: isUser,
};