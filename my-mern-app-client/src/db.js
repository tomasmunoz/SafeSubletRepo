import { connect } from 'mongoose';

connect('mongodb://localhost:3000/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database!');
}).catch((err) => {
  console.error('Error connecting to the database', err);
});
