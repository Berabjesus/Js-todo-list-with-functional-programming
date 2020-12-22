/* eslint-disable no-undef */

import * as events from '../src/Controllers/event_listeners';

// const $ = require('jquery');
import '../jquery-global';

beforeEach(() => {
  const categoryContainer = `<div id="categoryContainer" ><div ><button id="testbtn" type="button">Personal<span></span></button><div id="collapse-0"><div task-container"></div></div></div></div>
  <section id = "secondSection"></section>
  `;
  document.body.innerHTML = categoryContainer;

  const taskModal = `
  <input id="taskCategories" type="text" value="test value">
  <input id="newTaskTitle" type="text" value="test value">
  <input id="newTaskDesc" type="text" value="test value">
  <input id="newTaskDate"  type="date" value="2018-07-22">
  <input id="newTaskpriority"  type="text" value="1">
`;
  document.body.innerHTML += taskModal;

  const taskSelector = `
  <select name="categories" id="taskCategories" class="form-control"></select>`;

  document.body.innerHTML += taskSelector;

  const ids = ['addCategoryButton', 'newTaskButton', 'middleSectionAddButton', 'pastTasks', 'upcomingTasks'];
  ids.forEach(id => {
    const btn = document.createElement('button');
    btn.id = id;
    document.body.appendChild(btn);
    return btn;
  });
  const newCategory = document.createElement('input');
  newCategory.id = 'newCategoryKey';
  const newCategoryKeyNotif = document.createElement('h4');
  newCategoryKeyNotif.id = 'newCategoryKeyNotif';
  const newTaskNotif = document.createElement('h4');
  newTaskNotif.id = 'newTaskNotif';

  document.body.append(newCategory, newCategoryKeyNotif, newTaskNotif);
});

describe('addEventToCategoryModal', () => {
  it('should add a click event to a button with addCategoryButton Id', () => {
    const button = document.getElementById('addCategoryButton');
    events.addEventToCategoryModal();
    expect(button.getAttribute('click-event')).toBe('true');
  });

  test('when the button is clicked with no value given its notification container hast Empty Key is not allowed text', () => {
    const addCategory = jest.spyOn(events, 'addCategory');
    $('#addCategoryButton').click(addCategory);
    $('#addCategoryButton').click();
    const notif = document.getElementById('newCategoryKeyNotif');
    expect(notif.innerText).toBe('Empty Key is not allowed');
  });

  test('when the button is clicked with  value given its notification container has is added to the categories text', () => {
    const addCategory = jest.spyOn(events, 'addCategory');
    $('#addCategoryButton').click(addCategory);
    const input = document.getElementById('newCategoryKey');
    input.value = 'Test task';

    $('#addCategoryButton').click();
    const notif = document.getElementById('newCategoryKeyNotif');
    expect(notif.innerText).toBe(`${input.value} is added to the categories`);
  });
});

describe('addEventToNewTaskModal', () => {
  it('should add a click event to a button with newTaskButton Id', () => {
    const button = document.getElementById('newTaskButton');
    events.addEventToNewTaskModal();
    expect(button.getAttribute('click-event')).toBe('true');
  });

  test('when the button is clicked with  value given its notification container shows added to the categories text', () => {
    const addTask = jest.spyOn(events, 'addTask');
    $('#newTaskButton').click(addTask);
    $('#newTaskButton').click();
    const notif = document.getElementById('newTaskNotif');
    expect(notif.innerText).toBe('test value is added');
  });
});

describe('addSelectUpdaterEvent', () => {
  it('should add a click event to a button with middleSectionAddButton Id', () => {
    const button = document.getElementById('middleSectionAddButton');
    events.addSelectUpdaterEvent();
    expect(button.getAttribute('click-event')).toBe('true');
  });

  test('When clicked, it should populate the select element with id `taskCategories` with options', () => {
    const updateSelect = jest.spyOn(events, 'updateSelect');
    $('#middleSectionAddButton').click(updateSelect);
    $('#middleSectionAddButton').click();
    const select = document.getElementById('taskCategories');
    expect(select.firstChild.nodeName === 'OPTION').toBeTruthy();
    expect(select.firstChild.innerText === 'Test task').toBeTruthy();
  });
});

describe('addNavButtonEvents', () => {
  it('should add a click event to a button with middleSectionAddButton Id', () => {
    const button1 = document.getElementById('upcomingTasks');
    const button2 = document.getElementById('pastTasks');
    events.addNavButtonEvents();
    expect(button1.getAttribute('click-event')).toBe('true');
    expect(button2.getAttribute('click-event')).toBe('true');
  });

  test('when upcomingTasks button is clicked it should create a div inside the second section container', () => {
    const upcoming = jest.spyOn(events, 'upcomingEvent');
    $('#upcomingTasks').click(upcoming);
    $('#upcomingTasks').click();
    const section = document.getElementById('secondSection');
    expect(section.firstChild.nodeName === 'DIV').toBeTruthy();
  });

  test('when pastTasks button is clicked it should create a div inside the second section container', () => {
    const past = jest.spyOn(events, 'pastEvent');
    $('#pastTasks').click(past);
    $('#pastTasks').click();
    const section = document.getElementById('secondSection');
    expect(section.firstChild.nodeName === 'DIV').toBeTruthy();
  });
});
