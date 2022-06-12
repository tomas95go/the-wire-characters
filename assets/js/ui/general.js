export const reset = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};
