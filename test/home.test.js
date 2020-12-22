import home from '../src/Views/home';
describe('firstSection function', () => {
  const firstSection = home.firstSection();
  it('Should return an HTML section tag with a class name of first-section', () => {
    expect(firstSection.nodeName === 'SECTION' && firstSection.getAttribute('class')).toBe('col-12 col-md-3 d-flex flex-column justify-content-start text-white h-100vh first-section');
  });
});

describe('secondSection function', () => {
  const secondSection = home.secondSection();
  it('Should return an HTML section tag with a class name of second-section', () => {
    expect(secondSection.nodeName === 'SECTION' && secondSection.getAttribute('class')).toBe('col-12 col-md-5 d-flex text-dark h-100vh second-section');
  });

  it('should have upcoming tasks and past tasks anchor tags with upcomingTasks and pastTasks Id and ss-nav-link class', () => {
    const upcomingTasks = secondSection.querySelector('#upcomingTasks');
    const pastTasks = secondSection.querySelector('#pastTasks');
    expect(upcomingTasks.nodeName === 'A' && pastTasks.nodeName === 'A').toBeTruthy();
    expect(upcomingTasks.classList.contains('ss-nav-link') && upcomingTasks.classList.contains('ss-nav-link')).toBeTruthy();
  });
});

describe('thirdSection function', () => {
  const thirdSection = home.thirdSection();
  it('Should return an HTML section tag with a class name of third-section', () => {
    expect(thirdSection.nodeName === 'SECTION' && thirdSection.getAttribute('class')).toBe('d-flex flex-column text-dark h-100vh pt-5 px-2 border border-dark border-left-0 third-section');
  });

  it('should have task description container child with taskDescriptionContainer id', () => {
    expect(thirdSection.querySelector('#taskDescriptionContainer') != null).toBeTruthy();
  });
});