var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><head><title>Simple Server</title></head><body>Web server says Welcome!</body></html>');
}).listen(3000,"127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');