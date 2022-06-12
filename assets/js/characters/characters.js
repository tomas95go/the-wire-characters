import { createCharacterCard } from "../ui/characters";
import { reset } from "../ui/general";

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
