import { useTodos } from "../../AppProvider";
import { useSearch } from "../NavBar/NavBarProvider";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useTodos();
  const searchKey = useSearch();
  const filtredTodos = todos.filter(
    (t) => t.title.includes(searchKey) || t.desc.includes(searchKey)
  );
  return (
    <div className={styles.todoList}>
      {filtredTodos.map((t) => {
        return <Todo todo={t} key={t.id} />;
      })}
    </div>
  );
};

export default TodoList;
