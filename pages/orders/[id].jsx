import Image from "next/image";
import styles from "../../styles/Order.module.css";
import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();
  const { id } = router.query;

  const status = 0;
  const statusClass = (idx)=>{
    if(idx-status < 1) return styles.done;
    if(idx-status === 1) return styles.inProgress;
    if(idx-status > 1) return styles.undone;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>

          <tr className={styles.tr}> 
            <td>
              <span className={styles.id}>123456789</span>
            </td>
            <td>
              <span className={styles.name}>vicky</span>
            </td>
            <td>
              <span className={styles.Address}>서울시 관악구</span>
            </td>
            <td>
              <span className={styles.total}>29000원</span>
            </td>
          </tr>
        </table>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/image/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/image/cooking.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
          <Image src="/image/bike.png" alt="" width={30} height={30} />
            <span>on the way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
          <Image src="/image/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal : </b>$79.09
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount : </b>$79.09
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total : </b>$79.09
          </div>

          <button className={styles.button} disabled>
            paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
