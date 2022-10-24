import Layout from "../../components/Layout";
import Logo from "../../public/assets/logo.svg";

export default function RegisterPage() {
  return (
    <Layout>
      <div>
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
