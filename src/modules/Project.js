export default class Project {
  constructor(title) {
    this.title = title;
    this.items = [];
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setItems(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  getItem(title) {
    return this.items.find((value) => value.title === title);
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemTitle) {
    this.items.filter((value) => value.title !== itemTitle);
  }
}
