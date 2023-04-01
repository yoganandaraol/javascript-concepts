import express from 'express';
import sse from 'sse';

const app = express();

app.use(express.static('public'));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});