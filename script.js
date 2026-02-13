// DOM Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create task item
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // Create task text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    
    // Add click event to toggle complete
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    // Add click event to delete task
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    // Append elements to li
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Add to list
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
}

// Event listener for Add button
addBtn.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
