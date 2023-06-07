import Project from "./Project";
import Storage from "./Storage";
import Item from "./Item";

export default class UI {
  static loadProjects() {
    UI.clearBoard();
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        UI.createProject(project.getTitle());
      });
  }

  static createProject(title) {
    const projects = document.querySelectorAll(".project");
    if (
      title === "Default" &&
      [...projects].find((value) => value.id === "Default")
    ) {
      console.log("default already exists");
    } else {
      console.log(`created project named: ${title}`);
      const projectsDiv = document.querySelector(".projects-div");
      projectsDiv.innerHTML += `<div class="project-div">
      <div class="project" id="${title}">${title}</div>
      <button class="delete" id="delete-project"><i class="fa-solid fa-trash"></i></button>
    </div>`;
      UI.addProjectButtonHandler();
      Storage.addProject(new Project(title));
    }
  }

  static addProjectButtonHandler() {
    const projects = document.querySelectorAll(".project");
    const deleteButtons = document.querySelectorAll("#delete-project");
    projects.forEach((project) =>
      project.addEventListener("click", UI.openProject)
    );
    deleteButtons.forEach((button) =>
      button.addEventListener("click", UI.removeProject)
    );
  }

  static openProject(e) {
    const title = e.target.id;
    UI.loadItems(title);
  }

  static loadItems(title) {
    const projectTitleDiv = document.querySelector("#project-title");
    projectTitleDiv.textContent = title;
    const itemAddDiv = document.querySelector("#item-add");
    itemAddDiv.textContent = "+";
    const itemsDiv = document.querySelector(".items-div");
    itemsDiv.innerHTML = "";
    Storage.getTodoList()
      .getProject(title)
      .getItems()
      .forEach((item) =>
        UI.createItem(title, item.title, item.description, item.dueDate)
      );
  }

  static createItem(projectTitle, itemTitle, itemDescription, itemDate) {
    const itemsDiv = document.querySelector(".items-div");
    itemsDiv.innerHTML += `<div class="item-div">
    <div class="task">
      <div class="item" id="${itemTitle}">${itemTitle}</div>
      <div class="date" id="${itemDate}">${itemDate}</div>
    </div>
    <button class="edit" id="edit-item"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete" id="delete-item"><i class="fa-solid fa-trash"></i></button>
  </div>`;
    UI.addItemButtonHandler();
    Storage.addItem(
      projectTitle,
      new Item(itemTitle, itemDescription, itemDate)
    );
  }

  static addItemButtonHandler() {
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) =>
      button.addEventListener("click", UI.editItem)
    );
    const deleteButtons = document.querySelectorAll("#delete-item");
    deleteButtons.forEach((button) =>
      button.addEventListener("click", UI.removeItem)
    );
  }

  static editItem(e) {
    const title =
      e.target.parentNode.parentNode.parentNode.children[0].children[0].id;
    console.log(title);
  }

  // -------renderMain 끝

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
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  static addProject(event) {
    event.preventDefault();

    const inputDiv = document.querySelector("#project-input");
    const title = inputDiv.value;

    const projects = document.querySelectorAll(".project");

    if ([...projects].every((value) => value.id !== title)) {
      UI.createProject(title);
      UI.closeModal();
    } else {
      alert("Cannot add a project with a same title!");
    }
  }

  static addItem(event) {
    event.preventDefault();

    const inputTitleDiv = document.querySelector("#item-input-title");
    const itemTitle = inputTitleDiv.value;
    const inputDescriptionDiv = document.querySelector(
      "#item-input-description"
    );
    const itemDescription = inputDescriptionDiv.value;
    const inputDateDiv = document.querySelector("#item-input-due-date");
    const itemDate = inputDateDiv.value;

    const projectTitleDiv = document.querySelector("#project-title");
    let projectTitle = projectTitleDiv.textContent;
    if (projectTitle === "Items") {
      projectTitle = "Default";
    }

    const items = document.querySelectorAll(".item");

    if ([...items].every((value) => value.id !== itemTitle)) {
      UI.createItem(projectTitle, itemTitle, itemDescription, itemDate);
      UI.closeModal();
    } else {
      alert("Cannot add an item with a same name!");
    }
  }

  static clearBoard() {
    const projectTitleDiv = document.querySelector("#project-title");
    projectTitleDiv.textContent = "";
    const itemAddDiv = document.querySelector("#item-add");
    itemAddDiv.textContent = "";
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";
    const itemsDiv = document.querySelector(".items-div");
    itemsDiv.innerHTML = "";
  }

  // --- remove functions

  static removeProject(e) {
    const title = e.target.parentNode.parentNode.parentNode.children[0].id;
    console.log(typeof e.target.parentNode);
    if (title === "Default") {
      alert("Cannot delete Default project");
      return;
    }
    Storage.removeProject(title);
    UI.loadProjects();
  }

  static removeItem(e) {
    const itemTitle =
      e.target.parentNode.parentNode.parentNode.children[0].children[0].id;
    const projectTitleDiv = document.querySelector("#project-title");
    const projectTitle = projectTitleDiv.textContent;
    console.log(projectTitle, itemTitle);
    const todoList = Storage.getTodoList();
    todoList.getProject(projectTitle).removeItem(itemTitle);
    Storage.saveTodoList(todoList);
    UI.loadProjects();
    UI.loadItems(projectTitle);
  }
}
