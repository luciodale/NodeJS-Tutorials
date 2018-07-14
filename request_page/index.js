/*jshint esversion: 6 */
// https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
const https = require('https');
const fs = require('fs');

const options = {
	hostname:'en.wikipedia.org',
	port:443,
	path:'/wiki/List_of_TCP_and_UDP_port_numbers',
	method:'GET'
};


const request = https.request(options, (res) => {

	console.log('I am here');

	// local variable to store data streams
	let response = "";

	res.setEncoding('UTF-8');
	// logging first chunk of data
	res.once('data', (chunk) => {
		console.log(chunk);
	});

	// concatenate all chunks to local variable
	res.on('data', (chunk) => {
		response += chunk;
		console.log('chunk', chunk.length);
	});

	// write variable into local file
	res.on('end', () => {
		fs.writeFile('index.html', response, (err) =>{
			if(err) throw err;
		});
	});


});

request.end();