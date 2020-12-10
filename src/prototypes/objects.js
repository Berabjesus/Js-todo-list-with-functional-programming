// Object.prototype = {
//   is: function(type) {
//     this = document.createElement(type)
//   }
// }

// Object.prototype.is = function(type) {
//   return document.createElement(type)
// }

Object.prototype.classes = function(...classes) {
  classes.map(newClass => this.classList.add(newClass))
}


export default Object.prototype