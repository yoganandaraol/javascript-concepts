import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/stream') {
    const stream = fs.createReadStream('./data.txt');
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
