import Image from "next/image";
import Link from "next/link";

import styles from "../styles/PizzaCard.module.css";
import { priceToString } from "../common/utill/common";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      {/* passHref는 next Link에서 하위 컴포넌트로 href 속성을 전달해주는 역할 */}
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>

      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{priceToString(pizza.prices[0])}원</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
