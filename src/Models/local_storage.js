/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */

const getKeys = () => ((Object.keys(localStorage)).filter(key => key.includes('clock.me'))).map(key => key.replace('clock.me', ''));

const checkKeyExistance = objKey => {
  return getKeys().some(key => key === objKey)
}

const setKey = newKey => localStorage.setItem(newKey, '[]');

const setAll = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getAll = key => {
  return JSON.parse(localStorage.getItem(key))
}

const keyMap = arr => {
  const newArr =  arr.map((key, i) => {
    key.id = i
    return key
  })
  return newArr
}

const getAllTasks = () => {
  const appSpecificKeys = getKeys();
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {
    const obj = {
      category: key,
      data: getAll(`${key}clock.me`),
    };
    return obj;
  });
  return arrayOfFilteredTasks;
};

const getSortedTasksBydate = () => {
  const unsortedTasks = getAllTasks().map(obj => obj.data.map(subObj =>{
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

const addTask = (object) => {
  const newArr = [object.data];
  const category = `${object.category}clock.me`;
  checkKeyExistance(object.category) ? (() => {
    const originalData = getAll(category);
    const newData = originalData.concat(newArr);
    const newDataWithId =  keyMap(newData)
    setAll(category, newDataWithId)
  })() : (() => {
    setAll(category, newArr)
  })();
};

const editTask = (newObject, oldObject) => {
  const newArr = [newObject.data];
  const category = `${newObject.category}clock.me`;
  checkKeyExistance(newObject.category) ? (() => {
    if (newObject.category === oldObject.category) {
      const originalData = getAll(category);
      originalData.splice(newObject.data.id, 1)
      const newData = originalData.concat(newArr);  
      const newDataWithId =  keyMap(newData)
      setAll(category, newDataWithId)
    } else {
      const oldCategoryData = getAll(oldObject.category+"clock.me");
      oldCategoryData.splice(oldObject.id, 1)
      const oldData = oldCategoryData
      setAll(oldObject.category+"clock.me", oldData)
      addTask(newObject)
    }
  })() : false
}

export {
  getAllTasks, addTask, getKeys, setKey, getSortedTasksBydate, editTask
};