import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import Logo from "../../public/assets/logo.svg";
import styles from "../../styles/Login-Register.module.css";

import { UserContext } from "../../context/user.context";

export default function LoginPage() {
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectNow = () => {
    router.push("/");
  };

  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        redirectNow();
      }
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    try {
      const user = await emailPasswordLogin(email, password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert("Invalid username/password. Try again!");
      } else {
        alert(error);
      }
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Logo />

        <form onSubmit={onSubmit}>
          <h1>Login</h1>
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
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an account? <Link href="/account/register">Register</Link>
        </p>
      </div>
    </Layout>
  );
}
