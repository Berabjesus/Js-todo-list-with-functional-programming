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