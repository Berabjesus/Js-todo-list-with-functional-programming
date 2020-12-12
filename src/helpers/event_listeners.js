import {setLocalStorageKey as setKey} from './access_local_storage'

const setLocalStorageKey = key => {
  setKey(key)
}

const addEventToAddCategoryButton = ()=> {
  const addCategoryButton = document.getElementById('addCategoryButton')
  addCategoryButton.onclick = function() {
    const value = document.getElementById('newCategoryKey').value
    const notif = document.getElementById('newCategoryKeyNotif')
    value.length === 0 || !value.trim() ? (() => {
      notif.innerText = 'Empty Key is not allowed'
    })() : (()=> {
      loadDoc()
      notif.innerText = value + ' is added to the categories'
    })()
    
    console.log(value);
  }
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("newCategoryKeyNotif").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "t.txt", true);
  xhttp.send();
}

export {addEventToAddCategoryButton}