import styles from "./todoForm.module.css";

const TodoForm = () => {
  return (
    <div className={styles.todoForm}>
      <form>
        <div className={styles.box}>
          <input type="text" placeholder="Add your todo ..." />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
