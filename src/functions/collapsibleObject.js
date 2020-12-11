import it from '../modules/mainModule';

const collapsibleObject = () => {
    const container = it.is('div')
    container.classes('d-flex flex-column')
    const button = it.is('button')
    button.classes('btn btn-info dropdown-toggle text-center')
    const span = it.is('span')
    span.classes('caret ml-0')
    button.setAttribute("data-toggle", 'collapse')
    button.setAttribute('data-target', '#collapse')
    button.innerText = 'Personal Tasks'
    button.type = 'button'
    button.appendChild(span)

    // mock data 


    const collapseDiv = it.is('div')
    collapseDiv.classes('collapse text-light')
    collapseDiv.id = 'collapse'
    collapseDiv.innerText = 'jfhsldflskdjfklsjd klfj k'
    container.appendChild(button)
    container.appendChild(collapseDiv)
    return container
}

const renderTask = () => {
    
}


export default collapsibleObject