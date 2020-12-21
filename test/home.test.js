import home from '../src/Views/home'


describe('firstSection function', () => {
  const firstSection = home.firstSection()
  it('Should return an HTML section tag with a class name of first-section', ()=> {
    expect(firstSection.nodeName === 'SECTION' && firstSection.getAttribute('class')).toBe('col-12 col-md-3 d-flex flex-column justify-content-start text-white h-100vh first-section')
  })
})