import { useState } from "react";
import styles from "./App.module.css";
import AppProvider from "./AppProvider";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  return (
    <AppProvider>
      <div className={styles.container}>
        <NavBar setIsShow={setIsShowAdd} />
        <TodoForm isShowAdd={isShowAdd} setIsShowAdd={setIsShowAdd} />
        <div className={styles.todos}>
          <TodoList />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
