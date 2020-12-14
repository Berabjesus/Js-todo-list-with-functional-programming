/* eslint-disable no-unused-expressions */
export const reloadCategories = container => {
  const categoryContainer = document.getElementById('categoryContainer');
  while (categoryContainer.lastElementChild) {
    categoryContainer.removeChild(categoryContainer.lastElementChild);
    categoryContainer.lastElementChild;
  }
  categoryContainer.appendChild(container);
};

export const reloadMain = container => {
  const secondSection = document.getElementById('secondSection');
  while (secondSection.lastElementChild) {
    secondSection.removeChild(secondSection.lastElementChild);
    secondSection.lastElementChild;
  }
  secondSection.appendChild(container);
};