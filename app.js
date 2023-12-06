var taskList = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
let addBtn = document.getElementById("button");
addBtn.addEventListener("click", click);

function click() {
  let value = input.value;
  if (value.trim() !== "") {
    taskList.push(input.value);
    input.value = "";
    showList();
  }
  else{
    alert("Please insert your task");
   return;
  }
}

function showList() {   
  todolist.innerHTML = "";
  taskList.forEach(function (n, i) {
    todolist.innerHTML += "<li>" + n + "<a onclick='editItem(" + i + ")'>Edit</a>" + "<a onclick='deleteItem(" + i + ")'>&times | </a></li>";
  });
}

function editItem(i) {
  var newValue = prompt("Please insert your new value");
  taskList.splice(i, 1, newValue);
  showList();
}

function deleteItem(i) {
  taskList.splice(i, 1);
  showList();
}
