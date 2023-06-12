class Task {
    constructor(name, priority) {
      this.name = name;
      this.priority = priority;
    }
  }
  
  class TaskList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.sortTasks();
    }
  
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    editTask(task, newName, newPriority) {
      task.name = newName;
      task.priority = newPriority;
      this.sortTasks();
    }
  
    sortTasks() {
      this.tasks.sort((a, b) => a.priority - b.priority);
    }
  
    getFirstTask() {
      if (this.tasks.length > 0) {
        return this.tasks[0];
      }
      return null;
    }
  }
  
  function addTask() {
    const taskName = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const priorityRegex = /^[1-9]\d*$/;
  
    if (!nameRegex.test(taskName)) {
      alert("Invalid task name");
      return;
    }
    if (!priorityRegex.test(priority)) {
      alert("Priority must be greater than 0");
      return;
    }
  
    const task = new Task(taskName, parseInt(priority));
    taskList.addTask(task);
    renderTaskList();
    clearInputFields();
  }
  
  function removeTask(row) {
    const rowIndex = row.rowIndex;
    taskList.removeTask(taskList.tasks[rowIndex - 1]);
    renderTaskList();
  }
  
  function editTask(row) {
    const rowIndex = row.rowIndex;
    const task = taskList.tasks[rowIndex - 1];
    const newName = prompt("Enter the new task name", task.name);
    const newPriority = prompt("Enter the new priority", task.priority);
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const priorityRegex = /^[1-9]\d*$/;
  
    if (!nameRegex.test(newName)) {
      alert("Invalid task name");
      return;
    }
    if (!priorityRegex.test(newPriority)) {
      alert("Priority must be greater than 0");
      return;
    }
  
    taskList.editTask(task, newName, parseInt(newPriority));
    renderTaskList();
  }
  
  function showFirstTask() {
    const firstTask = taskList.getFirstTask();
    if (firstTask) {
      alert(firstTask.name);
    } else {
      alert("No tasks available");
    }
  }
  
  function renderTaskList() {
    const table = document.getElementById("taskList");
    table.innerHTML = `
      <tr>
        <th>Task Name</th>
        <th>Priority</th>
        <th>Actions</th>
      </tr>
    `;
  
    for (const task of taskList.tasks) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const priorityCell = document.createElement("td");
      const actionsCell = document.createElement("td");
      const editButton = document.createElement("button");
      const removeButton = document.createElement("button");
  
      nameCell.textContent = task.name;
      priorityCell.textContent = task.priority;
  
      editButton.textContent = "Edit";
      editButton.onclick = () => editTask(row);
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeTask(row);
  
      actionsCell.appendChild(editButton);
      actionsCell.appendChild(removeButton);
  
      row.appendChild(nameCell);
      row.appendChild(priorityCell);
      row.appendChild(actionsCell);
  
      table.appendChild(row);
    }
  }
  
  function clearInputFields() {
    document.getElementById("taskName").value = "";
    document.getElementById("priority").value = "";
  }
  
  const taskList = new TaskList();
  renderTaskList();
  