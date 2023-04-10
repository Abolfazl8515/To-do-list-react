import Todo from "../Todo/Todo";
import styles from "./CompletedTodos.module.css";
import { useTodos } from "../../AppProvider";

const CompletedTodos = () => {
  const todos = useTodos();

  const renderTodos = () => {
    const filtredTodos = todos.filter((t) => t.isCompleted === true);
    if (filtredTodos.length) {
      return filtredTodos.map((t) => {
        return <Todo key={t.id} todo={t} />;
      });
    } else {
      return <h2>There is no Completed Todos</h2>;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Completed Todos</h2>
      {renderTodos()}
    </div>
  );
};

export default CompletedTodos;
