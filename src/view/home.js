import it from '../modules/main_module';
import {getAllCategories as tasks} from '../helpers/collapsible_object'
import {addCategoryModal as categoryModal, addTaskModal as taskModal} from '../helpers/modals'

const leftSection = () => {
  const section = it.is('section')
  section.classes('col-12 col-md-3 d-flex flex-column text-white h-100vh left-section')
  const header2 = it.is('h2')
  header2.classes('display-2 pb-4')
  header2.innerText = 'Clock.me'

  const header3 = it.is('h3')
  header3.classes('h2 pb-2 mt-4 font-weight-lighter')
  header3.innerText = 'Categories'

  const addCategoryButton = it.isAddButton('Add category', categoryModal('addCategory'), 'addCategory')
  addCategoryButton.classes('mb-2')
  section.append(header2, header3,addCategoryButton, tasks())

  return section
}

const middleSection = () => {
  const section = it.is('section')
  section.classes('col-12 col-md-7 d-flex text-dark p-0 h-100vh middle-section')

  const upcomingTasks = it.is('div')
  upcomingTasks.classes('col-6')
  const pastTasks = it.is('div')
  pastTasks.classes('col-6')

  const addNewTaskButton = it.isAddButton('Add New Task', taskModal('newTask'))
  addNewTaskButton.classes('mb-3 new-task-btn')
  section.append(upcomingTasks, pastTasks, addNewTaskButton)
  return section
}

const rightSection = () => {
  console.log('right');
}

const home = () => {
  return {
    leftSection, middleSection, rightSection
  }
}

export default home()