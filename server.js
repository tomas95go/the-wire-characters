const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
  res.send(`Hey there, how is it going?`);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
