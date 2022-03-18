import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { priceToString } from "../../common/utill/common";

function Product(props) {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/image/pizza.png",
    name: "쉬림프 골드",
    price: [19000, 29000, 39000],
    desc: "쉬림프골드와 포테이토골드의 황금콜라보",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <p className={styles.desc}> {pizza.desc}</p>

        {/* <h3 className={styles.p_title}>가격</h3>
        <span className={styles.price}>
          {priceToString(pizza.price[size])}원
        </span> */}

        <h3 className={styles.p_title}>사이즈</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.p_title}>주문금액</h3>
        <span className={styles.price}>
          {priceToString(pizza.price[size])}원
        </span>

        <h3 className={styles.chooose}>옵션 추가</h3>
        <div className={styles.ingredient}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">double ingredient</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">cheese sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Extra cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="galic"
              name="galic"
              className={styles.checkbox}
            />
            <label htmlFor="galic">galic sauce</label>
          </div>
        </div>

          <div className={styles.add}>
            <input type="number" className={styles.quantity} defaultValue={1} />
            <button className={styles.button}>장바구니</button>
          </div>
      </div>
    </div>
  );
}

export default Product;
