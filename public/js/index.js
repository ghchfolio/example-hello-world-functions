'use strict';

function getTodos() {
    let todos = [];
    const todosResultsDiv = document.querySelector('#todosResults');

    fetch('/api/todos')
        .then(res => res.json())
        .then(res => {
            todos = res.data;

            if (todos.length && todosResultsDiv) {
                todosResultsDiv.style.display = 'block';

                for (let todo of todos) {
                    const div = document.createElement('div');

                    div.textContent = `${todo.title} | ${todo.isDone}`;
                    todosResultsDiv.append(div);
                }
            }
        })
        .catch(e => console.log(e));
}