import Link from "next/link";
import React from "react";
import styles from "../styles/Layout.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { session, status } = useSession();
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
        {!session && status && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                SignIn
              </a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                SignOut
              </a>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Header;
