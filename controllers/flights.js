const Flight = require('../models/flight')

module.exports = {
	new: newFlight,
	create, 
	index
}

function index(req, res){

	Flight.find({}, function(err, flightDocs){
		
		console.log(flightDocs)

		res.render('flights/index', {flights: flightDocs, name: 'Sophia Airlines'})
	})

}

function create(req,res){

    console.log(req.body,'contents of the form');

    Flight.create(req.body, function(err, flightDoc){
		if(err){
			console.log(err);
			return res.send('err creating check the terminal')
		}
	
		console.log(flightDoc);
		

		// respond to the client
		res.redirect('/')
	}); // end of the callback function in Movie.create

    
}

function newFlight(req, res){
	res.render('flights/new')
}