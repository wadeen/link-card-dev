import LinkCard from "@/components/LinkCard";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mt}>
          <LinkCard
            url={"https://wadeen.net"}
            target={"_blank"}
            style={{
              maxWidth: "500px",
              // background: "tomato",
              marginInline: "auto",
            }}
          />
        </div>
        <div className={styles.mt}>
          <LinkCard
            url={"https://zenn.dev"}
            target={"_blank"}
          />
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
