import {getCategories, getTask} from '../src/helpers/render_object'

describe('getCategories function', () => {
  const container = getCategories()
  it('Should return an HTML div tag with a class name of d-flex flex-column', ()=> {
    expect(container.nodeName === 'DIV' && container.getAttribute('class')).toBe('d-flex flex-column')
  })

  it('should have category Button and collapseContainer', () => {
    expect(container.firstChild.nodeName == 'BUTTON').toBeTruthy()
    expect(container.lastChild.nodeName == 'DIV').toBeTruthy()
  });
});
