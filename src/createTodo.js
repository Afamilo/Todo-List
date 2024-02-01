let Todo = []; 

let title = document.querySelector("#todo-title");
    let details = document.querySelector("#todo-details");
    let dueDate = document.querySelector("#todo-date");
    let priority = document.querySelector("#todo-priority");

function TodoOb(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
}


export function addTodoToList() {
    let title = document.querySelector("#todo-title").value;
    let details = document.querySelector("#todo-details").value;
    let dueDate = document.querySelector("#todo-date").value;
    let priority = document.querySelector("#todo-priority").value;
    let newTodo = new TodoOb(title, details, dueDate, priority);
    Todo.push(newTodo);
   renderOnScreen();
   clearForm();
}

function getTodoElement(todo) {
    const todoElement = document.createElement("li");
    todoElement.classList.add("todo-item");

    const todoTitle = getTodoTitle(todo);
    const todoDetails = getTodoDetails(todo);
    const todoDueDate = getDueDate(todo);
    const todoPriority = getTodoPriority(todo);
    const completedBtn = getCompletedTodoBtn(todo);
    const deleteTodoBtn = getDeleteTodoBtn(todo);

    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDetails);
    todoElement.appendChild(todoDueDate);
    todoElement.appendChild(todoPriority);
    todoElement.appendChild(completedBtn);
    todoElement.appendChild(deleteTodoBtn);

    return todoElement;
}

function getTodoTitle(todo){
    const todoTitle = document.createElement("h3");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = `${todo.title}`;
    return todoTitle;
}

function getTodoDetails(todo){
    const todoDetails = document.createElement("h5");
    todoDetails.classList.add("todo-details");
    todoDetails.textContent = `${todo.details}`;
    return todoDetails;
}

function getDueDate(todo){
    const todoDueDate = document.createElement("h5");
    todoDueDate.classList.add("todo-date");
    todoDueDate.textContent = `${todo.dueDate}`;
    return todoDueDate;
}

function getTodoPriority(todo){
    const todoPriority = document.createElement("h5");
    todoPriority.classList.add("todo-priority");
    todoPriority.textContent = `${todo.priority}`;
    return todoPriority;
}

function getCompletedTodoBtn(){
    const completedTodoBtn = document.createElement("button");
    completedTodoBtn.classList.add("completed-btn");
    completedTodoBtn.textContent = "Completed";
    return completedTodoBtn;
}

function getDeleteTodoBtn(){
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.classList.add("delete-btn");
    deleteTodoBtn.textContent = "X";
    
    deleteTodoBtn.addEventListener('click', ()=>{
        deleteTodo();
    })
    return deleteTodoBtn;
}

function renderOnScreen(){
    let todoScreen = document.querySelector(".display-sec");
    todoScreen.innerHTML = "";

    for (let i = 0; i < Todo.length; i++){
        let todo = Todo[i];
        const todoElement = getTodoElement(todo);
        todoScreen.appendChild(todoElement)
    }
}
function deleteTodo(index) {
    Todo.splice(index, 1);
    renderOnScreen();
}
export function clearForm() {
    title.value = "";
    details.value = "";
    dueDate.value = "";
    priority.value= "";
}

export function storage() {
    localStorage.setItem(`Todo`, JSON.stringify(Todo));
}
 
function restore() {
    Todo = JSON.parse(localStorage.getItem('Todo'));
    renderOnScreen();
}

restore();

