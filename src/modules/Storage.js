import Project from "./Project";
import TodoList from "./TodoList";
import Item from "./Item";

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );
    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );
    todoList
      .getProjects()
      .forEach((project) =>
        project.setItems(
          project.getItems().map((item) => Object.assign(new Item(), item))
        )
      );
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static removeProject(projectTitle) {
    const todoList = Storage.getTodoList();
    todoList.removeProject(projectTitle);
    Storage.saveTodoList(todoList);
  }

  static addItem(projectTitle, item) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectTitle).addItem(item);
    Storage.saveTodoList(todoList);
  }
}
