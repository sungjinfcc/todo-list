import TodoList from "./TodoList";

export default class UI {
  static renderMain() {
    UI.loadProjects();
  }

  static loadProjects() {
    TodoList.getProjects().foreach((project) => {
      UI.createProject(project.title);
    });
  }

  static createProject(title) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML += `<div class="project" id="${title}">${title}</div>`;
    UI.addProjectButtonHandler();
  }

  static addProjectButtonHandler() {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) =>
      project.addEventListener("click", UI.openProject)
    );
  }

  static openProject(e) {
    const title = e.target.id;
    console.log(title);
    // check later
    TodoList.getProject(title)
      .getItems()
      .forEach((item) => this.createItem(item.title));
  }

  static createItem(title) {
    const itemsDiv = document.querySelector(".items-div");
    itemsDiv.innerHTML += `<div class="item" id="${title}>${title}</div>`;
    UI.addItemButtonHandler();
  }

  static addItemButtonHandler() {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => item.addEventListener("click", UI.editItem));
  }

  static editItem(e) {
    console.log(e.target.id);
  }

  //-------

  static openAddProjectModal() {
    const projectInputModal = document.querySelector("#project-modal");
    projectInputModal.classList.add("active");
    UI.showOverlay();
  }

  static openAddItemModal() {
    const itemInputModal = document.querySelector("#item-modal");
    itemInputModal.classList.add("active");
    UI.showOverlay();
  }

  static showOverlay() {
    const overlayDiv = document.querySelector(".overlay");
    overlayDiv.classList.add("active");
  }

  static closeModal() {
    const overlayDiv = document.querySelector(".overlay");
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlayDiv.classList.remove("active");
  }

  static addProject() {
    const inputDiv = document.querySelector("#project-input");
    const title = inputDiv.value;
    // --- 여기서 부터 다시 시작
  }

  static addItem() {}
}
