import styles from "../styles/Home.module.scss";
import { LinkCard, LinkCardLarge } from "@/components/LinkCard";
import useFetchLinkData, { FetchLinkUrlType } from "@/hooks/useFetchLinkData";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ textAlign: "center" }}>Demo page</h1>
      <div className={styles.container}>
        {/* サンプルの利用（標準・横並び） */}
        <h2 style={{ textAlign: "center" }}>サンプルの利用（標準・横並び）</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          <LinkCard url={"https://wadeen.net"} titleTagName="h3" />
          <LinkCard url={"https://dev.to/ronanru/stop-using-expressjs-in-202-3kc"} titleTagName="h3" />
          <p>左寄せ</p>
          <LinkCard url={"https://zenn.dev/wadeen"} position="left" />
          <LinkCard url={"https://zenn.dev/chot/articles/ddd2844ad3ae61"} />
          <LinkCard url={"https://obake.land/blog/20230216"} target="_blank" />
          エラー発生させる。
          <LinkCard url={"https://wadeen"} />
        </div>

        {/* サンプルの利用（大・縦並び） */}
        <h2 style={{ textAlign: "center" }}>サンプルの利用（大・縦並び）</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <LinkCardLarge url={"https://wadeen.net"} titleTagName="h3" />
          <LinkCardLarge url={"https://dev.to/ronanru/stop-using-expressjs-in-202-3kc"} titleTagName="h3" />
          <LinkCardLarge url={"https://zenn.dev/wadeen"} />
          <p>左寄せ</p>
          <LinkCardLarge url={"https://zenn.dev/chot/articles/ddd2844ad3ae61"} position="left" />
          <LinkCardLarge url={"https://obake.land/blog/20230216"} target="_blank" />
          エラー発生させる。
          <LinkCardLarge url={"https://wadeen"} />
        </div>
        {/* カスタムフックの利用 */}

        <h2 style={{ textAlign: "center" }}>カスタムフックの利用</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          <CardItem url={"https://wadeen.net"} />
          <p>左寄せ</p>
          <CardItem url={"https://zenn.dev/wadeen"} />
          <CardItem url={"https://zenn.dev/chot/articles/ddd2844ad3ae61"} />
          <CardItem url={"https://obake.land/blog/20230216"} />
          エラー発生させる。
          <CardItem url={"https://wadeen"} />
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* カスタムフックの利用 */
}

const CardItem = ({ url }: FetchLinkUrlType) => {
  const { loading, error, data: linkCardData } = useFetchLinkData(url);

  if (error) return <p>ERROR!</p>;
  if (loading) return <p>loading...</p>;

  return (
    <a href={url} target="_blank" className={styles.baseContainer}>
      <div className={styles.baseTextArea}>
        <div className={styles.baseTitleArea}>{linkCardData?.title && <h3 className={styles.baseTitle}>{linkCardData?.title}</h3>}</div>
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
