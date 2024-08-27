// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
