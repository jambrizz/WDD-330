// view
function getAllTasks() {
    const todoList = document.getElementById('display-tasks');
    todoList.innerHTML = '';
    let title = document.createElement('h3');
    title.classList.add('task-title');
    title.innerText = "All Tasks";
    todoList.appendChild(title);
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
    let title = document.createElement('h3');
    title.classList.add('task-title');
    title.innerText = "Completed Tasks";
    todoList.appendChild(title);
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
    let title = document.createElement('h3');
    title.classList.add('task-title');
    title.innerText = "Pending Tasks";
    todoList.appendChild(title);
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



function all() {
    const all = document.getElementById('all');
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.innerText = 'All';
    button.addEventListener('click', getAllTasks);
    all.appendChild(button);
};

function pending() {
    const pending = document.getElementById('pending');
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.innerText = 'Pending';
    button.addEventListener('click', pendingTasks);
    pending.appendChild(button);
};

function completed() {
    const completed = document.getElementById('completed');
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.innerText = 'Completed';
    button.addEventListener('click', getCompletedTasks);
    completed.appendChild(button);
    getCompletedTasks();
};

function countTasks() {
    const count = document.getElementById('count');
    let countTasks = localStorage.length;
    count.innerText = "You have " + countTasks + " tasks";
};

export {addTask, getAllTasks, getCompletedTasks, pendingTasks, all, pending, completed, countTasks};