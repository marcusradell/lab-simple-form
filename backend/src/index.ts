import http from "http";

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    const result = JSON.stringify({ ok: true });
    res.write(result);
    res.end();
  })
  .listen(8080);
