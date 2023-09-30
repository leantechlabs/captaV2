// Importing the http module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1'; // You can change this to your preferred IP address
const port = 3000; // You can change this to any available port

// Creating a server

const server = http.createServer((req, res) => {
  // Handling incoming requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server is running');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
