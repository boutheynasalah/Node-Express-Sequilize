const http = require("http");
const app = require("./app");

const hostname = "127.0.0.1";
const port = 3000;

app.set("port", port);
app.set("hostname", hostname);

const server = http.createServer(app);

//For test purpose
app.get("/", function (req, res) {
  res.send("Server running");
});

server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});
