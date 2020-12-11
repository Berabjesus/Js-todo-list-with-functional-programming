import 'bootstrap';
import './scss/main.scss';
import get from './modules/main_module';
import home from './view/home'

const body = document.getElementsByTagName('body')[0]
const main = get.mainContainer()
main.appendChild(home.leftSection())
body.prepend(main)

console.log(body);

let data = JSON.parse(localStorage.getItem(localStorage.key(1)))
let w = {
  title: 'title kda;sdl',
  data: data
}
console.log(data);