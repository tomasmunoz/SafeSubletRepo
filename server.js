const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'my-mern-app-client/build')));

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
