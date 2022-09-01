import { toggleClass, createDeleteBtn, deleteItem } from './helper.js'

class App {
  //Declare variables 
  #body = document.querySelector("body");
  #ballBtn = document.querySelector("#ball");
  #button = document.querySelector('[data-addBtn]');
  #addTaskBtn = document.querySelector("#addTaskBtn");
  #newTaskContainer = document.querySelector("#newTaskContainer");
  #crossBtn = document.querySelector("#crossBtn");
  #ulElem = document.querySelector("ul");
  #window = window;
  constructor() {
    this.#ballBtn.addEventListener("click", this.#toggleMode.bind(this));
    this.#addTaskBtn.addEventListener("click", this.#openAddTask.bind(this));
    this.#crossBtn.addEventListener("click", this.#closeAddTask.bind(this));
    this.#button.addEventListener('click', this.#addNewTask.bind(this));
    this.#window.addEventListener('click', this.#closeAddTaskWindow.bind(this));

    //firing event as soon as script loads
    this.#addDeleteBtn();
    this.#deleteListItem();
    this.#checkTask()
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

  //add delete btn to present todo items
  #addDeleteBtn() {
    //Select all list items
    const liElems = document.getElementsByTagName("li");
    const liArr = Array.from(liElems);
    liArr.forEach(li => createDeleteBtn(li, 'deleteTask'))
  }

  //add delete btn to present todo items
  #deleteListItem() {
    const deleteBtns = document.getElementsByClassName("deleteTask");
    const btnsArr = Array.from(deleteBtns);
    btnsArr.forEach(btn => {
      btn.addEventListener('click', deleteItem);
    });
  }

  #checkTask() {
    this.#ulElem.addEventListener('click', (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      }
    })
  }

  #addNewTask() {
    const li = document.createElement("LI");
    const getInputValue = document.querySelector("input");

    li.textContent = getInputValue.value;

    if (getInputValue.value === '') alert("You must write something first!");
    else {
      this.#ulElem.appendChild(li);
      this.#newTaskContainer.style.display = 'none';
      getInputValue.value = '';
      createDeleteBtn(li, 'deleteTask');
      this.#deleteListItem()
    }
  }
  
  #closeAddTaskWindow(e) {
    if (e.target === this.#newTaskContainer) {
    this.#newTaskContainer.classList.remove('showContainer');
  }
  }
}

const todoApp = new App();