import Todo from "../Todo/Todo";
import styles from "./UnCompletedTodos.module.css";

const UnCompletedTodos = () => {
  return (
    <div className={styles.container}>
      <h2>UnCompleted Todos</h2>
      <Todo />
    </div>
  );
};

export default UnCompletedTodos;
