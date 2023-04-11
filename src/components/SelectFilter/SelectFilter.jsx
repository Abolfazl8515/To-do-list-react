import { useTodosActions } from "../../AppProvider";
import styles from "./SelectFilter.module.css";

const SelectFilter = () => {
  const dispatch = useTodosActions();
  const changeHandler = (e) => {
    dispatch({ type: "sort", e });
  };
  return (
    <div className={styles.selectFilter}>
      <select onChange={changeHandler}>
        <option value="Oldest">Oldest</option>
        <option value="lastUpdate">Last Update</option>
      </select>
    </div>
  );
};

export default SelectFilter;
