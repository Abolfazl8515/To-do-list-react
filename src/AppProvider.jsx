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
          desc: action.desc,
          createdAt: new Date().toLocaleDateString(),
          lastUpdate: new Date().toLocaleDateString(),
          isCompleted: false,
        };
        todos.push(todoInfo);
        return todos;
      }
    case "delete": {
      const filtredTodos = state.filter((t) => t.id !== Number(action.id));
      return filtredTodos;
    }
    case "completed": {
      const index = state.findIndex((item) => item.id === Number(action.id));
      const todo = { ...state[index] };
      todo.isCompleted = !todo.isCompleted;
      const todos = [...state];
      todos[index] = todo;
      return todos;
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === Number(action.id));
      const todo = { ...state[index] };
      todo.title = action.newTitle;
      todo.desc = action.newDesc;
      todo.lastUpdate = new Date().toLocaleDateString();
      const todos = [...state];
      todos[index] = todo;
      return todos;
    }
    case "sort": {
      const todos = [...state];
      const sortedTodos = todos.sort((a, b) => {
        return new Date(a.lastUpdate) > new Date(b.lastUpdate) ? 1 : -1;
      });
      localStorage.setItem("todos", JSON.stringify(sortedTodos));
      return sortedTodos;
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
