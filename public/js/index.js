function getTodos() {
    let todos = [];
    let todosResultsDiv = document.querySelector('#todosResults');

    fetch('/api/todos')
        .then(res => res.json())
        .then(res => {
            todos = res.data;

            if (todos.length && todosResultsDiv) {
                todosResultsDiv.style.display = 'block';

                for (todo of todos) {
                    let div = document.createElement('div');
                    div.textContent = `${todo.title} | ${todo.isDone}`;
                    todosResultsDiv.append(div);
                }
            }
        })
        .catch(e => console.log(e));
}