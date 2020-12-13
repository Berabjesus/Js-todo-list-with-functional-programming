import it from '../modules/main_module';
import {getAllCategories as tasks, renderUpcomingTasks as upcomingTasks} from '../helpers/render_object'

const firstSection = () => {
  const section = it.is('section')
  section.classes('col-12 col-md-3 d-flex flex-column text-white h-100vh first-section')
  const h2 = it.is('h2')
  h2.classes('display-2 pb-4')
  h2.innerText = 'Clock.me'

  const h3 = it.is('h3')
  h3.classes('h2 pb-2 mt-4 font-weight-lighter')
  h3.innerText = 'Categories'

  const addCategoryButton = it.isAddButton('Add category', 'addCategory')
  addCategoryButton.classes('mb-2')

  section.append(h2, h3,addCategoryButton, tasks())

  return section
}

const secondSection = () => {
  const section = it.is('section')
  section.classes('col-12 col-md-9 d-flex text-dark p-0 h-100vh second-section')
  const task = it.is('div')
  task.classes('col-md-7 pt-5 d-flex flex-column')
  const nav = it.is('nav')
  nav.classes('d-flex border-bottom border-dark w-100 px-4 pb-3 ')
  const link = (text, id) => {
    const newLink = it.is('a')
    newLink.innerText = text
    newLink.id = id
    newLink.href = '#'
    newLink.classes('ss-nav-link')
    return newLink
  }
  const [upcoming, past] = [link('Upcoming tasks', 'upcomingTasks'),link('Past tasks', 'pastTasks')]
  past.classes('border-left border-dark pl-3 ml-3')
  
  const addNewTaskButton = it.isAddButton('Add New Task', 'newTask')
  addNewTaskButton.classes('mb-3 new-task-btn')
  nav.append(upcoming, past)

  const content = it.is('div')
  content.id = 'secondSection'
  content.append(upcomingTasks())

  task.append(nav, content)

  section.append(task,addNewTaskButton)
  return section
}

const home = () => {
  return {
    firstSection, secondSection
  }
}

export default home()