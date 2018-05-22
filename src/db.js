const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to db');
});

db.on('error', () => {
  console.log('db connection error');
});
