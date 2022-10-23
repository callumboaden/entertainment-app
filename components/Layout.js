import Head from "next/head";
import Navbar from "./Navbar";
import Search from "./Search";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";

export default function Layout({
  title,
  description,
  children,
  handleSearch,
  query,
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {!router.pathname.includes("/account") ? (
        <div className={styles.container}>
          <Navbar />
          <div className={styles.main}>
            <Search
              handleSearch={handleSearch}
              query={query}
              placeholder={description}
            />
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.container}>{children}</div>
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "Entertainment App",
  description: "Search for movies or TV series",
};
