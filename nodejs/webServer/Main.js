var http = require('http');

var server = http.createServer((request, response) => {
  console.log('We received a request', request.eventNames());
  response.write("<h1>Hello, Node!</h1>");
  response.end();
});

server.listen(3000);
