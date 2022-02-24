var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const expressSession = require("express-session");
var favicon = require('serve-favicon');
//require('./root/createAdmin');



// const newEmail = "moahedBellah@gmail.com";



// global.$_user;
// Middlewares
const { auth } = require("./middlewares/auth")

var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public/images', 'fc.ico')))


// const file = path.join(__dirname, '/services/subscription/subscribersEmails.json');
// jsonfile.readFile(file)
//   .then(obj => console.dir(obj))
//   .catch(error => console.error(error))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// )+ Use express layouts
app.use(expressLayouts);
// )+ Change place of layout
app.set('layout', './layouts/layout');
// )+3 Set view engine )+EJS
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressSession({
  saveUninitialized: false,
  secret: "sharqia health care",
  resave: false
}))

// )+4 Routes map
// )+4.1 Home
app.use('/', require("./routes/index"))

// )+4.2 Users
app.use('/user', require('./routes/user'))

// )+4.3 Diagnose Service
app.use("/diagnose", require("./routes/diagnose"))

// )+4.3 Diagnose Service
app.use("/map", require("./routes/map"))

// )+4.4`Admin Tasks
app.use("/admin", require("./routes/admin/admin"))

//  )+4.5 Customer Service
app.use('/customer', require("./routes/customer/customer"))
//
//app.get("/ajax", (req, res, next) => {
//	console.log("ajax get...")
//})

app.post("/ajax1", (req, res, next) => {
	console.log("ajax post...")
	var json = JSON.parse(req.body.hospitals);
	console.log(json[0])
//	res.status(200).redirect("/")
//	 res.redirect("/");
	
})


// )+4.4 
// app.get('/profile', (req , res, next)=>{
//   // res.send("<form action='/user/logout' method='delete'><button type='submit'> LogOut </button></form>")
//   // // json(req.session.id)
  
//   if (req.session.loggedinUser) {
//     res.send("<form action='/user/logout' method='get'><button type='submit'> LogOut </button></form>")
//     // res.send(req.session.emailAddress)
//   }else {
//     res.redirect("/user/login")
//   }
  

// })

app.get("/logout", (req, res, next) => {
  // req.session.destroy(function(err){  
  //   if(err){  
  //     console.log(err);
  //   }else {  
  //     console.log("logout order....");
  //     res.redirect("/");
  //   }  
  // }); 
  req.session.user_id = "none";
  req.redirect("/")
})




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
