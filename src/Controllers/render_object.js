/* eslint-disable array-callback-return */

import it from '../helpers/main_module';
import { taskModal as modal } from '../helpers/modals';
import { getAllTasksFromLocalStorage as getTasks, getSortedTasksBydate as sortedTasks } from '../Models/local_storage';

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

    category.data.map((subTask, taskIndex) => {
      const uniqueId = `${index}-${taskIndex}`;
      const button = it.isClickableTask(subTask.title, uniqueId);
      taskContainer.appendChild(button);
      taskContainer.innerHTML += modal(subTask, uniqueId);
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
  const container = it.is('button');
  container.classes('d-flex flex-column w-100 my-2 px-2 ss-task-btn');
  const h4 = it.is('h4');
  h4.innerText = `Task name - ${obj.title}`;
  const p = it.is('p');
  p.innerText = `Due date -${obj.dueDate}`;
  const priority = it.is('div');
  priority.innerText = 'Priority - ' 
  for (let i = 0; i < parseInt(obj.priority, 10); i += 1) {
    priority.innerHTML += '&#x2605;';
  }
  container.append(h4, p, priority);
  return container;
};

const getUpcomingTasks = () => {
  const container = it.is('div');
  sortedTasks().upcomingTasks().map(obj => {
    container.appendChild(getTask(obj));
  });
  return container;
};

const getPastTasks = () => {
  const container = it.is('div');
  sortedTasks().pastTasks().map(obj => {
    container.appendChild(getTask(obj));
  });
  return container;
};

export {
  getAllCategories, getCategories, getUpcomingTasks, getPastTasks,
};