//Build a server that responds with “Hello, World!” at localhost:3000.

import http from "http";

//http.createServer Creates an HTTP server that listens for requests.
const server = http.createServer((req, res) => {
  // Set status code and multiple headers
  res.writeHead(200, {
    "Content-Type": "text/html",
    "X-Powered-By": "Node.js",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Set-Cookie": "sessionid=abc123; HttpOnly",
  });
  // Respond Body
  res.end("<h1>Hello, World!</h1>");
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
