const reset = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const generateCardContainer = () => {
  const $cardContainer = document.createElement("div");
  $cardContainer.classList.add(
    `col-xl-3`,
    `col-md-6`,
    `mb-xl-0`,
    `my-4`,
    `animate__animated`,
    `animate__fadeIn`
  );
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

const availableCharacters = [
  {
    id: 4,
    name: `James "Jimmy" McNulty`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-law/james-jimmy-mcnulty-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `James "Jimmy" McNulty`,
  },
  {
    id: 5,
    name: `Russell "Stringer" Bell`,
    img: `https://www.hbo.com/content/dam/hbodata/series/the-wire/character/the-street/russell-stringer-bell-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`,
    alt: `Russell "Stringer" Bell`,
  },
];

const getCharacters = async () => {
  const $charactersContainer = document.getElementById(`characters-container`);
  const $loading = document.createElement(`p`);
  $loading.textContent = `Loading...`;
  $charactersContainer.appendChild($loading);
  const response = await fetch(`http://localhost:3000/characters/list`);
  const { characters } = await response.json();
  setTimeout(() => {
    reset($charactersContainer);
    characters.forEach((character, i) => {
      setTimeout(() => {
        const characterCard = createCharacterCard(character);
        $charactersContainer.appendChild(characterCard);
      }, i * 800);
    });
  }, 3000);
};

const loadAvailableCharacters = () => {
  const $availableCharactersSelect =
    document.getElementById(`select-new-character`);
  availableCharacters.forEach((character) => {
    const $option = document.createElement(`option`);
    $option.setAttribute(`value`, character.id);
    $option.textContent = character.name;
    $availableCharactersSelect.appendChild($option);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const toastElList = [].slice.call(document.querySelectorAll(".toast"));

  const toastList = toastElList.map((toastEl) => new bootstrap.Toast(toastEl));
});

loadAvailableCharacters();
getCharacters();

const $newCharacterForm = document.getElementById(`new-character-form`);
$newCharacterForm.addEventListener(`submit`, async (e) => {
  e.preventDefault();
  const formData = new FormData($newCharacterForm);
  const newCharacterId = formData.get(`select-new-character`);
  const newCharacterData = availableCharacters.find(
    (character) => character.id === +newCharacterId
  );
  const addNewCharacter = fetch(`http://localhost:3000/characters/add`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCharacterData),
  });
  const response = await addNewCharacter;
  const data = await response.json();
  const $toastToTrigger = document.getElementById(`success-toast`);
  if ($toastToTrigger) {
    const $charactersContainer =
      document.getElementById(`characters-container`);
    const characterCard = createCharacterCard(data.character);
    $charactersContainer.appendChild(characterCard);
    const toast = bootstrap.Toast.getInstance($toastToTrigger);
    const toastTitle = document.getElementById("success-toast-title");
    const toastBody = document.getElementById("success-toast-message");
    toastTitle.innerText = data.title;
    toastBody.innerText = data.message;
    toast.show();
  }
});
