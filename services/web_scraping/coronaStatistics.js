const cheerio = require("cheerio");
const axios = require("axios");


const getUrl = ( url ) => {
   // console.log(response);
  return new Promise( async ( resolve, reject ) => {
    return resolve(await axios.get(url));
  }) 
}

const getResponseContent = ( response ) => {
  // const response = await getUrl( url );
 return new Promise( async ( resolve, reject ) => {
  try {
    return resolve(await cheerio.load(response.data));
  }catch ( e ) {
    reject( e );
  }
 })
  // const a = $("a").href("country/egypt/");
  // console.log($("body"));
  // console.log($("html"));
  // console.log($(".counter").html());
}


const getCovidData = ( url ) => {
  // const $ = await getResponseContent( url );
  return new Promise( async ( resolve, reject ) => {
   
    // Import Data from external website
    const $ = await getResponseContent(await getUrl( url ));
    let dataCntr = $(".counter")
    let covidData = {
      newCases : $(".counter #CPHBody__DMSEgypt__newInfected").text(),    
      newDead : $(".counter #CPHBody__DMSEgypt__newDead").text(),
      totalInfected : $(".counter #CPHBody__DMSEgypt__totalInfected").text(),
      totalDead : $(".counter #CPHBody__DMSEgypt__totalDead").text(),
      totalCured : $(".counter #CPHBody__DMSEgypt__totalcured").text(),
      latestUpdateDate : $(".counter #CPHBody__DMSEgypt__PublishDate").text(),
    }
    return resolve(covidData);
  })
}
const createCovidStatistics =  ( url ) => {
  return new Promise( async ( resolve, reject ) => {
    const UpdatedCovidData = await getCovidData(url);
    // console.log(UpdatedCovidData);
    return resolve(UpdatedCovidData);
  })
}
module.exports = {
  createCovidStatistics:createCovidStatistics,
  // getCovidData: getCovidData,
};
