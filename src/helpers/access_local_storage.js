const getTasksFromLocalStorage = () => {
  const appSpecificKeys = getKeysFromLocalStorage()
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {    
    const obj = {
      name: key,
      data:  JSON.parse(localStorage.getItem(key+'clock.me'))
    }
    return obj
  })
  return arrayOfFilteredTasks
}

const setLocalStorage = (arr) => {
  
}

const getKeysFromLocalStorage = () => ((Object.keys(localStorage)).filter(key => key.includes('clock.me'))).map(key => key.replace('clock.me', ''))

const setLocalStorageKey = newKey => localStorage.setItem(newKey, '[]');

export {getTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage,setLocalStorageKey}