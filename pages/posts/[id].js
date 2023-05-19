import Layout from '../../components/layout/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title}/>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.htmlContent}} />
        </article>
      </Layout>
    );
  }