import { useState } from "react";
import styles from "./App.module.css";
import AppProvider from "./AppProvider";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import NavBarProvider from "./components/NavBar/NavBarProvider";

const App = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  return (
    <AppProvider>
      <div className={styles.container}>
        <NavBarProvider>
          <NavBar setIsShow={setIsShowAdd} />
          <div className={styles.todos}>
            <TodoList />
          </div>
        </NavBarProvider>
        <TodoForm isShowAdd={isShowAdd} setIsShowAdd={setIsShowAdd} />
      </div>
    </AppProvider>
  );
};

export default App;
