const { validationResult, body } = require('express-validator');

const db = require("../../root/database");

const hospitalsService = require("../../services/database/hospitalsService");


const getDashboard = (req, res, nexr) => {
  if (req.session.loggedinAdmin) {
    res.render("admin/dashboard", {
      title: "Admin Dashboard",
      layout: './layouts/admin'
    })
  }else {
    res.redirect("/");
  }
}


const getAdmin = (req, res, next)  => {
  // res.send("Admin Login Form")
  res.render("admin/login", {
    title: "Admin LogIn",
    success: req.session.success,
    error: req.session.error,
  })
}


const checkAdmin = (req, res, next) => {
  const ERRORs = validationResult(req);
  return new Promise( async (resolve, reject) => {
    if (!ERRORs.isEmpty()) {
      req.session.error = ERRORs;
      req.session.success = false;
      // console.log(req.session.error);
      res.redirect("/login/s-p!187")
    }else {
      req.session.success = true;
      res.redirect("/s-p!187/dashboard")
    }    
  })
}


const getManageDatabase = async (req, res, next) => {
  // res.send("Manage Data")
 if (req.session.loggedinAdmin) {
  
  let hospitalsNames = await hospitalsService.getHospitals();
  // console.log(hospitalsNames[0].H_name);
  res.render("admin/manage_database",
    {
      title: "manage Database",
      layout: './layouts/admin',
      hospitalsNames : hospitalsNames,
    }
  )
 }else {
  res.redirect("/")
 }
}

// Update hospitals
const updateHospitals = async ( req, res, next ) => {
  let hospitalData = {
    h_name : req.body.hospital_name,
    numbeds : req.body.numbeds,
    numintesivecasebeds: req.body.numintesivecasebeds,
  }
  let SQL;
  if ( hospitalData.numbeds !== "" && hospitalData.numintesivecasebeds !== ""  ) {
    SQL = " update Hospital set Num_intensive_case_beds = ?, Num_beds = ?, Admin_id = ? where H_name = ?";  
    // console.log(hospitalData.numbeds, hospitalData.numintesivecasebeds);
    await db.query( SQL, [ hospitalData.numintesivecasebeds, hospitalData.numbeds, req.session.adminAcc.Admin_id, hospitalData.h_name ], ( err, result ) => {
      console.log( result );
    })
    res.redirect("/admin/database/manage")
    // SQL = " update Hospital set Num_intensive_case_beds = ? where H_name = ?";
  }else if ( hospitalData.numbeds !== "" ) { 
    SQL = " update Hospital set Num_beds = ?, Admin_id = ? where H_name = ?";  
    await db.query( SQL, [ hospitalData.numbeds, req.session.adminAcc.Admin_id, hospitalData.h_name ], ( err, result ) => {
      console.log( result );
    })
    res.redirect("/admin/database/manage")
  }else if ( hospitalData.numintesivecasebeds !== "" ) {
    SQL = " update Hospital set Num_intensive_case_beds = ?, Admin_id = ? where H_name = ?"; 
    await db.query( SQL, [ hospitalData.numintesivecasebeds, req.session.adminAcc.Admin_id, hospitalData.h_name ], ( err, result ) => {
      console.log( result );
    })
    res.redirect("/admin/database/manage")
  }else {
    res.redirect("/admin/database/manage")
  } 
   // Update intensive care beds
  
  
  
  
  console.log(hospitalData);
  // Update admin_id - num_intensive_case_beds - num_beds - 
  
}


module.exports = {
  
  getAdmin: getAdmin,
  checkAdmin: checkAdmin,
  getDashboard: getDashboard,
  getManageDatabase: getManageDatabase,
  updateHospitals : updateHospitals,
  
  
};
