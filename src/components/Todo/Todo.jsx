import { useRef, useState } from "react";
import { useTodosActions } from "../../AppProvider";
import styles from "./todo.module.css";
import UpdateValueModal from "../UpdateValueModal/UpdateValueModal";
import { FaTrashAlt, FaEdit, FaCheck, FaArrowLeft } from "react-icons/fa";

const Todo = ({ todo }) => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(todo.title);
  const El = useRef();
  const dispatch = useTodosActions();
  const deleteHandler = () => {
    dispatch({ type: "delete", id: El.current.id });
  };
  const completedHandler = () => {
    dispatch({ type: "completed", id: El.current.id });
  };
  const showModalHandler = () => {
    setStatus(true);
  };
  const editHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "edit", id: El.current.id, newTitle: value });
    setStatus(false);
  };
  return (
    <div className={styles.todo} id={todo.id} ref={El}>
      <UpdateValueModal
        status={status}
        value={value}
        setValue={setValue}
        onSubmit={editHandler}
      />
      <div className={styles.info}>
        <div
          className={`${todo.isCompleted && styles.completeTitle} ${
            !todo.isCompleted && styles.title
          }`}
        >
          <h4>{todo.title}</h4>
        </div>
        <div className={styles.btnBox}>
          <button
            type="button"
            className={`${styles.btn} ${
              !todo.isCompleted && styles.checkComplete
            }`}
            onClick={completedHandler}
          >
            {todo.isCompleted ? <FaArrowLeft /> : <FaCheck />}
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.edit}`}
            onClick={showModalHandler}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.delete}`}
            onClick={deleteHandler}
          >
            <FaTrashAlt />
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
