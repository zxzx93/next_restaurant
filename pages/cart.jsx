import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { priceToString } from "../common/utill/common";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>상품</th>
            <th>이름</th>
            <th>옵션</th>
            <th>가격</th>
            <th>수량</th>
            <th>전체금액</th>
          </tr>

          {cart.products.map((product) => (
            <>
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>
                    {priceToString(product.price)}원
                  </span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {priceToString(product.price * product.quantity)}원
                  </span>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>선택금액 : </b>{priceToString(cart.total)}원
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>할인 : </b>{priceToString(cart.total)}원
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>전체금액 : </b>{priceToString(cart.total)}원
          </div>

          <button className={styles.button}>Checkout now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
