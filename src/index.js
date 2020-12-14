/* eslint-disable import/no-unresolved */

import 'bootstrap';
import './scss/main.scss';
import module from './helpers/main_module';
import home from './Views/home';
import * as events from './Controllers/event_listeners';

const body = document.getElementsByTagName('body')[0];
const main = module.mainContainer();
main.append(home.firstSection(), home.secondSection(),home.thirdSection());
body.prepend(main);

events.addEventToCategoryModal();
events.addEventToNewTaskModal();
events.addSelectUpdaterEvent();
events.addNavButtonEvents();

// let data = JSON.parse(localStorage.getItem('Studiesclock.me'))
// console.log(data);
// data.splice(2,1)
// let bool = data
// // // console.log(data);
// console.log(bool);