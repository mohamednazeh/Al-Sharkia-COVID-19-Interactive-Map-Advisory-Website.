const nodemailer = require("nodemailer")
let webMail = {
  webEmail: 'ahmedelgiedfuture@gmail.com',
  webPassword: 'AH01281603263ah'
}
// email - password - receiver's email  - text

// Create Transporter with specific email and its password
const createTransporter = () => {
  let transporter = nodemailer.createTransport(`smtps://${webMail.webEmail}:${webMail.webPassword}`);
  return transporter;
}


module.exports = {
  createTransporter: createTransporter,
};


