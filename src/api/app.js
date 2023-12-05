const express = require('express');
const app = express();

const rescue = require('express-rescue');

app.get('/', (req, res) => res.json('Hello, world!'));

app.get('/hello', (req, res) => {
  res.send({ message: 'Hello again, world!' });
});

app.post('/echo', (req, res) => {
  res.status(200).json(req.body);
});

app.get(
  '/error',
  rescue(async (req, res) => {
    throw new Error('erro genérico');
  })
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ errorMessage: err.message });
});

// app.listen(3000, () => {
//   console.log('App ouvindo na porta 3000!');
// });



module.exports = app;