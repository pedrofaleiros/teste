var http = require('http');
var date = require('./myfirstmodule');

/* The function passed into the http.createServer() method
will be executed when someone tries to access the 
computer on port 8080. */

var cont = 0;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Data de hoje: '+ date.myDateTime());
  console.log(cont);
  cont++;
  res.end();
}).listen(8080);