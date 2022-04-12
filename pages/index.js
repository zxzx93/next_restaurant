import Head from "next/head";
import axios from "axios";
import { useState } from "react";

import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import AddButton from "../components/AddButton";
import Add from "../components/Add";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose}/>}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`http://localhost:3000/api/products`);
  return {
    props: { pizzaList: res.data , admin},
  };
};
