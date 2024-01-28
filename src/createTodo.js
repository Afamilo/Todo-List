let Todo = []; 

function TodoObJ(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
}

function clearForm() {
    title.value = "";
    details.value = "";
    dueDate.value = "";
    priority.value = "";
}

function addTodoToList() {
    let title = document.querySelector("#todo-Title").value;
    let details = document.querySelector("#todo-Details").value;
    let dueDate = document.querySelector("#todo-Date").value;
    let priority = document.querySelector("#todo-Priority").value;
    let newTodo = new TodoOb(title, details, dueDate, priority);
    Todo.push(newTodo);
    renderOnScreen();
}

export default addTodoToList();

function getTodoEelement(todo) {
    const getTodoEelement = document.createElement("li");
    getTodoEelement.classList.add("todo-item");

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

