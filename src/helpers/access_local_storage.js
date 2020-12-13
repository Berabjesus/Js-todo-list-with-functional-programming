const getTasksFromLocalStorage = () => {
  const appSpecificKeys = getKeysFromLocalStorage()
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {    
    const obj = {
      category: key,
      data:  JSON.parse(localStorage.getItem(key+'clock.me'))
    }
    return obj
  })
  console.log(arrayOfFilteredTasks);
  return arrayOfFilteredTasks
}

const setLocalStorage = (object) => {
  const newArr = [object.data]
  const category = (object.category) + 'clock.me'
  getKeysFromLocalStorage().some(key => key === object.category) ? (() => {
    const data = JSON.parse(localStorage.getItem(category))
    const newData = data.concat(newArr)
    localStorage.setItem(category, JSON.stringify(newData));
  })(): (() => {
    localStorage.setItem(category, JSON.stringify(newArr));
  })()
}

const getKeysFromLocalStorage = () => ((Object.keys(localStorage)).filter(key => key.includes('clock.me'))).map(key => key.replace('clock.me', ''))

const setLocalStorageKey = newKey => localStorage.setItem(newKey, '[]');

export {getTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage,setLocalStorageKey}