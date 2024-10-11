import http from "http";

http
  .createServer(function (req, res) {
    const headers = {
      "Content-Type": "application/json",
    };
    res.writeHead(200, headers);
    res.write(`{"ok": true}`);
    res.end();
  })
  .listen(8080);
