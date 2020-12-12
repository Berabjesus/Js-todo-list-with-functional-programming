import {setLocalStorageKey as setKey} from './access_local_storage'
import {renderCategories as tasks} from '../helpers/collapsible_object'

const setLocalStorageKey = key => {
  setKey(key)
}

const addEventToAddCategoryButton = ()=> {
  const addCategoryButton = document.getElementById('addCategoryButton')
  addCategoryButton.onclick = function() {
    const value = document.getElementById('newCategoryKey').value
    const notif = document.getElementById('newCategoryKeyNotif')
    value.length === 0 || !value.trim() ? (() => {
      notif.innerText = 'Empty Key is not allowed'
    })() : (()=> {
      localStorage.setItem(value+'clock.me','[]')
      reload()
      notif.innerText = value + ' is added to the categories'
    })()
    
    console.log(value);
  }
}
const reload = () => {
  let categoryContainer = document.getElementById('categoryContainer')
  while ( categoryContainer.lastElementChild) {
    categoryContainer.removeChild(categoryContainer.lastElementChild);
    categoryContainer.lastElementChild;
  }
  categoryContainer.appendChild(tasks())
}

export {addEventToAddCategoryButton}