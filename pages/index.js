import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I develop web apps!💻🥤 <br />
          <span
            className={utilStyles.headingSm}
            style={{ fontStyle: "italic", fontWeight: "200" }}
          >
            Web Dev Head @ Google DSC-BPIT <br /> Jr. Council Web-Dev @
            IOSD-BPIT
          </span>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Featured Projects ⭐</h2>
        <ul className={utilStyles.list}>
          {console.log(allPostsData)}
          {allPostsData.map(({ id, date, title, thumbnail }) =>
            id == "[id].js" ? null : (
              <li className={utilStyles.listItem} key={id}>
                <div className={utilStyles.post}>
                  <img src={thumbnail} />
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </div>
                <br />
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
