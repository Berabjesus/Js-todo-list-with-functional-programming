export const getLocalStorage = () => {
  const filteredKeys = (Object.keys(localStorage).filter(key => key.includes('clock.me')))
  const ent =  Object.entries(localStorage).map(array => array)
  // const arr = filteredKeys.map(key => JSON.parse(localStorage.getItem(key)))

  // console.log(filteredKeys[0]);
  // console.log(localStorage.getItem(filteredKeys[0]));
  console.log(ent);
  // .map(keys => keys.replace('clock.me', ''))
}

export const setLocalStorage = () => {

}

getLocalStorage()