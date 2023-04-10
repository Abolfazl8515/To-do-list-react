import styles from "./todo.module.css";

const Todo = ({ todo }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h4>{todo.title}</h4>
        </div>
        <div className={styles.btnBox}>
          <button type="button">C</button>
          <button type="button">E</button>
          <button type="button">D</button>
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
