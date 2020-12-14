/* eslint-disable no-unused-expressions */
import it from './main_module';

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

export const reloadTaskDescription = task => {
  const taskDescriptionTarget = document.getElementById('taskDescriptionContainer');
  const container = it.is('div')
  container.classes('d-flex flex-column px-2')
  const header = it.is('div')
  header.classes('w-100 d-flex flex-column justify-content-between')
  const title = it.is('h3');
  title.classes('mb-2')
  title.innerText = task.title;
  const dueDate = it.is('p');
  dueDate.innerText = "Due date - " + task.dueDate 
  const priority = it.is('h5');
  priority.classes('h5')
  priority.innerText = 'Priority - '
  for (let i = 0; i < parseInt(task.priority, 10); i += 1) {
    priority.innerHTML += '&#x2605;';
  }
  header.classes('border-bottom border-dark pb-2')
  header.append(title, priority, dueDate)

  const description = it.is('h5')
  description.classes('pt-2')
  description.innerText = task.description
  container.append(header, description)

  while (taskDescriptionTarget.lastElementChild) {
    taskDescriptionTarget.removeChild(taskDescriptionTarget.lastElementChild);
    taskDescriptionTarget.lastElementChild;
  }
  taskDescriptionTarget.append(container)
}