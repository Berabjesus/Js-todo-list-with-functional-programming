/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */

const getKeysFromLocalStorage = () => ((Object.keys(localStorage)).filter(key => key.includes('clock.me'))).map(key => key.replace('clock.me', ''));

const setLocalStorageKey = newKey => localStorage.setItem(newKey, '[]');

const getAllTasksFromLocalStorage = () => {
  const appSpecificKeys = getKeysFromLocalStorage();
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {
    const obj = {
      category: key,
      data: JSON.parse(localStorage.getItem(`${key}clock.me`)),
    };
    return obj;
  });
  return arrayOfFilteredTasks;
};

const getSortedTasksBydate = () => {
  const unsortedTasks = getAllTasksFromLocalStorage().map(obj => obj.data.map(subObj =>{
    subObj.category = obj.category
    return subObj
  }));
  let sum = [];

  unsortedTasks.map(arr => {
    sum = sum.concat(arr);
    return true;
  });
  const sortedTasks = sum.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const pastTasks = () => sortedTasks.filter(obj => new Date(obj.dueDate) < new Date(Date.now()));
  const upcomingTasks = () => sortedTasks.filter(obj => new Date(obj.dueDate) > new Date(Date.now()));
  return { pastTasks, upcomingTasks };
};

const setLocalStorage = (object) => {
  const newArr = [object.data];
  const category = `${object.category}clock.me`;
  getKeysFromLocalStorage().some(key => key === object.category) ? (() => {
    const data = JSON.parse(localStorage.getItem(category));
    const newData = data.concat(newArr);
    localStorage.setItem(category, JSON.stringify(newData));
  })() : (() => {
    localStorage.setItem(category, JSON.stringify(newArr));
  })();
};

// const editLocalStorage = ()

export {
  getAllTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage, setLocalStorageKey, getSortedTasksBydate,
};