import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

import Logo from "../../public/assets/logo.svg";

import styles from "../../styles/Login-Register.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout>
      <div className={styles.container}>
        <Logo />

        <form>
          <h1>Login</h1>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
        </form>
      </div>
    </Layout>
  );
}
