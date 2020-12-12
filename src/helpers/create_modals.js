import it from '../modules/main_module';

const taskModal = (obj, index) => {
  const modal = `<div class="modal fade" id="clockDotMeModal-${index}" tabindex="-1" role="dialog" aria-labelledby="clockDotMeModalTitle" aria-hidden="true">
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
  return modal
}

export {taskModal}


