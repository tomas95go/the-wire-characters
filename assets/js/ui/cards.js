export const generateCardContainer = () => {
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

export const generateCard = () => {
  const $card = document.createElement("div");
  $card.classList.add(`card`, `card-blog`, `card-plain`);
  return $card;
};

export const generateCardHeader = () => {
  const $cardHeader = document.createElement("div");
  $cardHeader.classList.add(`card-header`, `p-0`, `mt-n4`, `mx-3`);
  return $cardHeader;
};

export const generateCardBody = () => {
  const $cardBody = document.createElement("div");
  $cardBody.classList.add(`card-body`, `p-3`);
  return $cardBody;
};
