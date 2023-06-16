import Link from "next/link";
import styles from "./index.module.scss";

const LinkCard = () => {
  return (
    <Link href="/" className={styles.container}>
      <div className={styles.textArea}>
        <p className={styles.title}>タイトルが入ります</p>
        <p className={styles.text}>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      </div>
      <figure className={styles.figure}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.imgStyle} src="https://via.placeholder.com/150x150" width={150} height={150} alt="" />
      </figure>
    </Link>
  );
};

export default LinkCard;
