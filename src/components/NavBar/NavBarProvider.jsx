import React, { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";

const searchTodosContext = React.createContext();
const searchTodosContextDispatcher = React.createContext();

const initialState = "";

const reducer = (state, action) => {
  switch (action.type) {
    case "addValue":
      return action.search;
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useReducer(reducer, initialState);
  return (
    <searchTodosContext.Provider value={searchKey}>
      <searchTodosContextDispatcher.Provider value={setSearchKey}>
        {children}
      </searchTodosContextDispatcher.Provider>
    </searchTodosContext.Provider>
  );
};

export default AppProvider;
export const useSearch = () => useContext(searchTodosContext);
export const useSearchActions = () => useContext(searchTodosContextDispatcher);
