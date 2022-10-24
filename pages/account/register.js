import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import Logo from "../../public/assets/logo.svg";
import styles from "../../styles/Login-Register.module.css";

import { UserContext } from "../../context/user.context";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { emailPasswordSignup } = useContext(UserContext);
  const router = useRouter();

  const onSubmit = async (e) => {
    if (password !== passwordConfirm) {
      // Add toast error here
      return;
    }

    try {
      console.log("try");
      const user = await emailPasswordSignup(email, password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  const redirectNow = () => {
    router.push("/");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Logo />

        <form onSubmit={onSubmit}>
          <h1>Sign up</h1>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          <input type="submit" value="Register" />
        </form>
        <p>
          Have an account already? <Link href="/account/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
}
