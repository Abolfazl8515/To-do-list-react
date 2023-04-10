import { useTodos } from "../../AppProvider";
import Todo from "../Todo/Todo";
import styles from "./UnCompletedTodos.module.css";

const UnCompletedTodos = () => {
  const todos = useTodos();

  const renderTodos = () => {
    const filtredTodos = todos.filter((t) => t.isCompleted === false);
    if (filtredTodos.length) {
      return filtredTodos.map((t) => {
        return <Todo key={t.id} todo={t} />;
      });
    } else {
      return <h2>There is no UnCompleted Todos</h2>;
    }
  };

  return (
    <div className={styles.container}>
      <h2>UnCompleted Todos</h2>
      {renderTodos()}
    </div>
  );
};

export default UnCompletedTodos;
