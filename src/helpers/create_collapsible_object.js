import it from '../modules/main_module';
import modal from './create_task_modal'
import getLocalStorage from './access_local_storage'

let data = JSON.parse(localStorage.getItem(localStorage.key(1)))
let w = {
  title: 'title kda;sdl',
  data: data
}
const collapsibleObject = () => {
    const container = it.is('div')
    container.classes('d-flex flex-column')
    const button = it.is('button')
    button.classes('btn btn-info dropdown-toggle text-center')
    const span = it.is('span')
    span.classes('caret ml-0')
    button.setAttribute("data-toggle", 'collapse')
    button.setAttribute('data-target', '#collapse')
    button.innerText = w.title
    button.type = 'button'
    button.appendChild(span)

    // mock data 


    const collapseDiv = it.is('div')
    collapseDiv.classes('collapse text-light px-3')
		collapseDiv.id = 'collapse'
		const innerContainer = it.is('div')
		innerContainer.classes('d-flex flex-column mx-auto text-dark')
    for (let i = 0; i < w.data.length; i++) {
      let button = it.isClickableTask(w.data[i], i)
      let div = it.is('div')
      div.appendChild(button)
      // div.appendChild(modal())
      div.innerHTML += modal(w.data[i], i)
			innerContainer.appendChild(div)
    }

		collapseDiv.appendChild(innerContainer)
    container.appendChild(button)
    container.appendChild(collapseDiv)
    return container
}

const renderLocalStorageContent = () => {
  // const 
}

const getAllCollapsibleObjects = () => {

    const arrayOfCollapsibleObjects = renderLocalStorageContent
}


export default collapsibleObject