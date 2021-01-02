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
        <h1 className={utilStyles.headingXl}>About</h1>
        <p>
          Hey, I am a <strong>Full stack web developer</strong> capable of
          developing fast, scalable and beautiful web applicaitions.
        </p>
        <p>
          Technologies I know: <br />
          <strong>
            ReactJS, Express, Node.js, MongoDB, Javascript, C++, Java
          </strong>
        </p>
        <p>I often talk and teach about web development by hosting sessions.</p>
        <p>
          Feel free to connect with me on{" "}
          <Link href="https://twitter.com/amaancodes">Twitter</Link> or{" "}
          <Link href="https://www.linkedin.com/in/amaan05/">LinkedIn</Link>
        </p>
      </section>
    </Layout>
  );
}
