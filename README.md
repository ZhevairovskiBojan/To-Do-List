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