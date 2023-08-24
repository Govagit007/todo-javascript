const addBut = document.querySelector(".todo-add");
const inputD = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const formSubmit = document.querySelector(".form");

addBut.addEventListener("click", addTodo);
formSubmit.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();

  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  const newLi = document.createElement("li");
  newLi.classList.add("todo-n");

  newLi.innerText = inputD.value;
  newDiv.appendChild(newLi);

  const checkB = document.createElement("button");
  checkB.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  checkB.classList.add("check-box");
  newDiv.appendChild(checkB);

  const trashB = document.createElement("button");
  trashB.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashB.classList.add("trash");
  newDiv.appendChild(trashB);

  todoList.appendChild(newDiv);

  inputD.value = "";
}

const todoall = document.querySelector(".todo-list");

todoall.addEventListener("click", deleteList);

function deleteList(e) {
  const tar = e.target;

  if (tar.classList[0] === "trash") {
    const todo = tar.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      this.remove();
    });
  }

  const listName = document.querySelector(".todo-n");

  if (tar.classList[0] === "check-box") {
    const todo = tar.parentElement;
    todo.classList.toggle("completed");
  }
}
