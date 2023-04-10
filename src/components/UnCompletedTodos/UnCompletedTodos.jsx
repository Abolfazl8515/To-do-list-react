import { useTodos } from "../../AppProvider";
import Todo from "../Todo/Todo";
import styles from "./UnCompletedTodos.module.css";

const UnCompletedTodos = () => {
  const todos = useTodos();
  console.log(todos.length);

  const renderTodos = () => {
    if (todos.length) {
      return todos.map((t) => {
        return <Todo key={t.id} todo={t} />;
      });
    } else {
      return <h2>UnCompleted Todos</h2>;
    }
  };

  return <div className={styles.container}>{renderTodos()}</div>;
};

export default UnCompletedTodos;
