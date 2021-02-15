const http = require("http");

const server = htttp.createServer((req, res) => {
  console.log("request made");
});

server.listen(5000, "localhost", () => {
  console.log("listening for requiest");
});
