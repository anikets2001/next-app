import Image from "next/image";
import styles from "./page.module.css";

export const User=({name})=> {
  return (
    <div><p>User is: {name}</p></div>
  )
}

export default function Home() {
  return <main className={styles.main}>
    <h1>Hello</h1>
    <User name={'Aniket'}/>
    <User name={'Nikhil'}/>
    <User name={'Abhay'}/>
  </main>;
}
