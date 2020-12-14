/* eslint-disable no-unused-expressions */
import it from './main_module';
import { setLocalStorageKey as setKey, setLocalStorage as store, getKeysFromLocalStorage as getKeys } from '../Models/local_storage';

export const reloadCategories = container => {
  const categoryContainer = document.getElementById('categoryContainer');
  while (categoryContainer.lastElementChild) {
    categoryContainer.removeChild(categoryContainer.lastElementChild);
    categoryContainer.lastElementChild;
  }
  categoryContainer.appendChild(container);
};

export const reloadMain = container => {
  const secondSection = document.getElementById('secondSection');
  while (secondSection.lastElementChild) {
    secondSection.removeChild(secondSection.lastElementChild);
    secondSection.lastElementChild;
  }
  secondSection.appendChild(container);
};

export const reloadTaskDescription = task => {
  const taskDescriptionTarget = document.getElementById('taskDescriptionContainer');
  const container = it.is('div')
  container.classes('d-flex flex-column px-2')
  const header = it.is('div')
  header.classes('w-100 d-flex flex-column justify-content-between')
  const title = it.is('h3');
  title.classes('mb-2')
  title.innerText = task.title;
  const dueDate = it.is('p');
  dueDate.innerText = "Due date - " + task.dueDate 
  const category = it.is('h5')
  category.innerText = "Category - " + task.category
  const priority = it.is('h5');
  priority.classes('h5 mt-2')
  priority.innerText = 'Priority - '
  for (let i = 0; i < parseInt(task.priority, 10); i += 1) {
    priority.innerHTML += '&#x2605;';
  }
  header.classes('border-bottom border-dark pb-2')
  header.append(title,category, priority, dueDate)

  const description = it.is('div')
  description.classes('pt-2 h5 overflow-auto')
  description.innerText = task.description
  container.append(header, description)

  while (taskDescriptionTarget.lastElementChild) {
    taskDescriptionTarget.removeChild(taskDescriptionTarget.lastElementChild);
    taskDescriptionTarget.lastElementChild;
  }
  taskDescriptionTarget.append(container)
}

export const editTask = task => {
  const taskDescriptionTarget = document.getElementById('taskDescriptionContainer');
  const selectTag = getKeys().map(option => {
    const newOption = it.is('option');
    newOption.innerText = option;
    console.log(task.category);
    console.log(option);
    newOption.value = option;
    if (task.category === option)
      newOption.setAttribute('selected') 
    return newOption;
  });
  console.log(selectTag[0].outerHTML);
  taskDescriptionTarget.innerHTML = ''
  taskDescriptionTarget.innerHTML = `<form class="px-2">
  <div class="form-group">
    <label for="Title">Task title</label>
    <input type="text" class="form-control" id="Title" aria-describedby="Title" placeholder="Enter new category">
  </div>
  <div class="form-group">
    <label for="Desc">Task Description</label>
    <textarea class="form-control" name="Description" id="Desc" cols="30" rows="5" placeholder="Enter Description"></textarea>
  </div>
  <div class="form-group">
    <label for="Date">Task Due Date</label>
    <input type="date" class="form-control" id="Date" aria-describedby="Date">
  </div>
  <div class="form-group">
    <label for="Priority">Task Priority</label>
    <select name="priority" class= "form-control" id="priority">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="taskCategories">Task Category</label>
    <select name="categories" id="taskCategories" class="form-control">
    ${
      selectTag.map(tag => tag.outerHTML)
    }
    </select>
  </div>
  <button type="button" id= "Button" class="btn btn-dark text-white">Edit</button>
  <p class="text-dark text-center" id="newTaskNotif"></p>
</form>`
}