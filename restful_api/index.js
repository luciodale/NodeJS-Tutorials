const express = require ('express');

const app = express();

app.set('port', process.env.port || 3000);
app.use(express.json());



// Server Data
const teams = [
{ id:1, name: 'France'},
{ id:2, name: 'Croatia'},
{ id:3, name: 'England'}
];

app.listen(app.get('port'), function (req) {
	console.log('Express server listening to port %s', app.get('port')); 
});

// route
app.get('/', (req, res) => {

	res.send('Welcome to this Restful API service..');

});


// read all operation
app.get('/api/teams', (req, res) => {

	res.send(teams);

});

// read one operation
app.get('/api/teams/:id', (req, res)=> {

	let id = parseInt(req.params.id);
	let team = teams.find(c => c.id === id);
	if(!team) return res.status(404).send(req.method + ' The team was not found');
	res.send(team);
});