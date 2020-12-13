import {setLocalStorageKey as setKey, setLocalStorage as store} from './access_local_storage'
import * as reload from '../view/reload'

const addEventToCategoryModal = ()=> {
  const addEventToCategoryButtonInModal = idSelector('addCategoryButton')
  addEventToCategoryButtonInModal.onclick = function() {
    const value = getValue('newCategoryKey')
    const notif = idSelector('newCategoryKeyNotif')
    isEmpty(value) ? (() => {
      notif.innerText = 'Empty Key is not allowed'
    })() : (()=> {
      setKey(value+'clock.me')
      reload.reloadCategories()
      notif.innerText = value + ' is added to the categories'
    })()
  }
}

const addEventToNewTaskModal = () => {
  const addEventToNewTaskButton = idSelector('newTaskButton')

  addEventToNewTaskButton.onclick = function() {
    const newtaskObject = {
      category: getValue('taskCategories'),
      title: getValue('newTaskTitle'),
      description: getValue('newTaskDesc'),
      dueDate: getValue('newTaskDate'),
      priority: getValue('newTaskpriority')
    }
    const notif = idSelector('newTaskNotif')
    Object.values(newtaskObject).some(value => isEmpty(value)) ? (() => notif.innerText = 'Fill all the fields')() : (() => {
      store(newtaskObject)
      notif.innerText = newtaskObject.title + ' is added' 
    })()
  }
}

const idSelector = id => {
  return document.getElementById(id)
}

const getValue = id => {
  return idSelector(id).value
}

const isEmpty = target => {
  return target.length === 0 || !target.trim() 
}

export {addEventToCategoryModal, addEventToNewTaskModal}