import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard(props) {
  return (
    <div className={styles.container}>
      <Image src="/image/pizza.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>쉬림프 골드</h1>
      <span className={styles.price}>29,000원</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        aspernatur blanditiis at cum, saepe illo laudantium ab optio
        exercitationem similique quam porro minima rerum veniam aperiam officia!
        Velit, nulla alias.
      </p>
    </div>
  );
}

export default PizzaCard;
