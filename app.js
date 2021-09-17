const taskInput = document.querySelector('#input-tasks');
const displayTasks = document.querySelector('.display-tasks');
const addTaskButton = document.querySelector('.add-task');
const taskViewtask  = document.querySelector('.task-view-tasks');
addTaskButton.style.backgroundColor = 'teal';

// var yesterday = new Date("September 17, 2021");
// console.log(yesterday.toUTCString());

// var msg1 = "There are ";
// var num = 0;
// var msg2 = " new student who'll be joining us today."

// console.log(msg1 + num + msg2); // Implicit coercion of num into string.
// Only way the console.log msg will pop on the console is if num is getting
// Coersed into its string equivalent.
// And output says it does gets converted into string so coercion is automatic.


function addTask(task)
{
    var taskArray = [];
    taskArray.push(task);
    return taskArray;
}






addTaskButton.addEventListener('click', ()=>{
    
   task = taskInput.value;
//    const newLiItem = document.createElement('li');
//    const newLiContent = document.createTextNode(task);
//    newLiItem.appendChild(newLiContent);
//    displayTasks.appendChild(newListItem);

    const tasks = document.createElement("li");
    tasks.setAttribute('id', 'task-view-tasks')
    const node = document.createTextNode(task);
    tasks.appendChild(node);
    const element = document.getElementById('task-view');
    element.appendChild(tasks);
    
});

displayTasks.addEventListener('click', function(task){
    task.target.classList.toggle('checked');
});