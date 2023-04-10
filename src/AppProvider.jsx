import React, { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import saveLocalStorage from "./utils/saveLocalStorage";

const todosContext = React.createContext();
const todosContextDispatcher = React.createContext();

const initialState = saveLocalStorage.getAllTodos();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.title) {
        const todos = [...state];
        const todoInfo = {
          id: Math.floor(Math.random() * 10000),
          title: action.title,
          createdAt: new Date().toLocaleDateString(),
          lastUpdate: new Date().toLocaleDateString(),
          isCompleted: false,
        };
        saveLocalStorage.setTodo(todoInfo);
        todos.push(todoInfo);
        return todos;
      }

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <todosContext.Provider value={todos}>
      <todosContextDispatcher.Provider value={setTodos}>
        {children}
      </todosContextDispatcher.Provider>
    </todosContext.Provider>
  );
};

export default AppProvider;
export const useTodos = () => useContext(todosContext);
export const useTodosActions = () => useContext(todosContextDispatcher);
