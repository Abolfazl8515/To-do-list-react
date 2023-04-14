import { useRef, useState } from "react";
import { useTodosActions } from "../../AppProvider";
import styles from "./todo.module.css";
import UpdateValueModal from "../UpdateValueModal/UpdateValueModal";
import {
  FaTrashAlt,
  FaEdit,
  FaCheck,
  FaArrowLeft,
  FaEllipsisV,
} from "react-icons/fa";

const Todo = ({ todo }) => {
  const [showBtns, setShowBtns] = useState(false);
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(todo.title);
  const [descValue, setDescValue] = useState(todo.desc);
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
    dispatch({
      type: "edit",
      id: El.current.id,
      newTitle: value,
      newDesc: descValue,
    });
    setStatus(false);
  };
  return (
    <div
      className={`${styles.todoBox} ${
        todo.isCompleted && `${styles.completedTodo}`
      }`}
      id={todo.id}
      ref={El}
    >
      <UpdateValueModal
        status={status}
        setStatus={setStatus}
        value={value}
        setValue={setValue}
        onSubmit={editHandler}
        descValue={descValue}
        setDescValue={setDescValue}
      />
      <div className={styles.info}>
        <h4
          className={`${styles.title} ${todo.isCompleted && styles.completed}`}
        >
          {todo.title}
        </h4>
        <h2 className={!todo.isCompleted && styles.hidden}>Completed !</h2>
        <button
          type="button"
          className={styles.showBtns}
          onClick={() => setShowBtns((prevState) => !prevState)}
        >
          <FaEllipsisV />
        </button>
        <div className={showBtns ? `${styles.btnBox}` : `${styles.hidden}`}>
          <button
            type="button"
            className={`${!todo.isCompleted && styles.checkComplete}`}
            onClick={completedHandler}
          >
            {todo.isCompleted ? <FaArrowLeft /> : <FaCheck />}
          </button>
          <button
            type="button"
            className={styles.edit}
            onClick={showModalHandler}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className={styles.delete}
            onClick={deleteHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div
        className={`${styles.description} ${
          todo.isCompleted && styles.completed
        }`}
      >
        {todo.desc ? todo.desc : "No description"}
      </div>
      <div className={styles.date}>
        <div className={styles.createdAt}>Created at:{todo.createdAt}</div>
        <div className={styles.lastUpdate}>Last Update:{todo.lastUpdate}</div>
      </div>
    </div>
  );
};

export default Todo;
