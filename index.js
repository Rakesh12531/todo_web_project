let input = document.getElementById("input");
let button = document.getElementById("button");
let todolist = document.getElementById("toDoList");

let todos = [];

window.onload = () =>
    {
        todos = JSON.parse(localStorage.getItem('todos'))||[];
        todos.forEach(todo => addtodolist(todo));
    }

button.addEventListener("click",()=>{
    todos.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todos));
    addtodolist(input.value);
    input.value = '';
});

function addtodolist(todo){
    let para = document.createElement("p");
    para.innerText = todo;
    todolist.appendChild(para);
    para.addEventListener("click",()=>{
        para.style.textDecoration = 'line-through';
        remove(todo);
    });
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para);
        remove(todo);
    });
}

function remove(todo){
    let index = todos.indexOf(todo);
    if(index > -1){
    todos.splice(index,1);
    }
    localStorage.setItem('todos',JSON.stringify(todos));
}


