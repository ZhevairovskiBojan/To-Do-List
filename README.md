# To-Do-List

To-Do List project is a great way to learn JavaScript for begginers.

1. Basic HTML Structure
We'll start by creating a simple HTML structure. This includes an input field to add tasks, a button to add them to the list, and an unordered list (<ul>) where the tasks will be displayed.

2. CSS Styling. 
Style the input, button, and list. This will make the layout more user-friendly.


3. JavaScript to Add, Delete, and Mark Tasks.
We'll write functions to add new tasks, delete tasks, and mark tasks as completed.

4. Explanation of Key Functions
addTask(): This function:

Gets the value from the input field.
Creates a new list item (<li>) with the task and a delete button.
Appends the task to the <ul>.
Adds functionality to mark the task as completed when clicked and to delete the task when the delete button is clicked.
span.addEventListener('click'): This event listener is added to each task to toggle the completed class, which strikes through the task when clicked.

deleteButton.addEventListener('click'): This event listener is added to each delete button to remove the corresponding task when clicked.

5. How It Works
When a task is added, it's saved to Local Storage.
If you reload the page, tasks will be loaded from Local Storage.
Tasks will retain their completed or pending status across reloads.
You can delete tasks, and the updated list will be saved in Local Storage.

6. Conclusion
Now your To-Do List app can:

Add tasks dynamically.
Mark tasks as completed.
Delete tasks.
Persist data using Local Storage, so tasks don't disappear after reloading the page.