const url = "http://care.gov.eg/egyptcare/index.aspx";
const { createCovidStatistics } =  require("../services/web_scraping/coronaStatistics");


// )+ Get home
let getHome =  async (req, res) => {
  // console.log(await createCovidStatistics(url));
  res.render("index", {
    title: "Al Sharkia Health Care",
    logout: req.session.loggedinUser,
    covidData : await createCovidStatistics(url),
  })
};

module.exports = {
  getHome: getHome,
};