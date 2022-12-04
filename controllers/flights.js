const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
	new: newFlight,
	create, 
	index, 
	show
}

// function show(req, res) {

// 	Flight.findById(req.params.id, function(err, flightDoc) {
// 		console.log(flightDoc)
		
// 	  res.render('flights/show', { title: 'Flight Detail', flight: flightDoc});
// 	});
//   }


function show(req, res) {
    Flight.findById(req.params.id, function (err, flightDoc) {

        Ticket.find({ flight: flightDoc }, function (err, ticketsDoc) {
            console.log(ticketsDoc, ' <----- ticket information')
            console.log(flightDoc)
            res.render('flights/show', { flight: flightDoc, tickets: ticketsDoc })
        })

    })
}


function index(req, res){

	Flight.find({}, function(err, flightDocs){
		
		console.log(flightDocs)

		res.render('flights/index', {flights: flightDocs, name: ''})
	})

}

function create(req,res){

    console.log(req.body,'contents of the form');

    Flight.create(req.body, function(err, flightDoc){
		if(err){
			console.log(err);
			return res.send('err creating check the terminal')
		} else{
	
		console.log(flightDoc);
		

		// respond to the client
		res.redirect('/')
		}
	}); 

    
}


function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flights/new', {defaultDeparture: newFlight.departs});
};