import 'bootstrap';
import './scss/main.scss';
import it from './modules/main_module';
import home from './view/home'
import * as events from './helpers/event_listeners'

const body = document.getElementsByTagName('body')[0]
const main = it.mainContainer()
main.appendChild(home.leftSection())
body.prepend(main)

events.addEventToAddCategoryButton()
console.log(body);

// function test() {
//   console.log('1212asdasd');
// }

// let b = document.createElement('button')
// b.innerText = 'test button'
// b.onclick = test
// body.appendChild(b)




// let data = JSON.parse(localStorage.getItem(localStorage.key(1)))
// let w = {
//   title: 'title kda;sdl',
//   data: data
// }
// // console.log(data);
// let keys = Object.keys(localStorage)
// console.log(keys);
// let filteredKeys = keys.filter(key => key.includes('clock.me'))
// console.log(filteredKeys);


let ber = {
  name:'ber',
  age:13
}
// localStorage.setItem('ber', JSON.stringify(ber))
// let dd = JSON.parse(localStorage.getItem('gym relatedclock.me'))
// // dd.age = 2100
// dd[0].title = 'works outs mis'
// console.log(dd[0]);
// localStorage.setItem('gym relatedclock.me', JSON.stringify(dd))





// const task = (name, title, desc, dueDate, priority) => {
//   const taskName = ()=> name
//   // const getData = (() => {
//   //   return {
//   //     title,desc,dueDate,priority 
//   //   }
//   // })
//   const data = {
//     title: title,
//     description: desc,
//     dueDate: dueDate,
//     priority: priority
//   }

//     return {taskName, data}

// }

// let d = new Date(Date.now())
// // console.log(d);
// // console.log(d.toDateString());

// let newTask  = task('news related', 'work out plan', 'i need to get fit', d.toDateString(), 5)

// let arr =[newTask.data]
// // console.log(arr);

// // localStorage.setItem((newTask.taskName() + 'clock.me'),JSON.stringify(arr))

// let data1 = JSON.parse(localStorage.getItem(localStorage.key(1)))
// let newArr = [newTask.data]
// let newData = data1.concat(newArr)

// console.log(data1);
// localStorage.setItem(localStorage.key(1),JSON.stringify(newData))

