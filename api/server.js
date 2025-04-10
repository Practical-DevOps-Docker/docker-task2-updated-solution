const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [{name: 'user1'}];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/users', (req, res) => {
  console.log('get all users')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
