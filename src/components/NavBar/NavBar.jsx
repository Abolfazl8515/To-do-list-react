import { FaPlus } from "react-icons/fa";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Todos..."
          className={styles.search}
        />
      </div>
      <div className={styles.title}>
        <h1>To Do List App</h1>
      </div>
      <div className={styles.addBtnBox}>
        <button type="button" className={styles.addBtn}>
          <FaPlus /> <span>Create</span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
