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
  checkKeyExistance(object.category) ? (() => {
    const originalData = JSON.parse(localStorage.getItem(category));
    const newData = originalData.concat(newArr);
    const newDataWithId =  keyMap(newData)
    set(category, newDataWithId)
  })() : (() => {
    set(category, newArr)
  })();
};

const editLocalStorage = (newObject, oldObject) => {
  const newArr = [newObject.data];
  const category = `${newObject.category}clock.me`;
  checkKeyExistance(newObject.category) ? (() => {
    if (newObject.category === oldObject.category) {
      const originalData = JSON.parse(localStorage.getItem(category));
      originalData.splice(newObject.data.id, 1)
      const newData = originalData.concat(newArr);  
      const newDataWithId =  keyMap(newData)
      set(category, newDataWithId)
    } else {
      const oldCategoryData = JSON.parse(localStorage.getItem(oldObject.category+"clock.me"));
      oldCategoryData.splice(oldObject.id, 1)
      const oldData = oldCategoryData
      set(category, oldData)
      const newCategoryData = JSON.parse(localStorage.getItem(oldObject.category+"clock.me"));
      newCategoryData.splice(newObject.data.id, 1)
      const newData = newCategoryData.concat(newArr);  
      const newDataWithId =  keyMap(newData)
      set(category, newDataWithId)
    }

  })() : false
}

const keyMap = arr => {
  const newArr =  arr.map((key, i) => {
    key.id = i
    return key
  })
  return newArr
}

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const checkKeyExistance = objKey => {
  return getKeysFromLocalStorage().some(key => key === objKey)
}

export {
  getAllTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage, setLocalStorageKey, getSortedTasksBydate, editLocalStorage
};