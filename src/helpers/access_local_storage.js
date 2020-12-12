const getLocalStorage = () => {
  const filteredKeys = (Object.keys(localStorage).filter(key => key.includes('clock.me')))
  const arrayOfFilteredTasks = filteredKeys.map(key => {
    const obj = {
      name: key.replace('clock.me', ''),
      data: JSON.parse(localStorage.getItem(key))
    }
    return obj
  })
  return arrayOfFilteredTasks
}

const setLocalStorage = () => {

}

export {getLocalStorage, setLocalStorage}