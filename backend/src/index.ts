import http from "http";

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Successfully posted the data</h1>`);
    res.end();
  })
  .listen(8080);
