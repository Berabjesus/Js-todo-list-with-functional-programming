import {
  addEventToCategoryModal, addEventToNewTaskModal, addSelectUpdaterEvent,
} from '../src/Controllers/event_listeners';

const ids = ['addCategoryButton', 'newTaskButton', 'middleSectionAddButton', 'upcomingTasks'];
const [button1, button2, button3] = ids.map(id => {
  const btn = document.createElement('button');
  btn.id = id;
  document.body.appendChild(btn);
  return btn;
});

describe('addEventToCategoryModal', () => {
  it('should add a click event to a button with addCategoryButton Id', () => {
    addEventToCategoryModal();
    expect(button1.getAttribute('click-event')).toBe('true');
  });
});

describe('addEventToNewTaskModal', () => {
  it('should add a click event to a button with newTaskButton Id', () => {
    addEventToNewTaskModal();
    expect(button2.getAttribute('click-event')).toBe('true');
  });
});

describe('addSelectUpdaterEvent', () => {
  it('should add a click event to a button with middleSectionAddButton Id', () => {
    addSelectUpdaterEvent();
    expect(button3.getAttribute('click-event')).toBe('true');
  });
});
