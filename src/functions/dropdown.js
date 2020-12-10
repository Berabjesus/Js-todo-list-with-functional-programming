import it from '../modules/mainModule';
import * as prototype from '../prototypes/objects';

const dropDownList = () => {
    const button = it.is('button')
    button.classes('btn btn-info')
    
    const dropdown = it.is('div')
    dropdown.classes('collapse')
    dropdown.id = 'demo'

    return dropdown
}