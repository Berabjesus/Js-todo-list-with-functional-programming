import {renderCategories as tasks} from '../helpers/collapsible_object'

export const reloadCategories = () => {
  const categoryContainer = document.getElementById('categoryContainer')
  while ( categoryContainer.lastElementChild) {
    categoryContainer.removeChild(categoryContainer.lastElementChild);
    categoryContainer.lastElementChild;
  }
  categoryContainer.appendChild(tasks())
}