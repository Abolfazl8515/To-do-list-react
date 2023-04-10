import { useRef } from "react";
import { useTodosActions } from "../../AppProvider";
import styles from "./todo.module.css";

const Todo = ({ todo }) => {
  const El = useRef();
  const dispatch = useTodosActions();
  const deleteHandler = () => {
    dispatch({ type: "delete", id: El.current.id });
  };
  return (
    <div className={styles.todo} id={todo.id} ref={El}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h4>{todo.title}</h4>
        </div>
        <div className={styles.btnBox}>
          <button type="button">C</button>
          <button type="button">E</button>
          <button type="button" onClick={deleteHandler}>
            D
          </button>
        </div>
      </div>
      <div className={styles.date}>
        <div className={styles.createdAt}>Created at:{todo.createdAt}</div>
        <div className={styles.createdAt}>Last Update:{todo.lastUpdate}</div>
      </div>
    </div>
  );
};

export default Todo;
