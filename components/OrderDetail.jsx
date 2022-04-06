import { useState } from "react";

import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>배달 주문서 <div>금액 : 12원</div>
        </h1>
       
        <div className={styles.item}>
          <label className={styles.label}>주문자</label>
          <input
            placeholder={"홍길동"}
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>전화번호</label>
          <input
            placeholder={"010-1223-4567"}
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>주소</label>
          <textarea
            rows={5}
            placeholder={"경기도 성남시 분당구 판교역로 235 에이치스퀘어"}
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className={styles.button} onClick={handleClick}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
