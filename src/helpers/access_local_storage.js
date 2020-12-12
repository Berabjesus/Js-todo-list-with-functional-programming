const getLocalStorage = () => {
  const appSpecificKeys = getKeysFromLocalStorage()
  const arrayOfFilteredTasks = appSpecificKeys.map(key => {
    const obj = {
      name: key,
      data: JSON.parse(localStorage.getItem(key+'clock.me'))
    }
    return obj
  })
  return arrayOfFilteredTasks
}

const setLocalStorage = () => {

}

const getKeysFromLocalStorage = () => ((Object.keys(localStorage)).filter(key => key.includes('clock.me'))).map(key => key.replace('clock.me', ''))


// .map(key => key.replace('clock.me', ''))

export {getLocalStorage, setLocalStorage}