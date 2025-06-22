/*---

For font-optimization we can use font feature of next js

step1: import  { Roboto } from "next/font/google";
in the component where you want to use that font

step2: create a variable with font name and pass weight, subsets, display etc properties
const roboto = Roboto({ weight: "100", subsets: ["latin"], display: "swap" });

step3: 
use className={roboto.className} on any text tag

Example :

"use client";
import { Roboto } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "../assets/homepage.webp";
import Image from "next/image";

const roboto = Roboto({ weight: "100", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <h2 className={roboto.className}>Font with next js font feature</h2>

        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <Image
            src={HomePage}
            alt="homepage"
            fill
            style={{ objectFit: "cover", margin: "0 auto" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Image
            src="https://images.ctfassets.net/q95r71b1uue1/CZM8YFlF9RPBFqn4IW1km/1b490ec8796f11dc4491fdc81fadcccd/Vercel_OG_Image.png"
            width={200}
            height={200}
            alt="Vercel"
          />
        </div>
      </div>
    </main>
  );
}


---*/
