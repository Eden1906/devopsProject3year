const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});
// eslint-disable-next-line no-unused-vars
app.post('/register', (req, res) => {
  // Add your code for handling the registration request here
});

module.exports = app;
