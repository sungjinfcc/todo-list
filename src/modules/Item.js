export default class Item {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
}
