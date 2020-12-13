import it from '../modules/main_module';
import {taskModal as modal} from './modals'
import {getTasksFromLocalStorage as getTasks, getSortedTasksBydate as sortedTasks} from './access_local_storage'

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

const renderTask = obj => {
  const container = it.is('div')
  container.classes('w-100 border shadow-sm my-2 px-2')
  const h2 = it.is('h3')
  h2.innerText ='Task name: - ' + obj.title
  const p = it.is('p')
  p.innerText ='Due date: -' + obj.dueDate
  const priority = it.is('div')
  for (let i = 0; i < parseInt(obj.priority); i++) {
    priority.innerHTML += '&#x2605;'
  }
  container.append(h2, p, priority)
  return container
}

const renderUpcomingTasks = () => {
  const container = it.is('div') 
  sortedTasks().upcomingTasks().map(obj => {
    container.appendChild(renderTask(obj))
  })
  return container
}

const renderPastTasks = () => {
  const container = it.is('div') 
  sortedTasks().pastTasks().map(obj => {
    container.appendChild(renderTask(obj))
  })
  return container
}


export {getAllCategories, renderCategories, renderUpcomingTasks, renderPastTasks}