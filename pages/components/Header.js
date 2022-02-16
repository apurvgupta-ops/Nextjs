import Link from "next/link";
import React from "react";
import styles from "../styles/Layout.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.main}>Next Auth</div>
      <ul className={styles.content}>
        <li>
          <Link href="/blog">
            <a className={styles.content}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a>SignIn</a>
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <a>SignOut</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
