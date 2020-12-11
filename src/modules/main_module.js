import * as object from '../helpers/define_object_property';

const mainModule = (() => {
  const is = type => {
    const element = document.createElement(type)
    object.define(element)
    return element
  };
  const isClickableTask = (obj, index) => {
    const clickableTask = mainModule.is('a')
    clickableTask.classes('btn btn-dark mt-1 w-100')
    clickableTask.innerText = obj.title
    clickableTask.onclick = function() {
      console.log('button clicked');
    }
    clickableTask.setAttribute("data-toggle","modal")
    clickableTask.setAttribute("data-target", `#exampleModalCenter${index}`)
    return clickableTask
  }
  const mainContainer = () => {
    const container = mainModule.is('main')
    container.classes('row d-flex custom-border')
    return container
  };
  return {
    is, isClickableTask, mainContainer
  }
})()

export default mainModule