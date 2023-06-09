// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addButton.addEventListener('click', addTask);

// Array to store tasks
const tasks = [];

// Function to add a new task
function addTask() {
  // Get the task description from the input field
  const taskDescription = taskInput.value;

  if (taskDescription) {
    // Create a new task object
    const task = {
      description: taskDescription,
      completed: false
    };

    // Add the task to the array
    tasks.push(task);

    // Clear the input field
    taskInput.value = '';

    // Render the tasks
    renderTasks();
  }
}

// Function to render the tasks
function renderTasks() {
  // Clear the task list
  taskList.innerHTML = '';

  // Loop through the tasks array and create list items for each task
  for (const task of tasks) {
    const listItem = document.createElement('li');

    // Add a class to the list item if the task is completed
    if (task.completed) {
      listItem.classList.add('completed');
    }

    // Set the text content of the list item
    listItem.textContent = task.description;

    // Add event listener to toggle the completed state when clicking a task
    listItem.addEventListener('click', function() {
      task.completed = !task.completed;
      renderTasks();
    });

    // Append the list item to the task list
    taskList.appendChild(listItem);
  }
}
