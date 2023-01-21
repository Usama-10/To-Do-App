 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9MSHG8yZSKkXdMlCvETu1o7vw4JfeWk8",
    authDomain: "to-do-app-205de.firebaseapp.com",
    projectId: "to-do-app-205de",
    storageBucket: "to-do-app-205de.appspot.com",
    messagingSenderId: "156402991852",
    appId: "1:156402991852:web:572fa80885d776be6a5bc9",
    measurementId: "G-EGRPKL3GRS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const db =getDatabase()

// const inp =document.getElementById('inp')

window.saveValue = function  (){ 
var obj={
value:inp.value
}
obj.id = Math.random().toString().slice(2)
const regRef = ref (db,`reg/${obj.id}/`)
set(regRef,obj)
};













var main = document.getElementById('main')
var inp =document.getElementById('inp')
window.add=function (){
    

    var li = document.createElement("li")
    var liText = document.createTextNode(inp.value)
    li.appendChild(liText);
    // para.setAttribute("class","abc");


    var editBtn =document.createElement("BUTTON");
    var editBtnText=document.createTextNode("EDIT")
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick','editToDo(this)')

    li.appendChild(editBtn)

    var delBtn = document.createElement("BUTTON")
    var delBtnText =document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    delBtn.setAttribute("onclick","delBtn(this)")
    li.appendChild(delBtn)
    main.appendChild(li);
    // inp.value="";
    saveValue();
}

window.editToDo = function (element){
    var newValue = prompt('Enter Value')
    element.parentNode.firstChild.nodeValue = newValue
}


window.delBtn = function (element){
element.parentNode.remove();
}

window.deleteAll = function (){
    main.innerHTML=""
}

