import * as object from '../helpers/define_object_property';
import {addCategoryModal as categoryModal, addTaskModal as taskModal} from '../helpers/modals'
import {getKeysFromLocalStorage as getKeys} from '../helpers/access_local_storage'

const mainModule = (() => {
  const mainContainer = () => {
    const container = mainModule.is('main')
    container.id = 'mainContainer'
    container.classes('row d-flex')
    return container
  };
  const is = type => {
    const element = document.createElement(type)
    object.define(element)
    return element
  };
  const isCollapsibleCategory = (categoryName, index) => {
    const collapsibleCategory = mainModule.is('button')
    collapsibleCategory.classes('btn dropdown-toggle text-center mb-3 task-btn')
    const span = mainModule.is('span')
    span.classes('caret')
    collapsibleCategory.setAttribute("data-toggle", 'collapse')
    collapsibleCategory.setAttribute('data-target', `#collapse-${index}`)
    collapsibleCategory.innerText = categoryName
    collapsibleCategory.type = 'button'
    collapsibleCategory.appendChild(span)
    return collapsibleCategory
  };
  const isClickableTask = (taskTitle, index) => {
    const clickableTask = mainModule.is('a')
    clickableTask.classes('btn btn-dark mb-1 w-100 task-btn subtasks-btn')
    clickableTask.innerText = taskTitle
    clickableTask.setAttribute("data-toggle","modal")
    clickableTask.setAttribute("data-target", `#clockDotMeModal-${index}`)
    return clickableTask
  };
  const isAddButton = (buttonDescription, id) => {
    const container = mainModule.is('div')
    container.classes('d-flex flex-column mt-auto')
    const addButton = mainModule.is('button')
    addButton.classes('btn btn-info add-btn')
    addButton.innerText = '+'
    addButton.setAttribute("data-toggle", 'modal')
    addButton.setAttribute('data-target', `#${id}`)
    const modal = id === 'addCategory' ? (() => categoryModal(id))() : (() => {
      container.addEventListener("click", e => {
        const categoriesInNewTaskModal = document.getElementById('taskCategories')
        categoriesInNewTaskModal.innerHTML = ''
        getKeys().map(option => {
          const newOption = mainModule.is('option') 
          newOption.innerText = option
          newOption.value = option
          categoriesInNewTaskModal.appendChild(newOption)
        })
      })
      return taskModal(id)
    })()
    const text = mainModule.is('h5')
    text.classes('text-center my-1 font-weight-lighter')
    text.innerText = buttonDescription

    container.append(addButton, text)
    container.innerHTML += modal
    return container
  };
  return {
    mainContainer, is, isCollapsibleCategory, isClickableTask, isAddButton
  }
})()

export default mainModule