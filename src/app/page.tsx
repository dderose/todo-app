import Link from "next/link";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.heroContainer}>
        <h1>Apps for you!</h1>

        <ul>
          <li><Link href="/todos">Awesome Todo App!</Link></li>
        </ul>
      </div>
    </main>
  );
}
