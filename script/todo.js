import { toggleClass } from './helper.js'

class App {
  //Declare variables 
  #body = document.querySelector("body");
  #ballBtn = document.querySelector("#ball");
  #addTaskBtn = document.querySelector("#addTaskBtn");
  #newTaskContainer = document.querySelector("#newTaskContainer");
  #crossBtn = document.querySelector("#crossBtn");
  #window = window;
  constructor() {
    this.#ballBtn.addEventListener("click", this.#toggleMode.bind(this));
    this.#addTaskBtn.addEventListener("click", this.#openAddTask.bind(this));
    this.#crossBtn.addEventListener("click", this.#closeAddTask.bind(this));
  }

  // light/dark mode toggle
  #toggleMode() {
    toggleClass('toggle', this.#body, 'dark');
  }

  //open add new Task window
  #openAddTask() {
    toggleClass('add', this.#newTaskContainer, 'showContainer');
    this.#newTaskContainer.style.display = 'flex';
  }

  //close add new Task window
  #closeAddTask() {
    toggleClass('remove', this.#newTaskContainer, 'showContainer');
  }




}

const todoApp = new App()


//Adding Close class to every list item

let myNodeList = document.getElementsByTagName("li");

for (let i = 0; i < myNodeList.length; i++) {
  let child = document.createElement("DIV");
  let txt = document.createTextNode("\u00D7");
  child.className = "deleteTask";
  child.appendChild(txt);
  myNodeList[i].appendChild(child);
}


// Click on a close button to hide the current list item 
/* Now when we have created a div with class name close we can select that div now and use that to close the list item */

let hide = document.getElementsByClassName("deleteTask");
for (let i = 0; i < hide.length; i++) {
  hide[i].onclick = function() {
    var parent = this.parentElement;
    parent.style.display = "none";
  }
}


/* Now We will add checked class so user can tick completed tasks */
let list = document.querySelector("ul");
list.addEventListener("click", function(list) {
  if (list.target.tagName === "LI") {
    list.target.classList.toggle("checked");
  }
});

/* Now take the value from input element and make it displays in the ul and add a function which will add the task in the ul when user click on the button */

document.querySelector("button").addEventListener("click", function newElement() {

  let li = document.createElement("LI");

  let getInputValue = document.querySelector("input").value;

  let assignLi = document.createTextNode(getInputValue);

  li.appendChild(assignLi);

  if (getInputValue === "") {
    alert("You must write something first!")
  } else {
    list.appendChild(li);

    //This will close the Task Container div
    document.querySelector("#newTaskContainer").style.display = "none";
  }
  document.querySelector("input").value = "";

  // this will add close buttons and checked class to the added lists
  let child = document.createElement("DIV");
  let txt = document.createTextNode("\u00D7");
  child.className = "close";
  child.appendChild(txt);
  li.appendChild(child);

  for (var i = 0; i < hide.length; i++) {
    hide[i].onclick = function() {
      var parent = this.parentElement;
      parent.style.display = "none";
    }
  }
});

/* TO CLOSE THE ADD NEW TASK WINDOW */
window.onclick = function() {
  if (event.target === document.querySelector("#newTaskContainer")) {
    document.querySelector("#newTaskContainer").classList.remove('showContainer');
  }
};