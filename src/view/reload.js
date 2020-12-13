import { renderCategories as tasks } from '../helpers/render_object';

export const reloadCategories = () => {
  const categoryContainer = document.getElementById('categoryContainer');
  while (categoryContainer.lastElementChild) {
    categoryContainer.removeChild(categoryContainer.lastElementChild);
    categoryContainer.lastElementChild;
  }
  categoryContainer.appendChild(tasks());
};

export const reloadMain = container => {
  const secondSection = document.getElementById('secondSection');
  while (secondSection.lastElementChild) {
    secondSection.removeChild(secondSection.lastElementChild);
    secondSection.lastElementChild;
  }
  secondSection.appendChild(container);
};