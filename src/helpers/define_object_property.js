const define = element => {
  const newObject = element;
  Object.defineProperty(newObject, 'classes', {
    value(classes) {
      (classes.split(' ').filter(str => str !== '')).map(newClass => this.classList.add(newClass));
    },
    writable: false,
  });
  return newObject;
};

export default define;