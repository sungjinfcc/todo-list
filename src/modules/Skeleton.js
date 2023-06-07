import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import UI from "./UI";
import Storage from "./Storage";

export default class Skeleton {
  constructor() {
    this.skeleton = `<header class="header">
        <h1 class="title">Todo List</h1>
        </header>
        <main class="main">
        <div class="nav">
          <div class="title-div">
            <h2 class="title">Projects</h2>
            <button class="add" id="project-add">+</button>
          </div>
          <div class="projects-div">
          </div>
        </div>
        <div class="content">
          <div class="title-div">
            <h2 class="title", id="project-title">Items</h2>
            <button class="add" id="item-add">+</button>
          </div>
          <div class="items-div">
          </div>
        </div>
        </main>
        <div class="modal" id="project-modal">
          <form id="addProject">
            <h2>Add new project!</h3>
            <input type="text" id="project-input" placeholder="Title" />
            <button class="submit" id="project-submit" type="submit">Submit</button>
          </form>
        </div>
        <div class="modal" id="item-modal">
          <form id="addItem">
            <h2>Add new item!</h3>
            <input type="text" id="item-input-title" placeholder="Title" />
            <input type="text" id="item-input-description" placeholder="Description" />
            <input type="date" id="item-input-due-date" />
            <input type="number" id="item-input-priority" />
            <button class="submit" id="item-submit" type="submit">Submit</button>
          </form>
        </div>
        <div class="overlay"></div>
        <footer class="footer">
          <p class="reload">Copyright © 2023 sungjinfcc</p>
          <a href="https://github.com/sungjinfcc" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </footer>`;
  }

  createSkeleton() {
    document.body.innerHTML = this.skeleton;
    Skeleton.activateDefaultButtons();
    UI.loadProjects();
    UI.createProject("Default");
    UI.loadItems("Default");
  }

  static activateDefaultButtons() {
    const addProjectButton = document.querySelector("#project-add");
    addProjectButton.addEventListener("click", UI.openAddProjectModal);

    const addItemButton = document.querySelector("#item-add");
    addItemButton.addEventListener("click", UI.openAddItemModal);

    const overlayDiv = document.querySelector(".overlay");
    overlayDiv.addEventListener("click", UI.closeModal);

    const submitProjectButton = document.querySelector("#project-submit");
    submitProjectButton.addEventListener("click", UI.addProject);
    const submitItemButton = document.querySelector("#item-submit");
    submitItemButton.addEventListener("click", UI.addItem);

    const reset = document.querySelector(".header");
    reset.addEventListener("click", Skeleton.deleteAll);

    const reload = document.querySelector(".reload");
    reload.addEventListener("click", Skeleton.reload);
  }

  static deleteAll() {
    console.log("Deleted all projects!");
    const todoList = Storage.getTodoList();
    todoList.setProjects([]);
    Storage.saveTodoList(todoList);
    UI.loadProjects();
  }

  static reload() {
    console.log("reloaded");
    UI.loadProjects();
  }
}
