import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.line_area}>
        <ul className={styles.link_list}>
          <li>개인정보취급방침</li>
          <li>이용약관</li>
          <li>고객만족센터</li>
          <li>단체주문</li>
        </ul>
      </div>

      <div className={styles.inner_renew}>
        <div className={styles.info_wrap}>
          <p className={styles.copy}>
            서울시 서초구  대표이사:홍길동 개인정보 관리책임자:홍길동
            통신판매업:2009-서울서초 사업자등록번호 1234-5678-9999
            <p className={styles.copy}>
              Copyright &copy; MP DAESAN. All rights reserved.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
