import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

import styles from "../../styles/Order.module.css";
import { priceToString } from "../../common/utill/common";

const Order = ({ order }) => {
  const router = useRouter();

  const { id } = router.query;
  const status = order.status;

  const statusClass = (idx) => {
    if (idx - status < 1) return styles.done;
    if (idx - status === 1) return styles.inProgress;
    if (idx - status > 1) return styles.undone;
  };

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
              <span className={styles.id}>{order._id}</span>
            </td>
            <td>
              <span className={styles.name}>{order.customer}</span>
            </td>
            <td>
              <span className={styles.Address}>{order.address}</span>
            </td>
            <td>
              <span className={styles.total}>
                {priceToString(order.total)}원
              </span>
            </td>
          </tr>
        </table>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/image/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/image/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/image/cooking.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/image/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/image/bike.png" alt="" width={30} height={30} />
            <span>on the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/image/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/image/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/image/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal : </b>
            {order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount : </b>
            {order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total : </b>
            {order.total}
          </div>

          <button className={styles.button} disabled>
            paid
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
