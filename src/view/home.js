import it from '../modules/main_module';
import tasks from '../helpers/create_collapsible_object'

const leftSection = () => {
  const section = it.is('section')
  section.classes('col-3 d-flex flex-column left-section text-white h-100vh custom-border')
  const header2 = it.is('h2')
  header2.classes('display-2 pb-4')
  header2.innerText = 'Clock.me'

  const header3 = it.is('h3')
  header3.classes('h3 pb-2 mt-4 font-weight-lighter')
  header3.innerText = 'Categories'

  const addCategoryButton = it.isAddButton('Add category')

  section.appendChild(header2)
  section.appendChild(header3)
  section.appendChild(tasks())
  section.appendChild(addCategoryButton)

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