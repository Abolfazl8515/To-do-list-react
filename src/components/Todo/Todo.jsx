import styles from "./todo.module.css";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.title}>
        <h4>Todo</h4>
      </div>
      <div className={styles.btnBox}>
        <div className={styles.createdAt}>4/10/2023</div>
        <button type="button">C</button>
        <button type="button">E</button>
        <button type="button">D</button>
      </div>
    </div>
  );
};

export default Todo;
