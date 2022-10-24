import Layout from "../../components/Layout";

export default function RegisterPage() {
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
