"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // redirect to the login page
  router.push("/login");
  return <main className={styles.main}></main>;
}
