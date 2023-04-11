import styles from "./SelectFilter.module.css";

const SelectFilter = () => {
  return (
    <div className={styles.selectFilter}>
      <select>
        <option value="All">All</option>
        <option value="Oldest">Oldest</option>
        <option value="lastUpdate">Last Update</option>
      </select>
    </div>
  );
};

export default SelectFilter;
