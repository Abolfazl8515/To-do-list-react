import { useState } from "react";
import { useTodosActions } from "../../AppProvider";
import styles from "./todoForm.module.css";
import SelectFilter from "../SelectFilter/SelectFilter";

const TodoForm = ({ isShowAdd, setIsShowAdd }) => {
  const [value, setValue] = useState("");
  const dispatch = useTodosActions();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add", title: value });
    if (value) {
      setIsShowAdd(false);
    }
    setValue("");
  };
  return (
    <>
      <div
        className={isShowAdd ? `${styles.backDrop}` : `${styles.hidden}`}
        onClick={() => setIsShowAdd(false)}
      ></div>
      <div className={isShowAdd ? `${styles.todoForm}` : `${styles.hidden}`}>
        <div className={styles.todoFormContent}>
          <form onSubmit={addTodoHandler}>
            <div className={styles.titleModal}>
              <h2>Add Todo</h2>
            </div>
            <div className={styles.todoInfo}>
              <label>Title</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className={styles.todoInfo}>
              <label>Description</label>
              <input type="text" />
            </div>
            <div className={styles.btns}>
              <button type="submit" className={styles.add}>
                Add
              </button>
              <button
                type="button"
                className={styles.cancel}
                onClick={() => setIsShowAdd(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
