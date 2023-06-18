import Link from "next/link";
import styles from "./index.module.scss";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

type LinkCardProps = {
  url: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  style?: React.CSSProperties;
};

const LinkCard: React.FC<LinkCardProps> = ({ url, target, style }) => {
  const [fetchData, setFetchData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(encodeURI(process.env.NEXT_PUBLIC_BASE_URL + url));
        const data = await res.json();
        setFetchData(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url]);

  if (!fetchData) {
    return <div>Loading...</div>;
  }

  return (
    <a href={url} className={styles.container} target={target} style={style}>
      <div className={styles.textArea}>
        <p className={styles.title}>{fetchData.title}</p>
        <p className={styles.text}>{fetchData.description}</p>
      </div>
      <figure className={styles.figure}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.imgStyle} src={fetchData.ogp} alt={fetchData.title || ""} />
      </figure>
    </a>
  );
};

export default LinkCard;

// type LinkCardProps = {
//   url: string;
//   title: string;
//   text: string;
//   link: string;
//   img: string;
//   imgAlt?: string;
//   target?: "_blank" | "_self" | "_parent" | "_top";
// };
