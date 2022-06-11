const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, `\\assets\\`)));
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => {
  res.render(`index`, {
    title: `The Wire Characters`,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
