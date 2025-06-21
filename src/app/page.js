"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("next js running");
  };

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <main className={styles.main}>
      <h1>Events, functions and state</h1>
      <button onClick={handleClick}>Click me</button>
      <Link href="/login">Go to Login Page</Link>

      {/* to navigate with button import useRouter hook */}
      <button onClick={() => handleNavigation("/login")}>Go to Login Page</button>
      <button onClick={() => handleNavigation("/about")}>Go to About Page</button>

    </main>
  );
}
