let addTask = document.querySelector('.new');
let addButton = document.querySelector('.add');
let task = document.querySelector('.task');
let allTasks = [];

if(localStorage.getItem('todo')) {
allTasks = JSON.parse(localStorage.getItem('todo'))
displayTasks();
}


addButton.addEventListener('click', function() {
    
 let newTask = {
    task:addTask.value,
    checked:false,
    important:false
 };
 
 allTasks.push(newTask)
 displayTasks()
 localStorage.setItem('todo',JSON.stringify(allTasks));
 console.log(allTasks)
});


function displayTasks() {
    let  displayTasks = '';
    allTasks.forEach(function(item, i) {
        displayTasks += `
        <li>
         <input type = 'checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
         <label for='item_${i}' class='${item.important ? 'important' : ''}'>${item.task}</label>
        </li>
        `;
        task.innerHTML = displayTasks;
    });   
}

task.addEventListener('change', function(event) {
   
 let valueLabel = task.querySelector('[for ='+ event.target.getAttribute('id') +']').innerHTML;
    
    allTasks.forEach(function(item){
        if (item.task === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo',JSON.stringify(allTasks));
        } 
    });
});

task.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    allTasks.forEach(function(item,i) {
        if(item.task === event.target.innerHTML) {
            if(event.ctrlKey || event.metaKey){
                allTasks.splice(i,1);
            }else{
                item.important = !item.important;
            }
            displayTasks();
            ocalStorage.setItem('todo',JSON.stringify(allTasks));
        }
    });
});