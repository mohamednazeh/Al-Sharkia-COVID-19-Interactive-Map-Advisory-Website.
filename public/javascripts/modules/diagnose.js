
// )+01 Examine the current expert system page to define the next page
expSys.modules.diagnose.checkState = (crntPgName, values) => {
  let rtnPgNm; 
  let notSever, x = 0;
  switch(crntPgName) {
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+1 Fever Check
    case 'feverCheck':
      // console.log("feverCheck Page")
      if (values[0][0] == "yes") {
        rtnPgNm = "fluLikeSymptoms";
        console.log(rtnPgNm);
      }else {
        rtnPgNm = "sneezeCheck";
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+2 Sneeze Check
    case "sneezeCheck":
      if (values[0][0] === "yes") {
        rtnPgNm = "itchyEyesCheck";
      }else {
        rtnPgNm = "doctorConsult";
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+3 Flu Like Symptoms
    case "fluLikeSymptoms":
      // console.log(values)
      let checkNo = true;
      for (let x =0; x < values.length; x++) {
        if (values[x][0] == "yes") {
          rtnPgNm = "primeCheck"
          checkNo = false;
          // console.log("one yes");
          expSys.attrs.patient.state = "plus symptoms";
          break;
        }
      }
      if(checkNo) {
        rtnPgNm = "primeCheck";
        console.log('All No')
        expSys.attrs.patient.state = "minus symptoms";
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+4 Prime Check
    case "primeCheck":
      let symptoms = expSys.attrs.patient.state;
      // for ( let y =0; y < values.length; y++) {
        if ( values[0][0] == "no" ) {
          if( values[1][0] == "yes") {
            rtnPgNm = expSys.modules.tools.checkSymptoms(symptoms, (checkSym) => {
              if (checkSym) {
                return "examinationsCase";
              }
              return "isolatedCase";          
            })            
          }else {
            rtnPgNm = expSys.modules.tools.checkSymptoms(symptoms, (checkSym) => {
              if (checkSym) {
                return "isolatedCase";
              }
              return "stableCase";          
            })
          }
        }else {
          rtnPgNm = expSys.modules.tools.checkSymptoms(symptoms, (checkSym) => {
            console.log("Yes first");
            console.log(checkSym);
            if (checkSym) {
              return "examinationsCase";
            }
            return "isolatedCase";          
          })
        }
      // }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+5 Ithcy Eyes Check
    case "itchyEyesCheck":
      if (values[0][0] == "yes") {
        rtnPgNm = "allergiesCase";
      }else {
        rtnPgNm = "coldCase";
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+6
    case "failureCheck":
      if (values[0][0] == "yes") {
        rtnPgNm = "criticalCase";
      }else {
        rtnPgNm = "severFormCheck";
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+7 Sever Form Check
    case "severFormCheck":
        notSever = true,
        x = 0;
      while ( notSever && x < 6 ) {
        if ( values[x][0] == "yes" ) {
          notSever = false;
        }
        x++;
      }
      if ( !notSever ) {
        rtnPgNm = "severCheck";
      }else {
        rtnPgNm ="moderateFormCheck";
      }
      break;    
     /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+8 Moderate Form Check
    case "moderateFormCheck":
      notSever = true;
      x = 0;
      while ( notSever && x < 3 ) {
        if ( values[x][0] == "yes" ) {
          notSever = false;
        }
        x++;
      }
      if ( !notSever ) {
        rtnPgNm = "moderateCase";
      }else {
        rtnPgNm ="mildeCase";
      }
      break;    
    
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+9 Mild Case Check 
    case "mildeCase":
      rtnPgNm ="medicineFormSelect";
      break;
    // )+10 Medicine Form Select
    case "medicineFormSelect":
      notSever = true;
      x = 0;
      while ( notSever && x < 12 ) {
        if ( values[x][0] == "yes" ) {
          notSever = false;
        }
        x++;
      }
      if ( !notSever ) {
        rtnPgNm = "mildCaseMedicines";
      }else {
        rtnPgNm ="stableSuspectedCase";
      }
      break;   
      
     // )+11 Check for stable case
     case "isStableCase":
      // expSys.attrs.patient.isStableCase = true;
      if (values[0][0] === "yes") {
        rtnPgNm = "examinationsCase";
      }else {
        rtnPgNm = "stableCase";
      }
      break;
  };
  return rtnPgNm;
};// @End checkState()
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// # Get & Handle values of all diagnose pages
expSys.modules.diagnose.getValues = (selectedPgName, crntPg) => {
  let values = [];
  let qst,
    qstns,
    qstnsInpts;
  switch(selectedPgName) {
    // )+1 Fever Check
    case "feverCheck":
      // # Import all answers of all questions
      qst = crntPg.getElementsByTagName("input");
      values.push(expSys.modules.tools.checkRadioVls(qst, crntPg));
      // console.log(values)
      // # Export values
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+2 Sneeze Check
    case "sneezeCheck":
      // # Import all answers of all questions
      qst = crntPg.getElementsByTagName("input");
      values.push(expSys.modules.tools.checkRadioVls(qst, crntPg));
      // console.log(values)
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+3 Flu Like Symptoms
    case "fluLikeSymptoms":
      // # Import all vls
      qstnsInpts = expSys.modules.tools.checkFrmsVls(crntPg);
      // console.log(qstnsInpts);
      for (let i =0; i < qstnsInpts.length; i++) {
        values.push(expSys.modules.tools.checkRadioVls(qstnsInpts[i], crntPg, true));
      }
      // console.log(values);
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+4 Prime Check 
    case "primeCheck":
      // # Import all vls
      qstnsInpts = expSys.modules.tools.checkSemiFrmVls(crntPg);
      for ( let o =0; o < qstnsInpts.length; o++) {
        values.push(expSys.modules.tools.checkRadioVls(qstnsInpts[o], crntPg));
      }
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+5 Itchy Eyes 
    case "itchyEyesCheck":
      // # Import all answers of all questions
      qst = crntPg.getElementsByTagName("input");
      values.push(expSys.modules.tools.checkRadioVls(qst, crntPg));
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+6 Faiulre Check
    case "failureCheck":
      // # Import all answers of all questions
      qst = crntPg.getElementsByTagName("input");
      values.push(expSys.modules.tools.checkRadioVls(qst, crntPg));
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+7  Sever Form Check
    case "severFormCheck":
      // # Import all vls
      qstnsInpts = expSys.modules.tools.checkFrmsVls(crntPg);
      // console.log(qstnsInpts);
      for (let i =0; i < qstnsInpts.length; i++) {
        values.push(expSys.modules.tools.checkRadioVls(qstnsInpts[i], crntPg, true));
      }
      console.log(values);
      break;
    
    
    
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+8 Moderate Form Check
    case "moderateFormCheck":
      // # Import all vls
      qstnsInpts = expSys.modules.tools.checkFrmsVls(crntPg);
      // console.log(qstnsInpts);
      for (let i =0; i < qstnsInpts.length; i++) {
        values.push(expSys.modules.tools.checkRadioVls(qstnsInpts[i], crntPg, true));
      }
      console.log(values);
      break;
    
    
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+9 Mild Case 
    case "mildeCase":
      values = [["None Values"]];
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    /// )+10 Medicine Form Select
    case "medicineFormSelect":
      // # Import all vls
      qstnsInpts = expSys.modules.tools.checkFrmsVls(crntPg);
      // console.log(qstnsInpts);
      for (let i =0; i < qstnsInpts.length; i++) {
        values.push(expSys.modules.tools.checkRadioVls(qstnsInpts[i], crntPg, true));
      }
      console.log(values);
      break;
    /* ------------------------------------------------------------------- */
    /* ------------------------------------------------------------------- */
    // )+11 Check for stable case
    case "isStableCase":
      // # Import all answers of all questions
      qst = crntPg.getElementsByTagName("input");
      values.push(expSys.modules.tools.checkRadioVls(qst, crntPg));
      // console.log(values)
      break;    
  }
  return values;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # Configuration of 'tools' module
expSys.modules.diagnose.documentation = {
  methods: [
    {name: "checkState", use: "Define the next diagnose service page"},
    {name: "getValues", use: "get the values from diagnose service page"},
  ],
  attrs: []
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
