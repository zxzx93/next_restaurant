import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const image = ["/image/Featured.jpeg", "/image/pizza.png"];

  const handleArrow = (dir) => {
    if (dir === "l") {
      setIndex(index !== 0 ? index - 1 : 1);
    }
    if (dir === "r") {
      setIndex(index !== 1 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/image/arrowl.png" alt="" layout="fill" />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {image.map((img, i) => (
          <div className={styles.imageContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="fill" />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/image/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
