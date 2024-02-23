
// SELECTORS
const input = document.querySelector('.app form input[type=text]');
const submit = document.querySelector('.app form input[type=submit]');
const filter = document.querySelector('.app form .filter');
const todos = document.querySelector('.app .todos');


// EVENT LISTENERS
submit.addEventListener('click', addTodoFunc);
todos.addEventListener('click', checkTodoFunc);
filter.addEventListener('change', filterFunc);

// FUNCTIONS

function addTodoFunc(e){
    e.preventDefault(); 

    if(!input.value.trim()) return;
   
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const span1 = document.createElement('span');
    span1.classList.add('todo-text');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.classList.add('todo-buttons');
    span2.innerHTML = '<i class="fas fa-check"></i>';
    span2.innerHTML += '<i class="fas fa-trash"></i>';

    todo.append(span1);
    todo.append(span2);
    todos.append(todo);

    input.value = '';
}

function checkTodoFunc(e){

    if(e.target.classList[1] == 'fa-check'){
        const todo = e.target.parentElement.parentElement; 
        todo.classList.toggle('done');
    }
    if(e.target.classList[1] == 'fa-trash'){
        const todo = e.target.parentElement.parentElement; 
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
}

function filterFunc(e){
    console.log(e.target.value); // all, completed, uncompleted

    const todos = document.querySelectorAll('.todos .todo');
    
    if(e.target.value === 'all'){

        for(let elem of todos){
            elem.style.display = 'flex';
        }

    }
    if(e.target.value === 'completed'){
        
        for(let elem of todos){
            if(elem.classList.contains('done')) elem.style.display = 'flex';
            else elem.style.display = 'none';
        }

    }
    if(e.target.value === 'uncompleted'){
       
        for(let elem of todos){
            if(!elem.classList.contains('done')) elem.style.display = 'flex';
            else elem.style.display = 'none';
        }

    }
}

