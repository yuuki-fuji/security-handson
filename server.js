const express = require("express");
const app = express();
const port = 3100;

app.get("/", (req, res, next) => {
  res.end("Top Page");
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
