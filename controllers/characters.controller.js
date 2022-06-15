const characters = require("../models/characters.model");

function getList(request, response) {
  try {
    response.status(200).json({
      message: "List of characters",
      characters,
    });
  } catch (error) {
    response.status(404).json({
      message: "Unable to list characters",
    });
  }
}

function getSingle(request, response) {
  try {
    const id = Number(request.params.id);
    const character = characters.find((character) => character.id === id);
    if (!character) {
      return response.status(404).json({
        message: "Unable to find character",
      });
    }
    response.status(200).json({
      message: "Character found",
      character,
    });
  } catch (error) {
    response.status(404).json({
      message: "There was a problem retrieving the character",
    });
  }
}

function add(request, response) {
  try {
    const newCharacter = request.body;
    characters.push(newCharacter);
    response.status(201).json({
      message: "Character added",
      newCharacter,
    });
  } catch (error) {
    response.status(404).json({
      message: "There was a problem adding the character",
    });
  }
}

function update(request, response) {
  try {
    const id = Number(request.params.id);
    const newData = request.body;
    const characterIndex = characters.findIndex(
      (character) => character.id === id
    );
    characters.splice(characterIndex, 1, newData);
    response.status(200).json({
      message: "Character updated",
      character: newData,
    });
  } catch (error) {
    response.status(404).json({
      message: "There was a problem updating the character",
    });
  }
}

function softDelete(request, response) {
  try {
    const id = Number(request.params.id);
    const character = characters.find((character) => character.id === id);
    character.active = false;
    response.status(200).json({
      message: "Character deleted",
      character,
    });
  } catch (error) {
    response.status(404).json({
      message: "There was a problem deleting the character",
    });
  }
}

module.exports = {
  getList,
  getSingle,
  add,
  update,
  softDelete,
};
