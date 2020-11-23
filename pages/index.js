import Head from "next/head";
// import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  const twitterHandle = `https://twitter.com/amaancodes`;
  // const instaHandle = `https://instagram.com/amaan.codes`;
  const email = `mailto:amaan_ahmad_@outlook.com`;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I develop web apps!💻🥤 <br />
          <span className={utilStyles.headingSm}>
            Web Dev Head @ Google DSC-BPIT
          </span>
        </p>
        <p>
          Connect with me on: <a href={twitterHandle}>Twitter</a>,{" "}
          <a href={email}>E-mail 📧</a>
          <br />
          Software Engineer in making ⏳
        </p>
      </section>
      <hr />
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {console.log(allPostsData)}
          {allPostsData.map(({ id, date, title }) =>
            id == "[id].js" ? null : (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            )
          )}
        </ul>
      </section> */}
    </Layout>
  );
}
