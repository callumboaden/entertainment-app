import Image from "next/future/image";
import Logo from "../public/assets/logo.svg";
import profilePic from "../public/assets/image-avatar.png";
import IconLink from "../components/IconLink";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <IconLink name="home" href="/" />
          </li>
          <li>
            <IconLink name="movies" href="/movies" />
          </li>
          <li>
            <IconLink name="tv-series" href="/tv-series" />
          </li>
          <li>
            <IconLink name="bookmarked" href="/bookmarked" />
          </li>
        </ul>
      </nav>
      <Image
        className={styles.profilePic}
        src={profilePic}
        width="33"
        height="33"
        alt="Profile picture"
      />
    </div>
  );
}
