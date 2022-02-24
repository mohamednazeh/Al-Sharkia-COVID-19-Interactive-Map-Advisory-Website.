const subscripersService = require('../../services/subscription/subscribersService')


// Request a susbscription service
const reqSubscriptionService = ( req, res ) => {
  // Add new subscribers
  console.log(req.body.email);
  subscripersService.addNewSubscripers(req.body.email)
  res.redirect("/")
}

module.exports = {
  reqSubscriptionService : reqSubscriptionService,  
};
