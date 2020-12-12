import it from '../modules/main_module';
import modal from './create_task_modal'
import {getLocalStorage as getTasks} from './access_local_storage'
import mainModule from '../modules/main_module';

let data = JSON.parse(localStorage.getItem(localStorage.key(1)))
let w = {
  title: 'title kda;sdl',
  data: data
}
const collapsibleObject = () => {
    const container = it.is('div')
    container.classes('d-flex flex-column')

    container.appendChild(renderCategories())
    return container
}

const renderCategories = () => {
    const mainContainer = it.is('div')
    mainContainer.classes('d-flex flex-column')
    getTasks().map((category, index) => {
      const categoryButton = it.isCollapsibleCategory(category.name, index)
      const collapseContainer = it.is('div')
      collapseContainer.classes('collapse text-light px-3 pb-3')
      collapseContainer.id = `collapse-${index}`

      const taskContainer = it.is('div')
      taskContainer.classes('d-flex flex-column mx-auto text-dark')

      category.data.map((subTask, taskIndex) => {
        const uniqueId = index+'-'+taskIndex
        const button = it.isClickableTask(subTask.title, uniqueId)
        taskContainer.appendChild(button)
        taskContainer.innerHTML += modal(subTask, uniqueId)
      })

      collapseContainer.appendChild(taskContainer)
      mainContainer.appendChild(categoryButton)
      mainContainer.appendChild(collapseContainer)
    })
    console.log(mainContainer);
    return mainContainer
}

// renderCategories()
export default collapsibleObject