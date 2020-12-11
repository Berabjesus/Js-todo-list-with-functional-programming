import 'bootstrap';
import './scss/main.scss';
import get from './modules/mainModule';
import home from './dom/home'

const body = document.getElementsByTagName('body')[0]
const main = get.mainContainer()
main.appendChild(home.leftSection())
body.prepend(main)

console.log(body);


const task = (name, title, desc, dueDate, priority) => {
  const taskName = ()=> name
  // const getData = (() => {
  //   return {
  //     title,desc,dueDate,priority 
  //   }
  // })
  const data = {
    title: title,
    description: desc,
    dueDate: dueDate,
    priority: priority
  }

    return {taskName, data}

}

let d = new Date(Date.now())
// console.log(d);
// console.log(d.toDateString());

let newTask  = task('gym related', 'work out plan', 'i need to get fit', d.toDateString(), 5)

// localStorage.setItem(newTask.taskName(), JSON.stringify(newTask.data));

let t = JSON.parse(localStorage.getItem(localStorage.key(1)))
console.log(Object.entries(t));

// localStorage.setItem(localStorage.key(1), (localStorage.getItem(localStorage.key(1)) + ','+ localStorage.getItem(localStorage.key(1))))