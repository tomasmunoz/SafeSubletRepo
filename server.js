const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');

mongoose.connect('mongodb://0.0.0.0:27017/SafeSublet', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

const mySchema = new mongoose.Schema({
  name: String,
  age: Number
});

const MyModel = mongoose.model('users', mySchema);

app.use(cors());
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/api/users', (req, res) => {
  MyModel.find({}).then((users) => {
    res.json(users);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.post('/api/users', (req, res) => {
  const newDoc = new MyModel({ name: 'Jane Duo', age: 30 });
  MyModel.create(newDoc).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});
