// script.js

// Task array to hold tasks and their completion state
let tasks = [];

// Function to add a new task
function addTask(taskDescription) {
    const task = {
        id: Date.now(), // Unique identifier
        description: taskDescription,
        isCompleted: false
    };
    tasks.push(task);
    renderTasks(); // Refresh tasks in the UI
}

// Function to mark a task as completed
function completeTask(taskId) {
    tasks = tasks.map(task => task.id === taskId ? {...task, isCompleted: true} : task);
    renderTasks(); // Refresh tasks in the UI
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks(); // Refresh tasks in the UI
}

// Render tasks in the UI (Placeholder function)
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description;
        if (task.isCompleted) {
            taskItem.style.textDecoration = 'line-through'; // Strike through completed tasks
        }
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeTask(task.id);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(task.id);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Example of how to use the functions (could be replaced by actual event listeners)
addTask('Learn JavaScript');
addTask('Build a ToDo app');