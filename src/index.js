import 'bootstrap';
import './scss/main.scss';
import it from './modules/main_module';
import home from './view/home'
import * as events from './helpers/event_listeners'

const body = document.getElementsByTagName('body')[0]
const main = it.mainContainer()
main.append(home.leftSection(), home.middleSection())
body.prepend(main)

events.addEventToCategoryModal()
events.addEventToNewTaskModal()
console.log(body);
