import it from '../modules/main_module';
import {getAllCategories as tasks} from '../helpers/collapsible_object'
import {addCategoryModal as categoryModal} from '../helpers/modals'

const leftSection = () => {
  const section = it.is('section')
  section.classes('col-3 d-flex flex-column left-section text-white h-100vh')
  section.id = "left-section"
  const header2 = it.is('h2')
  header2.classes('display-2 pb-4')
  header2.innerText = 'Clock.me'

  const header3 = it.is('h3')
  header3.classes('h3 pb-2 mt-4 font-weight-lighter')
  header3.innerText = 'Categories'

  const addCategoryButton = it.isAddButton('Add category', categoryModal())

  section.append(header2, header3, tasks(), addCategoryButton)

  return section
}

const middleSection = () => {
  console.log('middle');
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