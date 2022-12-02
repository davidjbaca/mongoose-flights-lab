
const Flight = require("../models/flight");

module.exports = {
  create,
};


function create(req, res) {




  Flight.findById(req.params.id, function (err, flightDoc) {
    if (err) {
      console.log(err, " <- err from flight.findById callback");
      return res.send("error from create destinations check the terminal");
    }

    console.log(flightDoc, " <- flight from the database!");
    

    
    flightDoc.destinations.push(req.body);
  
    flightDoc.save(function (err) {


      res.redirect(`/flights/${req.params.id}`);

    });
  });
}
