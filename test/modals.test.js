import { addCategoryModal, addTaskModal } from '../src/helpers/modals';

describe('addCategoryModal function', () => {
  const id = 'jestTest';
  const catModal = document.createElement('main');
  catModal.innerHTML = addCategoryModal(id);
  it('should return a div element `with modal fade text-dark` classes and an id of jestTest', () => {
    expect(catModal.firstChild.nodeName === 'DIV').toBeTruthy();
    expect(catModal.firstChild.getAttribute('class')).toBe('modal fade text-dark');
    expect(catModal.firstChild.id).toBe(id);
  });
});

describe('addTaskModal function', () => {
  const id = 'jestTestTask';
  const taskModal = document.createElement('main');
  taskModal.innerHTML = addTaskModal(id);
  it('should return a div element `with modal fade text-dark` classes and an id of jestTest', () => {
    expect(taskModal.firstChild.nodeName === 'DIV').toBeTruthy();
    expect(taskModal.firstChild.getAttribute('class')).toBe('modal fade text-dark');
    expect(taskModal.firstChild.id).toBe(id);
  });
});