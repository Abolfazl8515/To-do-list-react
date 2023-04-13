import { useTodos } from "../../AppProvider";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useTodos();
  return (
    <div className={styles.todoList}>
      {todos.map((t) => {
        return <Todo todo={t} key={t.id} />;
      })}
    </div>
  );
};

export default TodoList;
