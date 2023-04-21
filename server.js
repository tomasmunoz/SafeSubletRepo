const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/SafeSublet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
const Users = mongoose.model('users', userSchema);

const propSchema = new mongoose.Schema({
  type: String,
  address: String,
  description: String,
  price: Number,
  image: String
});
const Properties = mongoose.model('properties', propSchema);

app.get('/api/users', (req, res) => {
  Users.find({}).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.get('/api/users/:id', (req, res) => {
  Users.findById(req.params.id).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.post('/api/users', (req, res) => {
  const newUser = new Users(req.body);
  Users.create(newUser).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.put('/api/users/:id', (req, res) => {
  const newUser = new Users(req.body);
  Users.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.delete('/api/users/:id', (req, res) => {
  Users.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.get('/api/properties', (req, res) => {
  Properties.find({}).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.get('/api/properties/:id', (req, res) => {
  Properties.findById(req.params.id).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.post('/api/properties', upload.single('image'), (req, res) => {
  const { type, address, description, price } = req.body;
  const imagePath = req.file.path;
  const newProperty = new Properties({ type, address, description, price, image: imagePath });
  Properties.create(newUser).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.put('/api/properties/:id', (req, res) => {
  const newUser = new Users(req.body);
  Properties.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.delete('/api/properties/:id', (req, res) => {
  Properties.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}');
});
