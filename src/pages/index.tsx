import LinkCard from "@/components/LinkCard";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mt}>
          <LinkCard data={data} />
        </div>
        <div className={styles.mt}>
          <LinkCard data={data} />
        </div>
        <div className={styles.mt}>
          <LinkCard data={data} />
        </div>
      </div>
    </>
  );
}

const data = {
  url: "https://via.placeholder.com/150x150",
  title: "タイトルが入ります",
  text: "テキス",
  link: "/",
  img: "https://via.placeholder.com/150x150",
};
