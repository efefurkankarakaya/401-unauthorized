import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Status:&nbsp;
          <code className={styles.code}>401 Unauthorized</code>
        </p>
      </div>
    </main>
  );
}
