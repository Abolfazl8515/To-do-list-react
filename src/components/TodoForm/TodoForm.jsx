import { useState } from "react";
import { useTodosActions } from "../../AppProvider";
import styles from "./todoForm.module.css";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useTodosActions();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add", title: value });
  };
  return (
    <div className={styles.todoForm}>
      <form onSubmit={addTodoHandler}>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Add your todo ..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
