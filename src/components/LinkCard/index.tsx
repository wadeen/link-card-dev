import Link from "next/link";
import styles from "./index.module.scss";

type LinkCardProps = {
  url: string;
  title: string;
  text: string;
  link: string;
  img: string;
  imgAlt?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const LinkCard: React.FC<{ data: LinkCardProps }> = ({ data }) => {
  const { title, text, link, img, imgAlt, target } = data;

  return (
    <Link href={link} className={styles.container} target={target}>
      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <figure className={styles.figure}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.imgStyle} src={img} width={150} height={150} alt={imgAlt || ""} />
      </figure>
    </Link>
  );
};

export default LinkCard;
