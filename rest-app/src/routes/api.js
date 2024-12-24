const express = require("express");
const cors = require("cors");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.json({
    message: "Hello from the API",
  });
});

apiRouter.get("/with-cors", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("X-CORS-Policy", "CORS-Manual");

  res.json({
    todos: [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Learn Node" },
      { id: 3, title: "Learn Express" },
    ],
  });
});

apiRouter.get("/without-cors", (req, res) => {
  res.header("X-CORS-Policy", "No-CORS");

  res.json({
    todos: [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Learn Node" },
      { id: 3, title: "Learn Express" },
    ],
  });
});

apiRouter.get("/with-cors-plugin", cors(), (req, res) => {
  res.header("X-CORS-Policy", "CORS-Plugin");

  res.json({
    todos: [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Learn Node" },
      { id: 3, title: "Learn Express" },
    ],
  });
});

module.exports = apiRouter;
