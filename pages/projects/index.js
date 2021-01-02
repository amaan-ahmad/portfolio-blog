import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <h2 className={utilStyles.headingLg}> Projects</h2>
      </Layout>
    </>
  );
}
