const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Hello Wolrd!",
  });
});

app.get("/users", (req, res) => {
  res.send({
    name: "John Doe",
    age: 28,
    email: "johndoe@email.com.br",
  });
});

module.exports = app;
