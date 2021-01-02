import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className={utilStyles.headingXl}>Contact</h1>
        <Link href="https://twitter.com/amaancodes"> Twitter </Link> /{" "}
        <Link href="https://www.linkedin.com/in/amaan05/"> LinkedIn </Link> /
        <Link href="mailto:amaan_ahmad_@outlook.com"> Email:</Link>
        {"  "}
        amaan_ahmad_@outlook.com
      </section>
    </Layout>
  );
}
