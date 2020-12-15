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

const setLocalStorage = (object, edit = null, remove = false) => {
  const newArr = [object.data];
  const category = `${object.category}clock.me`;
  getKeysFromLocalStorage().some(key => key === object.category) ? (() => {
    const originalData = JSON.parse(localStorage.getItem(category));
    let newData = []
    if (edit) {
      // let duplicate = []
      // if (edit.category !== object.category) {
      //   duplicate = JSON.parse(localStorage.getItem(edit.category+'clock.me'));
      // } else {
      //   duplicate = [...originalData]
      // }
      let duplicate = [...originalData]
      duplicate.splice(object.data.id, 1)
      newData = duplicate.concat(newArr);
      console.log(newData);

    } else if(remove) {
      const toDelete = JSON.parse(localStorage.getItem(category))
      let id;
      object.id !== undefined ? id = object.id : id = object.data.id;

      toDelete.splice(id, 1)
      newData = toDelete;
    }
    else {
       newData = originalData.concat(newArr);
    }
    const newDataWithId =  keyMap(newData)
    set(category, newDataWithId)
  })() : (() => {
    set(category, newArr)
  })();
};

// const 

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

export {
  getAllTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage, setLocalStorageKey, getSortedTasksBydate,
};