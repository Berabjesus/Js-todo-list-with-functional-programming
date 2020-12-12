import * as object from '../helpers/define_object_property';

const mainModule = (() => {
  const mainContainer = () => {
    const container = mainModule.is('main')
    container.classes('row d-flex custom-border')
    return container
  };
  const is = type => {
    const element = document.createElement(type)
    object.define(element)
    return element
  };
  const isCollapsibleCategory = (categoryName, index) => {
    const collapsibleCategory = mainModule.is('button')
    collapsibleCategory.classes('btn btn-info dropdown-toggle text-center mb-3')
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
    clickableTask.classes('btn btn-dark mb-1 w-100')
    clickableTask.innerText = taskTitle
    clickableTask.setAttribute("data-toggle","modal")
    clickableTask.setAttribute("data-target", `#clockDotMeModal-${index}`)
    return clickableTask
  };
  return {
    is,isCollapsibleCategory, isClickableTask, mainContainer
  }
})()

export default mainModule