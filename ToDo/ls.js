//Model
function createNewTask(){
    task = document.getElementById('task').value;
    //const taskList = toDoList;
    const newTask = {
        id: Date.now(),
        content: task,
        completed: false
    }; 
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    pendingTasks();
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
    pendingTasks();
};

export {createNewTask, deleteTask, taskCompleted};