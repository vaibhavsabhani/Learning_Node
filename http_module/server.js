const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, World!");
    res.end();
  }
  if (req.url === "/status") {
    res.write("status: ok");
    res.end();
  }
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
