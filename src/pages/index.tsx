import LinkCard from "@/components/LinkCard";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mt}>
          <LinkCard />
        </div>
        <div className={styles.mt}>
          <LinkCard />
        </div>
        <div className={styles.mt}>
          <LinkCard />
        </div>
      </div>
    </>
  );
}
