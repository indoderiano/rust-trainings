const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

require('dotenv').config()


console.log("ENV STATUS IS ", process.env.STATUS);



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});