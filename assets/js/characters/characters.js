const getCharacters = async () => {
  const response = await fetch(`http://localhost:3000/characters/list`);
  const { characters } = await response.json();
  characters.forEach((character) => console.log(character));
};

getCharacters();
