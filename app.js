const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const BASE_URL = "https://jsonplaceholder.typicode.com/";

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Random Public API Service",
  });
});

app.get("/greet", (req, res) => {
  res.json({
    message: "Hello User, Hope you are having a great Day!!",
  });
});

app.get("/:path", async (req, res) => {
  const { path } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}${path}`);
    const data = await response.data;
    res.send(data);
  } catch (err) {
    res.json({
      message: "Data Not found!",
    });
  }
});

app.get("/:path/:id", async (req, res) => {
  const { path, id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}${path}/${id}`);
    const data = await response.data;
    res.send(data);
  } catch (err) {
    res.json({
      message: "Data Not found!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
