import styles from "./App.module.css";
import AppProvider from "./AppProvider";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/TodoForm/TodoForm";
import UnCompletedTodos from "./components/UnCompletedTodos/UnCompletedTodos";

const App = () => {
  return (
    <AppProvider>
      <div className={styles.container}>
        <NavBar />
        <TodoForm />
        <div className={styles.todos}>
          <UnCompletedTodos />
          <CompletedTodos />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
