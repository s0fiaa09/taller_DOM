
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function createTaskElement(taskText) {

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Eliminar';
    
    deleteBtn.addEventListener('click', function() {
        taskItem.remove(); 
        saveTasks(); 
    });
    
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    saveTasks();
}

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') { 
        createTaskElement(taskText);
        taskInput.value = ''; 
    }
});


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click(); 
    }
});


function saveTasks() {

    const taskItems = document.querySelectorAll('.task-item');
    

    const tasks = [];
    

    taskItems.forEach(function(taskItem) {

        const taskText = taskItem.firstChild.textContent;
        tasks.push(taskText);
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) { 
        const tasks = JSON.parse(savedTasks);
        
        tasks.forEach(function(taskText) {
            createTaskElement(taskText);
        });
    }
}

function createTaskElementOnLoad(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Eliminar';
    
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
        saveTasks();
    });
    
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        
        tasks.forEach(function(taskText) {
            createTaskElementOnLoad(taskText); 
        });
    }
}

loadTasks();