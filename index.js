// Http1 Server

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log('HTTP/1 server listening on port 3000');
});



// Http2 Server

const http2 = require('http2');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http2.createSecureServer(options, app);
server.listen(3000, () => {
  console.log('HTTP/2 server listening on port 3000');
});


// Http3 server
// HTTP/3 is not yet widely supported in Node.js, so to use it you'll need to use a library that implements it, such as Quic. Here's an example using Quic:

const quic = require('node-quic');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = quic.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
});

server.listen(3000, () => {
  console.log('HTTP/3 server listening on port 3000');
});