const express = require("express");
const cors = require("cors");

const apiRouter = express.Router();

const data = {
  todos: [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Node" },
    { id: 3, title: "Learn Express" },
  ],
};

apiRouter.get("/", (req, res) => {
  res.json({
    message: "Hello from the API",
  });
});

apiRouter.get("/with-cors", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("X-CORS-Policy", "CORS-Manual");

  res.json(data);
});

apiRouter.options("/with-cors", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD");

  res.send();
});

apiRouter.post("/with-cors", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("X-CORS-Policy", "CORS-Manual");

  data.todos.push({
    id: data.todos.length + 1,
    title: req.body.title,
  })

  res.json(data);
});

apiRouter.get("/without-cors", (req, res) => {
  res.header("X-CORS-Policy", "No-CORS");

  res.json(data);
});

apiRouter.get("/with-cors-plugin", cors(), (req, res) => {
  res.header("X-CORS-Policy", "CORS-Plugin");

  res.json(data);
});

module.exports = apiRouter;
