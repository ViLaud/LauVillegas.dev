import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout/layout';
import Link from 'next/link';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { PageType } from '../components/layout/layout';
import NeoContainer from '../components/neo/neoHeader';
import NeoCard from '../components/neo/neoCard';

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
    <Layout pageType={PageType.Home}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`my-10 ${utilStyles.headingMd}`}>
        <p>Hey there! I'm Lau. A creative software engineer and idea generator who is obsessed with solving hard human problems and building the future.</p>
        <p>I've built this site with the intention of sharing some of my projects, writings, ideas and anything in between.</p>
        <p>If you'd like to learn how to develop and deploy a site like this for free.50, I recommend you check out these next.js tutorials on <Link href={'https://nextjs.org/learn'}>getting started</Link> and <Link href={'https://nextjs.org/docs/pages/building-your-application/deploying'}>deployment</Link>. You can also find all the code for this site on <Link href={'https://github.com/ViLaud/LauVillegas'}>it's github repo</Link>. Good luck!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <NeoCard>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </NeoCard>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}