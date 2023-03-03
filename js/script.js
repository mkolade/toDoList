const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task')


addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkbutton = document.createElement('button');
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add('checkbutton');
    task.appendChild(checkbutton);

    let deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deletebutton.classList.add('deletebutton');
    task.appendChild(deletebutton);

    if(inputTask.value === "")
    {
        alert('Please Enter A Task');
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkbutton.addEventListener('click',function(){
        task.style.textDecoration = 'line-through';
    })

    deletebutton.addEventListener('click',function(e){
       task.remove();
    })
})
