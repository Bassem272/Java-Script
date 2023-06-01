// function addTask() {
//   var taskName = document.getElementById("taskName").value;
//   var priority = document.getElementById("priority").value;

//   // Validate task name and priority
//   var nameRegex = /^[a-zA-Z\s]+$/;
//   var priorityRegex = /^[1-9]\d*$/;
//   if (!nameRegex.test(taskName)) {
//     alert("Invalid task name");
//     return;
//   }
//   if (!priorityRegex.test(priority)) {
//     alert("Priority must be greater than 0");
//     return;
//   }

//   // Add task to task list
//   var table = document.getElementById("taskList");
//   var row = table.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   cell1.innerHTML = taskName;
//   cell2.innerHTML = priority;
//   cell3.innerHTML = "<button onclick='removeTask(this)'>Remove</button>";

//   // Sort table rows based on priority column
//   var rows = table.rows;
//   var sortedRows = Array.from(rows)
//     .slice(1)
//     .sort((a, b) => {
//       return a.cells[1].textContent - b.cells[1].textContent;
//     });
//   table.tBodies[0].append(...sortedRows);
//   // Clear input fields
//   document.getElementById("taskName").value = "";
//   document.getElementById("priority").value = "";
// }

// function removeTask(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }

// function show() {
//   var table = document.getElementById("taskList");
//   var firstTask = table.rows[1].cells[0].textContent;
//   alert(firstTask);
// }
// function addTask() {
//   var taskName = document.getElementById("taskName").value;
//   var priority = document.getElementById("priority").value;

//   // Validate task name and priority
//   var nameRegex = /^[a-zA-Z\s]+$/;
//   var priorityRegex = /^[1-9]\d*$/;
//   if (!nameRegex.test(taskName)) {
//     alert("Invalid task name");
//     return;
//   }
//   if (!priorityRegex.test(priority)) {
//     alert("Priority must be greater than 0");
//     return;
//   }

//   // Add task to task list
//   var table = document.getElementById("taskList");
//   var row = table.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   cell1.innerHTML = taskName;
//   cell2.innerHTML = priority;
//   cell3.innerHTML = "<button onclick='editTask(this.parentNode.parentNode)'>Edit</button> <button onclick='removeTask(this)'>Remove</button>";

//   // Sort table rows based on priority column
//   var rows = table.rows;
//   var sortedRows = Array.from(rows).slice(1).sort((a, b) => {
//     return a.cells[1].textContent - b.cells[1].textContent;
//   });
//   table.tBodies[0].append(...sortedRows);

//   // Clear input fields
//   document.getElementById("taskName").value = "";
//   document.getElementById("priority").value = "";
// }
function addTask() {
  var taskName = document.getElementById("taskName").value;
  var priority = document.getElementById("priority").value;

  // Validate task name and priority
  var nameRegex = /^[a-zA-Z\s]+$/;
  var priorityRegex = /^[1-9]\d*$/;
  if (!nameRegex.test(taskName)) {
    alert("Invalid task name");
    return;
  }
  if (!priorityRegex.test(priority)) {
    alert("Priority must be greater than 0");
    return;
  }

  // Add task to task list
  var table = document.getElementById("taskList");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = taskName;
  cell2.innerHTML = priority;
  cell3.innerHTML =
    "<button onclick='editTask(this.parentNode.parentNode)'>Edit</button> <button onclick='removeTask(this.parentNode.parentNode)'>Remove</button>";

  // Sort table rows based on priority column
  var rows = table.rows;
  var sortedRows = Array.from(rows).slice(1).sort((a, b) => {
    return a.cells[1].textContent - b.cells[1].textContent;
  });
  table.tBodies[0].append(...sortedRows);

  // Clear input fields
  document.getElementById("taskName").value = "";
  document.getElementById("priority").value = "";
}

function removeTask(row) {
  var table = document.getElementById("taskList");
  table.deleteRow(row.rowIndex);
}

function editTask(row) {
  var taskName = row.cells[0].textContent;
  var priority = row.cells[1].textContent;

  // Display a prompt or modal dialog to edit task name and priority
  var newTaskName = prompt("Enter the new task name", taskName);
  var newPriority = prompt("Enter the new priority", priority);

  // Validate new task name and priority
  var nameRegex = /^[a-zA-Z\s]+$/;
  var priorityRegex = /^[1-9]\d*$/;
  if (!nameRegex.test(newTaskName)) {
    alert("Invalid task name");
    return;
  }
  if (!priorityRegex.test(newPriority)) {
    alert("Priority must be greater than 0");
    return;
  }

   // Update the task name and priority in the row
   row.cells[0].textContent = newTaskName;
   row.cells[1].textContent = newPriority;
 
   // Sort table rows based on priority column
   var table = document.getElementById("taskList");
   var rows = table.rows;
   var sortedRows = Array.from(rows).slice(1).sort((a, b) => {
     return a.cells[1].textContent - b.cells[1].textContent;
   });
   table.tBodies[0].append(...sortedRows);
 }
 
 function showFirstTask() {
   var table = document.getElementById("taskList");
   if (table.rows.length > 1) {
     var firstTask = table.rows[1].cells[0].textContent;
     alert(firstTask);
   } else {
     alert("No tasks available");
   }
 }