const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = __dirname;
const characters = require(`${BASE_URL}/routes/characters/characters`);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(BASE_URL, `/assets/`)));
app.set(`view engine`, `pug`);

app.use("/characters", characters);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
