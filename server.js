const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const fs = require('fs');
const path = require('path');

const DB_FILE = 'norrisDb';

const readJSONData = (nomeFile) => {
  const filePath = path.join(__dirname, nomeFile + '.json');
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    if (fileData) {
      return JSON.parse(fileData);
    }
  }
  return [];
};

const writeJSONData = (nomeFile, newData) => {
  const filePath = path.join(__dirname, nomeFile + '.json');
  const fileString = JSON.stringify(newData);
  fs.writeFileSync(filePath, fileString);
};

const server = http.createServer((req, res) => {
  const norrisDb = readJSONData('norrisDb');
  switch (req.url) {
    case '/favicon.ico':
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end();
      break;
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      //test con API
      fetch('https://fakestoreapi.com/users')
        .then((response) => response.json())
        .then((users) => {
          console.log(users);
          res.end();
        });
      break;
    default:
      res.end();
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server avviato su http://${host}:${port}`);
});
