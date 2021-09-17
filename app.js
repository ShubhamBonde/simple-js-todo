const taskInput = document.querySelector('#input-tasks');
const displayTasks = document.querySelector('.display-tasks');
const addTaskButton = document.querySelector('.add-task');
const taskViewtask  = document.querySelector('.task-view-tasks');


addTaskButton.addEventListener('click', ()=>{
    
   task = taskInput.value;
    const tasks = document.createElement("li");
    tasks.setAttribute('id', 'task-view-tasks')
    tasks.classList.add('task-item')
    const node = document.createTextNode(task);
    tasks.appendChild(node);
    const element = document.getElementById('task-view');
    element.appendChild(tasks);
    
});

displayTasks.addEventListener('click', function(task){
    task.target.classList.toggle('checked');
});