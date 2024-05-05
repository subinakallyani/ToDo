const inputTask = document.querySelector(".add-item-box");
const addBtn = document.querySelector(".add-button");
const addedTask = document.querySelector(".task-container");

let deleteBtns;
let tasks = "";
let arrayTask = [];
let task = {};
let id = 0;
function addItem() {
  tasks = arrayTask
    .map((item) => {
      return `<div class="task-item" data-id="${item.id}">
    <div class="task">${item.taskItem}</div>
    <div class="buttons">
    <button class="btn delete-button" onclick="deleteHandler(event)">Delete</button>
   <button class="btn done-button" onclick="doneHandler(event)">Done</button>
   </div>
   </div>`;
    })
    .join("");

  addedTask.innerHTML = "";
  addedTask.insertAdjacentHTML("afterbegin", tasks);
  inputTask.value = "";
}
addBtn.addEventListener("click", () => {
  task = { id: new Date().getTime(), taskItem: inputTask.value };
  arrayTask.push(task);
  // console.log(arrayTask);
  addItem();
  // addEventListner();
});
function addEventListner() {
  deleteBtns = document.querySelectorAll(".delete-button");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", deleteHandler);
  });
}
function deleteHandler(e) {
  id = +e.target.closest(".task-item").getAttribute("data-id");

  arrayTask = arrayTask.filter((task) => id !== task.id);
  // console.log(arrayTask, "llll");
  // console.log(typeof id, "kkk");
  addItem();
}
function doneHandler(e) {
  e.target.closest(".task-item").classList.add("strike");
  e.target.closest(".buttons").classList.add("invisible");

  // id = +e.target.closest(".task-item").getAttribute("data-id");
  // arrayTask.forEach((task) => {
  //   if (id === task.id) {
  //     taskElement.classList.add("strike");
  //     console.log("hi");
  //   }
  // });
}
// deleteBtns.addEventListener("click", () => {
//
//   // console.log(arrayTask, "aaa");
//   addItem();
// });
