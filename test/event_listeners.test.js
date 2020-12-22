import * as events from '../src/Controllers/event_listeners'

const $ = require('jquery');

beforeEach(() => {
  const categoryContainer = `<div id="categoryContainer" ><div ><button id="testbtn" type="button">Personal<span></span></button><div id="collapse-0"><div task-container"></div></div></div></div>`
  document.body.innerHTML = categoryContainer
  const ids = ['addCategoryButton', 'newTaskButton', 'middleSectionAddButton'];
  ids.forEach(id => {
    const btn = document.createElement('button');
    btn.id = id;
    document.body.appendChild(btn);
    return btn;
  });
  const newCategory = document.createElement('input')
  newCategory.id = 'newCategoryKey'
  const newCategoryKeyNotif = document.createElement('h4')
  newCategoryKeyNotif.id = 'newCategoryKeyNotif'
  

  document.body.append(newCategory, newCategoryKeyNotif)
});

describe('addEventToCategoryModal', () => {
  it('should add a click event to a button with addCategoryButton Id', () => {
    const button = document.getElementById('addCategoryButton')
    events.addEventToCategoryModal()
    expect(button.getAttribute('click-event')).toBe('true');
  });

  test('when the button is clicked with no value given its notification container hast Empty Key is not allowed text', () => {
    const addCategory = jest.spyOn(events, 'addCategory')
    $('#addCategoryButton').click(addCategory);  
    $('#addCategoryButton').click();
    const notif = document.getElementById('newCategoryKeyNotif')
    expect(notif.innerText).toBe('Empty Key is not allowed')
  });

  test('when the button is clicked with  value given its notification container has is added to the categories text', () => {
    const addCategory = jest.spyOn(events, 'addCategory')
    $('#addCategoryButton').click(addCategory);  
    const input = document.getElementById('newCategoryKey')
    input.value = 'Test task'
    $('#addCategoryButton').click();
    const notif = document.getElementById('newCategoryKeyNotif')
    expect(notif.innerText).toBe(input.value+' is added to the categories')
  });

});

describe('addEventToNewTaskModal', () => {
  it('should add a click event to a button with newTaskButton Id', () => {
    addEventToNewTaskModal();
    expect(button2.getAttribute('click-event')).toBe('true');
  });

  
});

// describe('addSelectUpdaterEvent', () => {
//   it('should add a click event to a button with middleSectionAddButton Id', () => {
//     addSelectUpdaterEvent();
//     expect(button3.getAttribute('click-event')).toBe('true');
//   });
// });
