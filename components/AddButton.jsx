import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.container} onClick={() => setClose(false)}>
      add new pizza
    </div>
  );
};

export default AddButton;
