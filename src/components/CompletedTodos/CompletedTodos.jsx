import Todo from "../Todo/Todo";
import styles from "./CompletedTodos.module.css";

const CompletedTodos = () => {
  const todoInfo = {
    id: Math.floor(Math.random() * 10000),
    title: "kosshere",
    createdAt: new Date().toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    isCompleted: false,
  };
  return (
    <div className={styles.container}>
      <h2>Completed Todos</h2>
      <Todo todo={todoInfo} />
    </div>
  );
};

export default CompletedTodos;
