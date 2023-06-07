export default class TodoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    console.log("getprojects called", this.projects);
    return this.projects;
  }

  getProject(title) {
    const project = this.projects.find((value) => value.title === title);
    console.log("getProject called", project);
    return project;
  }

  addProject(project) {
    if (this.projects.find((value) => value.title === project.title)) {
      console.log("cannot add same project");
    } else {
      this.projects.push(project);
    }
  }

  removeProject(projectTitle) {
    this.projects = this.projects.filter(
      (value) => value.title !== projectTitle
    );
  }
}
