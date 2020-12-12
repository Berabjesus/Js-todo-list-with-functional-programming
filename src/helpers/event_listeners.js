import {setLocalStorageKey as setKey} from './access_local_storage'
import * as reload from '../view/reload'

const addEventToAddCategoryButton = ()=> {
  const addCategoryButton = document.getElementById('addCategoryButton')
  addCategoryButton.onclick = function() {
    const value = document.getElementById('newCategoryKey').value
    const notif = document.getElementById('newCategoryKeyNotif')
    value.length === 0 || !value.trim() ? (() => {
      notif.innerText = 'Empty Key is not allowed'
    })() : (()=> {
      setKey(value+'clock.me')
      reload.reloadCategories()
      notif.innerText = value + ' is added to the categories'
    })()
  }
}

export {addEventToAddCategoryButton}