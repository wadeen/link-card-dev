import { AnchorHTMLAttributes } from "react";
import useFetchLinkData, { FetchLinkUrlType } from "../../hooks/useFetchLinkData";
import styles from "./index.module.scss";

type LinkCardProps = {
  /** Target attribute specifies where to open the linked document. */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  /** Tag name to use for the title. */
  titleTagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /** Position of the link card. */
  position?: "center" | "left" | "right";
} & FetchLinkUrlType;

export const LinkCard = ({ url, target = "_blank", titleTagName = "p", position = "center" }: LinkCardProps) => {
  /** Call hook to fetch data from provided URL. */
  const { loading, error, data: linkCardData } = useFetchLinkData(url);

  if (error) {
    return <ErrorLink url={url} target={target} />;
  }

  if (loading)
    return (
      <div className={styles.baseContainer} data-position={position}>
        <div
          className={styles.baseTextArea}
          style={{
            display: "block",
            backgroundColor: "#fff",
          }}
        />
        <div
          className={styles.baseImg}
          style={{
            display: "block",
            backgroundColor: "#ccc",
            width: "160px",
          }}
        />
      </div>
    );

  const Tag = titleTagName;

  return (
    <a href={url} target={target} className={styles.baseContainer} data-position={position}>
      <div className={styles.baseTextArea}>
        <div className={styles.baseTitleArea}>{linkCardData?.title && <Tag className={styles.baseTitle}>{linkCardData?.title}</Tag>}</div>
        {linkCardData?.description && (
          <div className={styles.baseDescArea}>
            {linkCardData?.favicon && <img src={linkCardData?.favicon} alt="" width={24} height={24} />}
            <p className={styles.baseText}>{linkCardData?.description}</p>
          </div>
        )}
      </div>
      {linkCardData?.ogp && <img src={linkCardData?.ogp} alt="" className={styles.baseImg} />}
    </a>
  );
};

export const LinkCardLarge = ({ url, target = "_blank", titleTagName = "p", position = "center" }: LinkCardProps) => {
  /** Call hook to fetch data from provided URL. */
  const { loading, error, data: linkCardData } = useFetchLinkData(url);

  if (error) {
    return <ErrorLink url={url} target={target} />;
  }
  if (loading)
    return (
      <div className={styles.largeContainer} data-position={position}>
        <div
          className={styles.largeImg}
          style={{
            display: "block",
            backgroundColor: "#ccc",
            height: "250px",
          }}
        />
        <div
          className={styles.largeImg}
          style={{
            display: "block",
            backgroundColor: "#fff",
            height: "150px",
          }}
        />
      </div>
    );

  const Tag = titleTagName;

  return (
    <a href={url} target={target} className={styles.largeContainer} data-position={position}>
      {linkCardData?.ogp && <img src={linkCardData?.ogp} alt="" className={styles.largeImg} />}
      <div className={styles.largeTextArea}>
        {linkCardData?.title && <Tag className={styles.largeTitle}>{linkCardData?.title}</Tag>}
        {linkCardData?.description && <p className={styles.largeText}>{linkCardData?.description}</p>}
      </div>
    </a>
  );
};

/** A component to handle and display error links. */
const ErrorLink = ({ url, target }: Omit<LinkCardProps, "titleTagName">) => (
  <a
    href={url}
    target={target}
    className="_link-card-error"
    style={{
      textAlign: "center",
    }}
  >
    {url}
  </a>
);
