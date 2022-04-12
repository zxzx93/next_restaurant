import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.container} onClick={() => setClose(false)}>
      <div className={styles.mainAddButton}>add new pizza</div>
    </div>
  );
};

export default AddButton;
