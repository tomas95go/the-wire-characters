const express = require("express");
const charactersController = require("../controllers/characters.controller");

const charactersRouter = express.Router();

charactersRouter.get("/", charactersController.getList);
charactersRouter.get("/:id", charactersController.getSingle);
charactersRouter.post("/", charactersController.add);
charactersRouter.put("/:id", charactersController.update);
charactersRouter.delete("/:id", charactersController.softDelete);

module.exports = charactersRouter;
