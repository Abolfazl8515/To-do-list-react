import { FaPlus } from "react-icons/fa";
import styles from "./navBar.module.css";
import { useState } from "react";
import { useTodosActions } from "../../AppProvider";

const NavBar = ({ setIsShow }) => {
  const dispatch = useTodosActions();
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "search", search: value });
  };
  return (
    <header className={styles.navBar}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Todos..."
          className={styles.search}
          value={value}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.title}>
        <h1>To Do List App</h1>
      </div>
      <div className={styles.addBtnBox}>
        <button
          type="button"
          className={styles.addBtn}
          onClick={() => setIsShow(true)}
        >
          <FaPlus /> <span>Create</span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
