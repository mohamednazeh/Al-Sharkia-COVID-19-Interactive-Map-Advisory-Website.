// + INTERFACEs
const EXPERT_WINDOW = document.querySelector('.dagnosis');
// console.log(EXPERT_WINDOW)
// console.log(window.innerHeight)'
// + All questions of diagnose service
const ALL_QUNTS = document.querySelectorAll('.question-cntr');
// console.log(ALL_QUNTS);
// )+ Import the current page of diagnose service
expSys.getCrntPg = () => {
  return EXPERT_WINDOW.querySelector('.current');
};

expSys.getPgNm = (crntPg) => {
  // console.log('15: '+expSys.getCrntPg())
  return {
    pgNm: crntPg.attributes.expPg.value,
  }
}

