Object.prototype = {
  classes: function(classes) {
  classes.split(' ').map(newClass => this.classList.add(newClass))
  }
}

export default Object.prototype