const express = require("express");
const path = require("path");

const charactersRouter = require(`${__dirname}/routes/characters.router`);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/characters", charactersRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}. URL: http://localhost:${PORT}`);
});
