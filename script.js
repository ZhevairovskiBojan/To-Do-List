// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from Local Storage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Function to save tasks to Local Storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to get tasks from Local Storage
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Function to add a new task
function addTask(taskText = null) {
    let tasks = getTasksFromLocalStorage();
    taskText = taskText || taskInput.value.trim();

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

    // Clear the input field if the task was manually added
    if (!taskText) {
        taskInput.value = '';
    }

    // Mark task as completed on click
    span.addEventListener('click', function () {
        li.classList.toggle('completed');
        tasks = getTasksFromLocalStorage();
        tasks = tasks.map(task => {
            if (task.text === taskText) {
                task.completed = !task.completed;
            }
            return task;
        });
        saveTasksToLocalStorage(tasks);
    });

    // Delete the task on clicking delete button
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        tasks = tasks.filter(task => task.text !== taskText);
        saveTasksToLocalStorage(tasks);
    });

    // Add task to Local Storage if manually added
    if (!taskText) {
        tasks.push({ text: taskText, completed: false });
        saveTasksToLocalStorage(tasks);
    }
}

// Function to load tasks from Local Storage
function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        addTask(task.text);
        if (task.completed) {
            const li = taskList.lastChild;
            li.classList.add('completed');
        }
    });
}

// Event listener for the 'Add Task' button
addTaskButton.addEventListener('click', function() {
    addTask();
});

// Optional: Allow pressing Enter key to add tasks
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
