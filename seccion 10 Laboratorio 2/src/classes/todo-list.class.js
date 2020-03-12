export class TodoList {
    constructor() {
        this.todos = [];
    }
    nuevoTodo(todo) {
        this.todos.push(todo);
    }
    eliminarTodo(id) {

    }
    marcarCompletado(id) {

        for (const todo of this.todos) {
            id = parseInt(id);
            // console.log(id, todo.id);
            if (todo.id === parseInt(id)) {
                todo.completado = !todo.completado;
                break;

            }
        }

    }
    eliminarCompletados() {

    }
}