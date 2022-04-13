import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null); //피자 이미지
  const [title, setTitle] = useState(null); //피자 이름
  const [desc, setDesc] = useState(null); //피자 설명
  const [prices, setPrices] = useState([]); //피자 가격
  const [extra, setExtra] = useState(null); //피자 옵션 인풋
  const [extraOptions, setExtraOptions] = useState([]); //add 한 피자 옵션 이름, 가격

  const changePrice = (e, idx) => {
    const currentPrices = prices;
    currentPrices[idx] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  //새로운 피자 등록
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dql6wigdn/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = { title, desc, prices, img: url, extraOptions };
      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>피자 상품 올리기</h1>
        <div className={styles.item}>
          <label className={styles.label}>이미지 선택</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>이름</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>설명</label>
          <textarea
            className={styles.input}
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>가격</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>옵션</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input}${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={(e) => handleExtraInput(e)}
            />
            <input
              className={`${styles.input}${styles.inputSm}`}
              type="number"
              placeholder="price"
              name="price"
              onChange={(e) => handleExtraInput(e)}
            />

            <button className={styles.extraButton} onClick={handleExtra}>
              추가
            </button>
          </div>

          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>

          <button className={styles.addButton} onClick={handleCreate}>
            피자 추가
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add;
