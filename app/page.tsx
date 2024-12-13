"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Link href="/designer">Designer</Link>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
