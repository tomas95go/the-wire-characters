const reset = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const generateCardContainer = () => {
  const $cardContainer = document.createElement("div");
  $cardContainer.classList.add(`col-xl-3`, `col-md-6`, `mb-xl-0`, `mb-4`);
  return $cardContainer;
};

const generateCard = () => {
  const $card = document.createElement("div");
  $card.classList.add(`card`, `card-blog`, `card-plain`);
  return $card;
};

const generateCardHeader = () => {
  const $cardHeader = document.createElement("div");
  $cardHeader.classList.add(`card-header`, `p-0`, `mt-n4`, `mx-3`);
  return $cardHeader;
};

const generateCardBody = () => {
  const $cardBody = document.createElement("div");
  $cardBody.classList.add(`card-body`, `p-3`);
  return $cardBody;
};

const generateCharacterImgContainer = () => {
  const $imgContainer = document.createElement(`div`);
  return $imgContainer;
};

const generateCharacterImg = (src, alt) => {
  const $img = document.createElement(`img`);
  $img.classList.add(`img-fluid`, `shadow`, `border-radius-xl`);
  $img.setAttribute(`src`, src);
  $img.setAttribute(`alt`, alt);
  return $img;
};

const generateCharacterNameElement = () => {
  const $characterName = document.createElement(`h5`);
  $characterName.classList.add(`mb-0`, `text-sm`);
  return $characterName;
};

const setCharacterName = ($name, name) => {
  $name.textContent = name;
  return $name;
};

const createCharacterCard = (character) => {
  const { name, img: src, alt } = character;
  const $cardContainer = generateCardContainer();
  const $card = generateCard();
  const $cardHeader = generateCardHeader();
  const $cardBody = generateCardBody();
  const $cardImgContainer = generateCharacterImgContainer();
  const $img = generateCharacterImg(src, alt);
  const $name = generateCharacterNameElement();
  setCharacterName($name, name);
  $cardImgContainer.appendChild($img);
  $cardHeader.appendChild($cardImgContainer);
  $cardBody.appendChild($name);
  $card.appendChild($cardHeader);
  $card.appendChild($cardBody);
  $cardContainer.appendChild($card);
  return $cardContainer;
};

const getCharacters = async () => {
  const $charactersContainer = document.getElementById(`characters-container`);
  const $loading = document.createElement(`p`);
  $loading.textContent = `Loading...`;
  $charactersContainer.appendChild($loading);
  const response = await fetch(`http://localhost:3000/characters/list`);
  const { characters } = await response.json();
  setTimeout(() => {
    reset($charactersContainer);
    characters.forEach((character) => {
      const characterCard = createCharacterCard(character);
      $charactersContainer.appendChild(characterCard);
    });
  }, 3000);
};

getCharacters();
