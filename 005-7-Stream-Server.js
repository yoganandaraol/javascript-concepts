import express from 'express';
import sse from 'sse';

const app = express();

// Server-side event stream endpoint
app.get('/stream', (req, res) => {
  console.log("------------------- Client is creating ---------------");
  const client = new sse(res);

  // Send data to the client every second
  setInterval(() => {
    client.send({ 'data': 'Hello, world!' });
  }, 5000);
});

// Start the server
const server = app.listen(3000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
