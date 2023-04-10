import styles from "./todo.module.css";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h4>Todo</h4>
        </div>
        <div className={styles.btnBox}>
          <button type="button">C</button>
          <button type="button">E</button>
          <button type="button">D</button>
        </div>
      </div>
      <div className={styles.date}>
        <div className={styles.createdAt}>Created at:4/10/2023</div>
        <div className={styles.createdAt}>Last Update:4/11/2023</div>
      </div>
    </div>
  );
};

export default Todo;
