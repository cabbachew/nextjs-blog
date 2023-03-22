import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Malachi Constant. I'm the richest man in a future North America. You can find me in <i>The Sirens of Titan</i> by Kurt Vonnegut Jr.</p>
        <p>
          "Everyone now knows how to find the meaning of life within himself. But mankind wasn't always so lucky."
        </p>
      </section>
    </Layout>
  );
}