const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage...");
    return;
  }
  if (req.url === "/about") {
    res.end("We started from here...");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `);
});

server.listen(5000);
