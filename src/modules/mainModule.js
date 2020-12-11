import * as object from '../functions/defineObjectProperty';

const mainModule = (() => {
  const is = type => {
    const element = document.createElement(type)
    object.define(element)
    return element
  };
  const mainContainer = () => {
    const container = mainModule.is('main')
    container.classes('row d-flex custom-border')
    return container
  };
  return {
    is, mainContainer
  }
})()

export default mainModule