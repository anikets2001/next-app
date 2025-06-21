"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    console.log("next js running");
  };

  return (
    <main className={styles.main}>
      <h1>Events, functions and state</h1>
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
