import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
console.log(todoList.todos);
// const tarea = new Todo('aprender js');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);