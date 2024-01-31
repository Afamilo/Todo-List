import { addTodoToList } from "./createTodo";


const submitTodoBtn = document.querySelector("#submit-button")

export function submitTodo() {
    submitTodoBtn.addEventListener("click", () => {
        addTodoToList();
        
    })
}