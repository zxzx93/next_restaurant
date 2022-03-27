import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>product</th>
            <th>name</th>
            <th>extras</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/image/pizza.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>coraljo</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>29000원</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>29000원</span>
            </td>
          </tr>
          
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/image/pizza.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>coraljo</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>29000원</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>29000원</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal : </b>$79.09f
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount : </b>$79.09f
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total : </b>$79.09f
          </div>

          <button className={styles.button}>Checkout now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
