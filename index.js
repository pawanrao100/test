var http = require('http');
const port = process.env.PORT || 8000;
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(port, () => {
  console.log("pawan rao node js ");
});