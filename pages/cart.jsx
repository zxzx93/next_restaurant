import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { priceToString } from "../common/utill/common";
import styles from "../styles/Cart.module.css";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      res.status === 200 && router.push(`/orders/${res.data._id}`);
      //카트 수량 리셋
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>상품</th>
              <th>이름</th>
              <th>옵션</th>
              <th>가격</th>
              <th>수량</th>
              <th>전체금액</th>
            </tr>
          </tbody>

          <tbody>
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
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>선택금액 : </b>
            {priceToString(cart.total)}원
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>할인 : </b>
            {priceToString(cart.total)}원
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>전체금액 : </b>
            {priceToString(cart.total)}원
          </div>

          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                현금 주문
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "Ada2wBOvDRX5itWPQ5kDfsoC-0p-k1pa3fQq4DqAPTE11kKfyWWWvBXXviSBVto0lCBspHYwsnsM-wq1",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "card",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button className={styles.button} onClick={() => setOpen(true)}>
              Checkout now!
            </button>
          )}
        </div>
      </div>

      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
