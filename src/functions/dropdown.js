import it from '../modules/mainModule';
import * as prototype from '../prototypes/objects';

const dropDownList = () => {
    const container = it.is('div')
    const button = it.is('button')
    button.classes('btn btn-info')
    button.setAttribute("data-toggle", 'collapse')
    button.setAttribute('data-target', '#collapse')
    button.innerHTML = 'Personal Tasks'
    const dropdown = it.is('div')
    dropdown.classes('collapse text-light')
    dropdown.innerHTML = 'I work ghs sghs dsgdh sgshgh jj jfh'
    dropdown.id = 'collapse'
    container.appendChild(button)
    container.appendChild(dropdown)
    return container
}

export default dropDownList