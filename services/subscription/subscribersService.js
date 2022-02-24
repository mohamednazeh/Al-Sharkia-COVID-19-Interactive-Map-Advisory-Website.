var fs = require("fs");
const subscribersEmailsFile = "services/subscription/subscribersEmails.txt";



const addNewSubscripers = ( subscribersEmails ) => {
  fs.readFile( subscribersEmailsFile, ( err, buf ) => {
    if ( err ) console.log( err );
    // Add new email of subscriber
    newBuf = buf.toString() + subscribersEmails + ',';
    // console.log( newBuf.toString() );
    // write new email
    fs.writeFile( subscribersEmailsFile, newBuf, ( err ) => {
      if ( err ) console.log( err );
    })
  })
}



module.exports = {
  addNewSubscripers : addNewSubscripers,
  
  
};
