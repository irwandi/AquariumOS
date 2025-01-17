const { createServer } = require('node:http');
const hostname = '0.0.0.0';
const port = 8000;
const server = createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.write('<h2>Hello World</h2><br>');
	res.end('<b>Buy Me Coffee : </b><br>BTC : 15699Wo49ULzS7HGgZPrKmVxjSPGpptUJZ<br>Doge : D8wHv4PpfZk1qCpkqbp2TyMjNuu2bax9UY');
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
