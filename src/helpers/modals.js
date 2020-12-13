import it from '../modules/main_module';

const taskModal = (obj, index) => {
  return  `<div class="modal fade" id="clockDotMeModal-${index}" tabindex="-1" role="dialog" aria-labelledby="clockDotMeModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${obj.title} ${index}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
  </div>`
}

const addCategoryModal = id => {
  return `<div class="modal fade text-dark" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Category</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="newCategory">Category</label>
                <input type="text" class="form-control" id="newCategoryKey" aria-describedby="newCategoryKey" placeholder="Enter new category">
              </div>
              <button type="button" id= "${id}Button" class="btn btn-dark text-white">Add</button>
              <p class="text-dark text-center" id="newCategoryKeyNotif"></p>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark text-white" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`
}

const addTaskModal = (id) => {
  return `<div class="modal fade text-dark" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add New Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="${id}Title">Task title</label>
            <input type="text" class="form-control" id="${id}Title" aria-describedby="${id}Title" placeholder="Enter new category">
          </div>
          <div class="form-group">
            <label for="${id}Desc">Task Description</label>
            <textarea class="form-control" name="Description" id="${id}Desc" cols="30" rows="5" placeholder="Enter Description"></textarea>
          </div>
          <div class="form-group">
            <label for="${id}Date">Task Due Date</label>
            <input type="date" class="form-control" id="${id}Date" aria-describedby="${id}Date">
          </div>
          <div class="form-group">
            <label for="${id}Priority">Task Priority</label>
            <select name="priority" class= "form-control" id="priority">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="taskCategories">Task Category</label>
            <select id="taskCategories" class="form-control"></select>
          </div>
          <button type="button" id= "${id}Button" class="btn btn-dark text-white">Add</button>
          <p class="text-dark text-center" id="${id}Notif"></p>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark text-white" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
}

export {taskModal, addCategoryModal, addTaskModal}


