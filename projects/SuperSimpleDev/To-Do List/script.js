let todoList = JSON.parse(localStorage.getItem('data')) || [];

console.log(JSON.parse(localStorage.getItem('data')));

renderTodo();

function renderTodo() {
    let total = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="button-delete">Delete</button>`;
        total += html;
    });

    document.querySelector('.result').innerHTML = total;

    document.querySelectorAll('.button-delete').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodo(); localStorage.clear();
        });
    });
}

document.querySelector('.button-add').addEventListener('click', () => { addTodo('click') });

document.querySelector('.input').addEventListener('keydown', (event) => { addTodo(event) });

function addTodo(event) {
    if (event === 'click' || event.key === 'Enter') {
        const inputName = document.querySelector('.input');
        const inputDueDate = document.querySelector('.input-due-date');
        const name = inputName.value;
        const dueDate = inputDueDate.value;

        todoList.push({ name, dueDate });

        renderTodo()

        inputName.value = '';
        inputDueDate.value = '';
    }
    localStorage.setItem('data', JSON.stringify(todoList));
}