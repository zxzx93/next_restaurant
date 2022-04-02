import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프리미엄 피자</h1>
      <p className={styles.desc}>
        천연발효종을 넣은 생도우에 프리미엄 토핑을 얹어 특별하게 즐기는 피자
      </p>

      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
