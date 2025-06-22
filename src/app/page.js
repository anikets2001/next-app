"use client";
import styles from "./page.module.css";
import HomePage from '../assets/homepage.webp'
import Image from "next/image";

export default function Home() {
  return <main className={styles.main}>
    <div>
      <h1>Home Page</h1>
      <div>
      <Image src={HomePage} alt="homepage" width={'100%'} height={500} style={{margin: '0 auto'}}/>
      </div>
      <div>
        <Image src={'https://images.ctfassets.net/q95r71b1uue1/CZM8YFlF9RPBFqn4IW1km/1b490ec8796f11dc4491fdc81fadcccd/Vercel_OG_Image.png'} width={200} height={200}/>
      </div>
    </div>
  </main>;
}
