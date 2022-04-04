import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";

import styles from "../../styles/Product.module.css";
import { priceToString } from "../../common/utill/common";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]); //피자가격
  const [size, setSize] = useState(0); //피자 사이즈 인덱스
  const [extras, setExtras] = useState([]); //피자 옵션
  const [quantity, setQuantity] = useState(1); //피자 주문 수량

  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handelClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <p className={styles.desc}> {pizza.desc}</p>

        {/* <h3 className={styles.p_title}>가격</h3>
        <span className={styles.price}>
          {priceToString(pizza.price[size])}원
        </span> */}

        <h3 className={styles.p_title}>사이즈</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/image/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.p_title}>주문금액</h3>
        <span className={styles.price}>{priceToString(price)}원</span>

        <h3 className={styles.chooose}>옵션 추가</h3>
        <div className={styles.ingredient}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}

          {/* <div className={styles.option}>
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
          </div> */}
        </div>

        <div className={styles.add}>
          <input
            type="number"
            className={styles.quantity}
            defaultValue={1}
            vlaue={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button className={styles.button} onClick={handelClick}>
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return { props: { pizza: res.data } };
};
