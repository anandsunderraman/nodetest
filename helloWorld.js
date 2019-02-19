var http = require('http');
var fs = require('fs');
// var pg = require('pg');
const { Pool, Client } = require('pg');


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'asunderr',
  password: '',
  port: 5432,
});

client.connect();

client.query('SELECT * from webuser', (err, res) => {
  console.log("Query result is");	
  console.log(res);
  client.end();
});


// var conString = "postgres://postgres:@localhost:5432/asunderr";

// var client = new pg.Client(conString);
// client.connect();
// var query = client.query("SELECT * from webuser");
// console.log(query);



http.createServer(function (req, res) {
  console.log(req);	
  fs.readFile('test1.html', function(err, data) {
  	if (err) {
  		fs.readFile('error.html', function(err, data) {
  			res.writeHead(404, {'Content-Type': 'text/html'});
    		res.write(data);
    		res.end();
  		});
  	} else {
  		res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	res.end();
  	}
    
  });
}).listen(8888);

console.log("Server is running on port 8888");