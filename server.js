const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/save-email', (req, res) => {
  const email = req.body.email;
  if (email) {
    fs.appendFile('email.txt', email + '\n', (err) => {
      if (err) return res.status(500).send('Error saving email.');
      res.send('Email saved successfully.');
    });
  } else {
    res.status(400).send('Email is required.');
  }
});

app.get('/emails', (req, res) => {
  fs.readFile('email.txt', 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Could not read email list.');
    res.json({ emails: data.trim().split('\n') });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
