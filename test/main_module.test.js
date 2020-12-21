import _it from '../src/helpers/main_module'

describe('Main Module mainContainer', () => {
  it('should be a main tag with an id of mainContainer', () => {
    const main = _it.mainContainer()
    expect(main.nodeName === 'MAIN').toBeTruthy()
    expect(main.getAttribute('class')).toBe('row d-flex')
    expect(main.id).toBe('mainContainer')
  });
});

describe('Main Module is', () => {
  it('should be a tag of the desired input', () => {
    const aside = _it.is('aside')
    expect(aside.nodeName === 'ASIDE').toBeTruthy()
  });

  it('should have classes property', () => {
    const div = _it.is('div')
    expect(div.hasOwnProperty('classes')).toBeTruthy()
  });
});

describe('Main Module isCollapsibleCategory', () => {
  it('should be a button with `btn dropdown-toggle text-center mb-3 task-btn` classes', () => {
    const btn = _it.isCollapsibleCategory('test', 1)
    expect(btn.nodeName === 'BUTTON').toBeTruthy()
    expect(btn.getAttribute('class')).toBe('btn dropdown-toggle text-center mb-3 task-btn')
  });
});

describe('Main Module isClickableTask', () => {
  it('should be an anchor tag with `btn btn-dark mb-1 w-100 task-btn subtasks-btn` classes', () => {
    const btn = _it.isClickableTask('test')
    expect(btn.nodeName === 'A').toBeTruthy()
    expect(btn.getAttribute('class')).toBe('btn btn-dark mb-1 w-100 task-btn subtasks-btn')
  });
});

describe('Main Module isAddButton', () => {
  it('should be a div with `d-flex flex-column mt-auto` classes', () => {
    const div = _it.isAddButton('test', 1)
    expect(div.nodeName === 'DIV').toBeTruthy()
    expect(div.getAttribute('class')).toBe('d-flex flex-column mt-auto')
  });
});