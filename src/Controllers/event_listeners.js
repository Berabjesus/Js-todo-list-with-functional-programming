/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */

import { setKey, getKeys } from '../Models/local_storage';
import it from '../helpers/main_module';
import * as reload from './reload';
import {getCategories as categories, getPastTasks as pastTasks, getUpcomingTasks as upcomingTasks } from './render_object';

const idSelector = id => document.getElementById(id);

const getValue = id => idSelector(id).value;

const addEventToCategoryModal = () => {
  const addEventToCategoryButtonInModal = idSelector('addCategoryButton');
  addEventToCategoryButtonInModal.onclick = function () {
    const value = getValue('newCategoryKey');
    const notif = idSelector('newCategoryKeyNotif');
    reload.isEmpty(value) ? (() => {
      notif.innerText = 'Empty Key is not allowed';
    })() : (() => {
      setKey(`${value}clock.me`);
      reload.reloadCategories(categories());
      notif.innerText = `${value} is added to the categories`;
    })();
  };
};

const addEventToNewTaskModal = () => {
  const addEventToNewTaskButton = idSelector('newTaskButton');
  addEventToNewTaskButton.onclick = function () {
    const newtaskObject = {
      category: getValue('taskCategories'),
      data: {
        title: getValue('newTaskTitle'),
        description: getValue('newTaskDesc'),
        dueDate: getValue('newTaskDate'),
        priority: getValue('newTaskpriority'),
      },
    };
     reload.sharedEvent(newtaskObject, 'newTaskNotif')
  }
};

const addSelectUpdaterEvent = () => {
  const button = document.getElementById('middleSectionAddButton');
  button.addEventListener('click', () => {
    const categoriesInNewTaskModal = document.getElementById('taskCategories');
    categoriesInNewTaskModal.innerHTML = '';
    getKeys().map(option => {
      const newOption = it.is('option');
      newOption.innerText = option;
      newOption.value = option;
      categoriesInNewTaskModal.appendChild(newOption);
      return true;
    });
  });
};

const addNavButtonEvents = () => {
  const upcoming = document.getElementById('upcomingTasks');
  const past = document.getElementById('pastTasks');
  upcoming.addEventListener('click', () => {
    reload.reloadMain(upcomingTasks());
  });
  past.addEventListener('click', () => {
    reload.reloadMain(pastTasks());
  });
};

export {
  addEventToCategoryModal, addEventToNewTaskModal, addSelectUpdaterEvent, addNavButtonEvents
};