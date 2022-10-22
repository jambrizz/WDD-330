//todos = JSON.parse(localStorage.getItem('todos')) || [];

const button = document.getElementById('addTodo');

button.addEventListener('click', createNewTask);
//button.addEventListener('click', getAllTasks);
//button.addEventListener('click', getCompletedTasks)

//This function is to create a new task
function createNewTask(){
    task = document.getElementById('task').value;
    //const taskList = toDoList;
    const newTask = {
        id: Date.now(),
        content: task,
        completed: false
    }; 
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    getAllTasks();
};

function getAllTasks() {
    const todoList = document.getElementById('display-tasks');
    
    todoList.innerHTML = '';
    Object.keys(localStorage).forEach(function(key) {
        const task = JSON.parse(localStorage.getItem(key));
        let item = document.createElement('div');
        item.classList.add('task');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.id = task.id;
        checkbox.name = task.id;
        checkbox.value = task.completed;
        checkbox.checked = task.completed;
        checkbox.addEventListener('click', function() {taskCompleted(task.id)});
        item.appendChild(checkbox);
        let label = document.createElement('label');
        label.classList.add('task-label');
        label.value = task.content;
        label.htmlFor = task.id;
        label.innerText = task.content;
        item.appendChild(label);
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';  
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {deleteTask(task.id);});
        item.appendChild(deleteButton);
        todoList.appendChild(item);
    });
};

function getCompletedTasks(){
    const todoList = document.getElementById('display-tasks');
    todoList.innerHTML = '';
    Object.keys(localStorage).forEach(function(key) {
        const task = JSON.parse(localStorage.getItem(key));
        if (task.completed == true) {
            let item = document.createElement('div');
            item.classList.add('task');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.id = task.id;
            checkbox.name = task.id;
            checkbox.value = task.completed;
            checkbox.checked = task.completed;
            checkbox.addEventListener('click', function() {taskCompleted(task.id)});
            item.appendChild(checkbox);
            let label = document.createElement('label');
            label.classList.add('task-label');
            label.value = task.content;
            label.htmlFor = task.id;
            label.innerText = task.content;
            item.appendChild(label);
            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function() {deleteTask(task.id);});
            item.appendChild(deleteButton);
            todoList.appendChild(item);
        };
    });
};

function pendingTasks() {
    const todoList = document.getElementById('display-tasks');
    todoList.innerHTML = '';
    Object.keys(localStorage).forEach(function(key) {
        const task = JSON.parse(localStorage.getItem(key));
        if (task.completed == false) {
            let item = document.createElement('div');
            item.classList.add('task');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.id = task.id;
            checkbox.name = task.id;
            checkbox.value = task.completed;
            checkbox.checked = task.completed;
            checkbox.addEventListener('click',function() {taskCompleted(task.id)});
            item.appendChild(checkbox);
            let label = document.createElement('label');
            label.classList.add('task-label');
            label.value = task.content;
            label.htmlFor = task.id;
            label.innerText = task.content;
            item.appendChild(label);
            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function() {deleteTask(task.id);});
            item.appendChild(deleteButton);
            todoList.appendChild(item);
        };
    });
};

function deleteTask(id) {
    localStorage.removeItem(id);
    pendingTasks();
};

function taskCompleted(id) {
    let task = localStorage.getItem(id);
    task = JSON.parse(task);
    const updateTask = {
        id: task.id,
        content: task.content,
        completed: !task.completed
    };
    localStorage.setItem(updateTask.id, JSON.stringify(updateTask));
    getCompletedTasks();
    //localStorage.setItem(completed, JSON.stringify(task));
    //pendingTasks();
};

pendingTasks();

