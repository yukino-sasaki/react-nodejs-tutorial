const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`listen: port ${port}`);
});
