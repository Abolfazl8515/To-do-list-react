class saveLocalStorage {
  static getAllTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
  }
  static setTodo(todo) {
    const todos = this.getAllTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

export default saveLocalStorage;
