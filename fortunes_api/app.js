const express = require('express');
const fortunes = require('./data/fortune');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.get('/fortunes', (req, res, next) => {
  res.json(fortunes);
});

app.get('/fortunes/random', (req, res, next) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get('/fortunes/:id', (req, res) => {
  res.json(fortunes.find(f => f.id == req.params.id));
});

const writeFortunes = json => {
  fs.writeFile('./data/fortune.json', JSON.stringify(json), err => console.log(err));
};

app.post('/fortunes', (req, res, next) => {
  console.log(req.body);
  const { message, lucky_number, spirit_animal } = req.body;

  const new_fortunes = fortunes.concat({
    id: uuidv4(),
    message,
    lucky_number,
    spirit_animal
  });

  writeFortunes(new_fortunes);

  res.json(new_fortunes);
});

app.put('/fortunes/:id', (req, res, next) => {
  const { id } = req.params;

  const oldFortunes = fortunes.find(f => f.id == id);

  ['message', 'lucky_number', 'spirit_animal'].forEach(key => {
    if (req.body[key]) oldFortunes[key] = req.body[key];
  });

  writeFortunes(fortunes);

  res.json(fortunes);
});

app.delete('/fortunes/:id', (req, res, next) => {
  const { id } = req.params;

  const newFortunes = fortunes.filter(f => f.id != id);

  writeFortunes(newFortunes);

  res.json(newFortunes);
});

module.exports = app;