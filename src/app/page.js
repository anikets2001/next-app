"use client";
import { Roboto } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";

const roboto = Roboto({ weight: "100", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <h2 className={roboto.className}>Font with next js font feature</h2>

        {/* Local Image - Responsive */}
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <Image
            src={'/assets/images/homepage.webp'}
            alt="homepage"
            fill
            style={{ objectFit: "cover", margin: "0 auto" }}
          />
        </div>

        {/* External Image */}
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
