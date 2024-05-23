const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { Content_Type: 'text/html; charset=utf-8' });
  fetch('https://api.chucknorris.io/jokes/random').then((response) =>
    response.json().then()
  );
  res.end('<> ciao</>');
});

server.listen(port, host, () => {
  console.log(`Server avviato su http://${host}:${port}`);
});
