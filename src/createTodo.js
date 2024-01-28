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
