//view
//This file is the DOM manipulation helper functions

function displayAllTasks(){
for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let task = JSON.parse(value);
    document.getElementById('display-tasks').innerHTML = task.content;
};
};

module.exports = {displayAllTasks};