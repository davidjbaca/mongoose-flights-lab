const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
  create, 
  new: newTicket
};


function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.params.id, '--this is params id')
    Ticket.create(req.body, function(err, ticketDoc){
        if (err) {
			console.log(err);
			return res.send("err creating check the terminal");
		}
		console.log(ticketDoc);
		res.redirect(`/flights/${req.params.id}`)
    })
}

function newTicket(req, res) {
    
      res.render('tickets/new', {flight: req.params.id});
}


