import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

import styles from "../../styles/Login.module.css";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      res.status === 200 && router.push("/admin");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>
        {error && <span className={styles.error}>wrong credentials</span>}
      </div>
    </div>
  );
};

export default Login;
