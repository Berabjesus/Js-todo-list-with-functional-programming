import it from '../modules/main_module';
import {taskModal as modal} from './modals'
import {getTasksFromLocalStorage as getTasks} from './access_local_storage'

const getAllCategories = () => {
    const mainContainer = it.is('div')
    mainContainer.id = "categoryContainer"
    mainContainer.classes('d-flex flex-column mb-3')

    mainContainer.appendChild(renderCategories())
    return mainContainer
}

const renderCategories = () => {
    const mainContainer = it.is('div')
    mainContainer.classes('d-flex flex-column')
    getTasks().map((category, index) => {
      const categoryButton = it.isCollapsibleCategory(category.category, index)
      const collapseContainer = it.is('div')
      collapseContainer.classes('collapse text-light px-3 pb-3')
      collapseContainer.id = `collapse-${index}`

      const taskContainer = it.is('div')
      taskContainer.classes('d-flex flex-column mx-auto text-dark task-container')

      category.data.map((subTask, taskIndex) => {
        const uniqueId = index+'-'+taskIndex
        const button = it.isClickableTask(subTask.title, uniqueId)
        taskContainer.appendChild(button)
        taskContainer.innerHTML += modal(subTask, uniqueId)
      })

      collapseContainer.appendChild(taskContainer)
      mainContainer.append(categoryButton, collapseContainer)
    })
    return mainContainer
}

export {getAllCategories, renderCategories}