class saveLocalStorage {
  static getAllTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
  }
}

export default saveLocalStorage;
