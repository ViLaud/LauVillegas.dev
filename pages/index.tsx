import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout/layout';
import Link from 'next/link';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { PageType } from '../components/layout/layout';
import NeoContainer from '../components/neo/neoHeader';
import NeoCard from '../components/neo/neoCard';
import BlogSection from '../components/blogSection';

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
      <section className={`my-5`}>

        {/* <p>Hey there! I'm Lau. A creative software engineer and idea generator who is obsessed with solving hard human problems and building the future.</p> */}

        <p>Welcome welcome! I've built this site with the intention of sharing some of my projects, writings, ideas and anything in between.</p>
        <p>If you'd like to learn how to develop and deploy a site like this for free.50, I recommend you check out these next.js tutorials on how to <Link href={'https://nextjs.org/learn'}>get started</Link> and <Link href={'https://nextjs.org/docs/pages/building-your-application/deploying'}>deploy</Link>. You can also find all the code for this site on <Link href={'https://github.com/ViLaud/LauVillegas'}>it's github repo</Link>. Good luck!</p>
      </section>
      <section>
          {allPostsData.map(({ id, date, title }) => (
            <article key={id} className="flex flex-col justify-between my-5">
              <div>
              <div className="group relative">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={`/posts/${id}`}>
                    <span className="absolute inset-0" />
                    {title}
                  </a>
                </h3>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={date} className="text-gray-500">
                  {date}
                </time>
                <a
                  href=''
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  dev
                </a>
              </div>
              </div>
            </article>

          ))}
      </section>
    </Layout>
  );
}