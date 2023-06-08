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

  getItem(itemTitle) {
    return this.items.find((value) => value.title === itemTitle);
  }

  addItem(newItem) {
    if (this.items.find((value) => value.title === newItem.title)) {
    } else {
      this.items.push(newItem);
    }
  }

  removeItem(itemTitle) {
    this.items = this.items.filter((value) => value.title !== itemTitle);
  }
}
