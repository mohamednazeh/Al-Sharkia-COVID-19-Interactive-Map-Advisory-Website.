


// )+ Get all radios
expSys.allRds = () => {
  return EXPERT_WINDOW.querySelectorAll("input[type=radio");
} 

// )+ Handle all radios of diagnose service
expSys.init.handleRds = () => {
  // console.log(expSys.allRds());
  expSys.allRds().forEach((rd) => {
    rd.onchange = (vnt) => {
      vnt.target.parentElement.parentElement.style.backgroundColor = "rgb(0 241 13 / 20%)";
    }    
  });
};
// expSys.init.handleRds()



