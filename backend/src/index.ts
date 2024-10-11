import http from "http";

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
    });
    const result = JSON.stringify({ ok: true });
    res.write(result);
    res.end();
  })
  .listen(8080);
