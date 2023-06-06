export default class TodoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(title) {
    return this.projects.find((value) => value.title === title);
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectTitle) {
    this.projects.filter((value) => value.title !== projectTitle);
  }
}
