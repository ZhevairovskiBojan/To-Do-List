// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');

    // Create a span to hold the task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create the delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    // Append the span and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Mark task as completed on click
    span.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Delete the task on clicking delete button
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });
}

// Event listener for the 'Add Task' button
addTaskButton.addEventListener('click', addTask);

// Optional: Allow pressing Enter key to add tasks
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
