import {setLocalStorageKey as setKey} from './access_local_storage'

const setLocalStorageKey = key => {
  setKey(key)
}

(()=> {
  const addCategoryButton = document.getElementById('addCategoryButton')
  
  addCategoryButton.onclick = function() {
    console.log('asdas1231');
    
  }
})()

export {setLocalStorageKey}