export default class Item {
  constructor(title) {
    this.title = title;
    this.description = "description";
    this.dueDate = "dueDate";
    this.priority = "priority";
    this.isDone = false;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
}
