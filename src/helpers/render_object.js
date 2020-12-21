/* eslint-disable array-callback-return */
/* eslint-disable import/no-cycle */

import it from './main_module';
import { getAllTasks as getTasks, getSortedTasksBydate as sortedTasks } from '../Models/local_storage';
import { reloadTaskDescription as reload, editTask, deleteTask } from '../Controllers/reload';

const getCategories = () => {
  const mainContainer = it.is('div');
  mainContainer.classes('d-flex flex-column');
  getTasks().map((category, index) => {
    const categoryButton = it.isCollapsibleCategory(category.category, index);
    const collapseContainer = it.is('div');
    collapseContainer.classes('collapse text-light px-3 pb-3');
    collapseContainer.id = `collapse-${index}`;

    const taskContainer = it.is('div');
    taskContainer.classes('d-flex flex-column mx-auto text-dark task-container');

    category.data.map((subTask) => {
      const button = it.isClickableTask(subTask.title);
      button.addEventListener('click', () => {
        reload(subTask);
      });
      const taskAction = it.is('div');
      taskAction.classes('pt-2');
      const [editButton, deleteButton] = [it.is('button'), it.is('button')];
      [editButton.innerText, deleteButton.innerText] = ['Edit', 'Delete'];
      editButton.classes('fs-action border');
      deleteButton.classes('fs-action ml-2 border');
      editButton.addEventListener('click', () => {
        subTask.category = category.category;
        editTask(subTask);
      });
      deleteButton.addEventListener('click', () => {
        subTask.category = category.category;
        deleteTask(subTask);
      });
      taskAction.append(editButton, deleteButton);
      const subContainer = it.is('div');
      subContainer.classes('border-bottom border-white pb-2 mb-3');
      subContainer.append(button, taskAction);
      taskContainer.appendChild(subContainer);
    });

    collapseContainer.appendChild(taskContainer);
    mainContainer.append(categoryButton, collapseContainer);
  });
  return mainContainer;
};

const getAllCategories = () => {
  const mainContainer = it.is('div');
  mainContainer.id = 'categoryContainer';
  mainContainer.classes('d-flex flex-column mb-3');

  mainContainer.appendChild(getCategories());
  return mainContainer;
};

const getTask = obj => {
  const container = it.is('div');
  container.classes('ss-task-container mb-3');
  const taskButton = it.is('button');
  const folder = it.is('div');
  folder.classes('folder');
  taskButton.classes('d-flex flex-column w-100 px-2 ss-task-btn');
  const header = it.is('div');
  header.classes('w-100 d-flex justify-content-between');
  const title = it.is('h4');
  title.innerText = `Task name - ${obj.title}`;
  const dueDate = it.is('p');
  dueDate.innerText = `Due date -${(new Date(obj.dueDate)).toDateString()}`;
  const priority = it.is('h5');
  priority.classes('h5');
  for (let i = 0; i < parseInt(obj.priority, 10); i += 1) {
    priority.innerHTML += '&#x2605;';
  }
  header.append(title, priority);
  taskButton.append(header, dueDate);

  const taskAction = it.is('div');
  taskAction.classes('ss-action-container');
  const [editButton, deleteButton] = [it.is('button'), it.is('button')];
  [editButton.innerText, deleteButton.innerText] = ['Edit', 'Delete'];
  editButton.classes('ss-action');
  deleteButton.classes('ss-action');
  editButton.addEventListener('click', () => {
    editTask(obj);
  });
  deleteButton.addEventListener('click', () => {
    deleteTask(obj);
  });
  taskAction.append(editButton, deleteButton);

  taskButton.addEventListener('click', () => {
    reload(obj);
  });
  container.append(folder, taskButton, taskAction);
  return container;
};

const getUpcomingTasks = () => {
  const container = it.is('div');
  const upcomingTasks = sortedTasks().upcomingTasks();
  upcomingTasks.map(obj => {
    container.appendChild(getTask(obj));
  });
  return container;
};

const getPastTasks = () => {
  const container = it.is('div');
  const pastTasks = sortedTasks().pastTasks();
  pastTasks.map(obj => {
    container.appendChild(getTask(obj));
  });
  return container;
};

export {
  getAllCategories, getCategories, getUpcomingTasks, getPastTasks,
};