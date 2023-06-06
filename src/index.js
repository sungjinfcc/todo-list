import "./style.css";
import "./modules/UI";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const skeleton = `<header class="header">
<h1 class="title">Todo List</h1>
</header>
<main class="main">
<div class="nav">
  <div class="title-div">
    <h2 class="title">Projects</h2>
    <button class="add">+</button>
  </div>
  <div class="projects-div">
    <div class="project" id="default">Default</div>
  </div>
</div>
<div class="content">
  <div class="title-div">
    <h2 class="title">Default</h2>
    <button class="add">+</button>
  </div>
  <div class="items-div">
    <div class="item">First todo</div>
  </div>
</div>
</main>
<div class="project-input modal">
  <form id="addProject">
    <h2>Add new project!</h3>
    <input type="text" id="name" placeholder="Name" />
    <button class="submit" type="submit">Submit</button>
  </form>
</div>
<div class="item-input modal">
  <form id="addItem">
    <h2>Add new item!</h3>
    <input type="text" id="title" placeholder="Title" />
    <input type="text" id="description" placeholder="Description" />
    <input type="date" id="due-date" />
    <input type="number" id="priority" />
    <button class="submit" type="submit">Submit</button>
  </form>
</div>
<div class="overlay"></div>
<footer class="footer">
  <p>Copyright © 2023 sungjinfcc</p>
  <a href="https://github.com/sungjinfcc" target="_blank">
    <i class="fab fa-github"></i>
  </a>
</footer>`;

document.body.innerHTML = skeleton;
