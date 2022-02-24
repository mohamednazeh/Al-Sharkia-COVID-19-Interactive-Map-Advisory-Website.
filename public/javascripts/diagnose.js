// +3 Display the next page or the previous page
function expSysGuider(cfg)
{ 
  // )-1 Check configuration of process
  let selectedPgName = cfg.selectedPgName || '',
     mission     = cfg.mission || 'next',
     constraintId = cfg.constraintId || true;
     // )+1  Select current page
  const crntPg = expSys.getCrntPg();
  // )+2 Remove current class from current page
 
  crntPg.classList.remove('current');
  console.log("@req >> _Next_Page_");
  // )+3 Check attribute based on cofiguration object
  if (mission === 'next') {
    // # Handle error of doesn't specify an answer
    expSys.error = false;
    
    // )+ Import Values of Diagnose Service Page
    let values = expSys.modules.diagnose.getValues(crntPg.attributes.expPg.value, crntPg);
    console.log(values);
    // +01 Check state to decide which page need to be displayed
    
    // )+ Return the name of the next page
    selectedPgName = expSys.modules.diagnose.checkState(crntPg.attributes.expPg.value, values);
    console.log(selectedPgName);
  }
  // )+4 Select selectedPg item
  
  
  if ( expSys.attrs.patient.isStableCase && mission == "back") {
    
    let pgNm = expSys.getPgNm(crntPg).pgNm;
    // console.log(pgNm);
    if (pgNm == "examinationsCase" || pgNm == "stableCase") {
      // Change the default page name
      selectedPgName = "isStableCase";
    }
  }
  
  const selectedPg = () => {
    let allExpPgs = EXPERT_WINDOW.querySelectorAll("aside"),
      expWnd1 = '';
    // # )-2 Check each expert system's window to match name
    allExpPgs = allExpPgs.forEach( (expWnd) => {
      // )-3 Check expPg attribute
      if (expWnd.attributes.expPg.value === selectedPgName) {
        expWnd1 = expWnd;
        return;
      }
    });
    return expWnd1;
  }
  
  // # Check mission
  if ( mission == "back" ) {    
  
    // # Force hide the page
    selectedPg().classList.add('current');
    return;
  }
  if ( !expSys.error ) {
    selectedPg().classList.add('current');
    
  }else {
    animateMessage("There are questions should be answered...")
  }
  
}// @End expSysGuider()

const animateMessage = (msg) => {
  const errorMessage = document.querySelector(".error-message");
  let messageCntr;
  if ( errorMessage == null ) {
    // Create DOM of Message
    messageCntr = document.createElement("p");
    messageCntr.innerHTML = msg;
    messageCntr.style.padding = "8px",
    messageCntr.style.textAlign = "center";
    messageCntr.style.backgroundColor = "#ee6c6c";
    messageCntr.style.color = "white";
    messageCntr.style.width = "367px";
    messageCntr.style.height = "37px";
    messageCntr.style.fontSize = "20px";
    messageCntr.style.position = "absolute";
    messageCntr.style.top = "-100px";
    messageCntr.style.left = "50%";
    messageCntr.style.zIndex = "5";
    messageCntr.style.borderRadius = "7px";
    messageCntr.style.fontSize = "15px";
    // messageCntr.style.display = "none";
    messageCntr.style.transform = "translate(-50%, -50%)";
    messageCntr.style.boxShadow = "1px 1px 18px #ee6c6c";
    messageCntr.classList.add("error-message");
    document.body.prepend(messageCntr);
  }else {
    messageCntr = errorMessage;
  }
   
  
  
  messageCntr.animate([
    { top: "-100px", 
      // display: "none"
    },
    { top: "100px",
      // display: "block"
    },
  ], {
    delay: 0,
    duration: 700,
    iterations: 1,  
    endDelay : 0,
    easing: "ease-in-out",
  })
  messageCntr.style.top = "100px";
  setTimeout( () => {
    messageCntr.style.top = "-100px";
    // errAnimate = true;
  }, 5000)
}
