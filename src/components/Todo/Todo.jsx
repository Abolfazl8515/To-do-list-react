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
        setStatus={setStatus}
        value={value}
        setValue={setValue}
        onSubmit={editHandler}
      />
      <div className={styles.info}>
        <h4>{todo.title}</h4>
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
      <div className={styles.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis
        minima. Impedit quas, non quos sint ducimus labore. Alias amet dolore
        voluptatem tenetur a aut magni. Sapiente aut corrupti deserunt?
      </div>
      <div className={styles.date}>
        <div className={styles.createdAt}>Created at:{todo.createdAt}</div>
        <div className={styles.lastUpdate}>Last Update:{todo.lastUpdate}</div>
      </div>
    </div>
  );
};

export default Todo;
