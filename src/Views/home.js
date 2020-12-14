import it from '../helpers/main_module';
import { getAllCategories as tasks, getUpcomingTasks as upcomingTasks } from '../Controllers/render_object';

const firstSection = () => {
  const section = it.is('section');
  section.classes('col-12 col-md-3 d-flex flex-column justify-content-start text-white h-100vh first-section');
  const h2 = it.is('h2');
  h2.classes('display-2 pb-4');
  h2.innerText = 'Clock.me';

  const h3 = it.is('h3');
  h3.classes('h2 pb-2 mt-4 font-weight-lighter');
  h3.innerText = 'Categories';

  const addCategory = it.isAddButton('Add category', 'addCategory');
  addCategory.classes('mb-auto');

  section.append(h2, h3, tasks(), addCategory);

  return section;
};

const secondSection = () => {
  const section = it.is('section');
  section.classes('col-12 col-md-6 d-flex text-dark h-100vh second-section');
  const task = it.is('div');
  task.classes('col-md-12 pt-5 d-flex flex-column');
  const nav = it.is('nav');
  nav.classes('d-flex border-bottom border-dark w-100 px-4 pb-3 ');
  const link = (text, id) => {
    const newLink = it.is('a');
    newLink.innerText = text;
    newLink.id = id;
    newLink.href = '#';
    newLink.classes('ss-nav-link');
    return newLink;
  };
  const [upcoming, past] = [link('Upcoming tasks', 'upcomingTasks'), link('Past tasks', 'pastTasks')];
  past.classes('border-left border-dark pl-3 ml-3');

  const addNewTask = it.isAddButton('Add New Task', 'newTask');
  addNewTask.classes('mb-3 new-task-btn');
  nav.append(upcoming, past);

  const content = it.is('div');
  content.classes('second-section-content')
  content.id = 'secondSection';
  content.append(upcomingTasks());

  task.append(nav, content);

  section.append(task, addNewTask);
  return section;
};

const thirdSection = () => {
  const section = it.is('section')
  section.classes('d-flex flex-column text-dark h-100vh pt-5 border border-dark third-section');
  const header = it.is('h2')
  header.innerText = 'Task Description'
  header.classes('border-bottom border-dark pb-3 text-center')

  const taskDescriptionContainer = it.is('div');
  taskDescriptionContainer.classes('h-100')
  taskDescriptionContainer.id = 'taskDescriptionContainer'

  section.append(header,taskDescriptionContainer)
  return section
}

const home = () => ({
  firstSection, secondSection, thirdSection,
});

export default home();