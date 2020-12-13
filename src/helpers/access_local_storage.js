const getTasksFromLocalStorage = () => {
  const appSpecificKeys = getKeysFromLocalStorage()
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {    
    const obj = {
      category: key,
      data:  JSON.parse(localStorage.getItem(key+'clock.me'))
    }
    return obj
  })
  return arrayOfFilteredTasks
}

const getSortedTasksBydate = () => {
  const unsortedTasks =  getTasksFromLocalStorage().map(obj => obj.data.map(subObj => subObj))
  let sum = new Array
  unsortedTasks.map(arr => sum = sum.concat(arr))
  const sortedTasks = sum.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate))
  const pastTasks = () => sortedTasks.filter(obj => new Date(obj.dueDate) < new Date(Date.now()))
  const upcomingTasks = () => sortedTasks.filter(obj => new Date(obj.dueDate) > new Date(Date.now()))

  return {pastTasks, upcomingTasks}
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

export {getTasksFromLocalStorage, setLocalStorage, getKeysFromLocalStorage,setLocalStorageKey, getSortedTasksBydate}