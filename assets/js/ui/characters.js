import {
  generateCardContainer,
  generateCard,
  generateCardHeader,
  generateCardBody,
} from "./cards.js";

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

export const createCharacterCard = (character) => {
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
