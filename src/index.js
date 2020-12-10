import 'bootstrap';
import './scss/main.scss';
import get from './modules/mainModule';
import * as prototype from './prototypes/objects';
import home from './dom/home'
// console.log('hello world');

// Object.prototype.addClass = function(...classes) {
//   classes.map(newClass => this.classList.add(newClass))
// }

// let div = document.createElement('div')

// div.addClass('bg-light')

// console.log(typeof document);

// const addClass = (elemType,...classes) => {
//   const element = document.createElement(elemType)
//   classes.map(newClass => element.classList.add(newClass))
//   return element
// }

// let div = addClass('div', 'bg-light')
// console.log(div);

const body = document.getElementsByTagName('body')[0]
const main = get.mainContainer()
main.appendChild(home.leftSection())


body.prepend(main)

console.log(body);
