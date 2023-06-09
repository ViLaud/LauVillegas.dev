import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import NeoContainer from '../neo/neoHeader';
import NeoHeader from '../neo/neoHeader';
import Nav from '../nav';

const name = 'Lau Villegas';
const headerText = "Hey there! I'm Lau. \n A creative engineer passionate abouolving human problems through Software, AI and And here are some of my thoughts, ideas and research.";
export const siteTitle = 'Lau\'s Home Site';
export enum PageType {
  Home,
  BlogPost,
  Components,
}

type Props = {
  children: React.ReactNode,
  pageType: PageType,
}

export default function Layout({ children, pageType }: Props) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Lau Villegas' Personal Site. Lau is a passionate and experienced Software Engineer who enjoys solving hard problems through code. This is a blog about tech, projects, ideas, art, life updates or anything else Lau is obsessing over."
        />
        <meta
          property="og:image"
          content={`https://drive.google.com/uc?export=view&id=1D3IOWI_b0GFGVieBqnHlkwHwXgeDXmJR`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col font-archivo">
        <Nav></Nav>
        <div className='max-w-screen-md px-auto place-self-center mt-5'>
          <header className="">
            {pageType === PageType.Home ? (
              <NeoHeader>
                <div className='flex flex-row justify-center'>
                  <div className='basis-1/2 grow text-left my-auto ml-7'>
                  <h1 className='text-lg'>Hey there! I'm Lau. <br/> A creative software engineer, blooming with ideas and obsessed with solving meaningful human problems. <br/> Here are some of my learnings, projects and ongoing research.</h1>
                  </div>
                  <div className=''>
                <Image
                  priority
                  src="/images/hh.png"
                  className="basis-1/4 my-auto"
                  width={200}
                  height={50}
                  alt=""
                />
                </div>
              </div>
            </NeoHeader>
            ) : (
                <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                    Go Back Home
                  </Link>
                </h2>
            )}
          </header>
          <div className='p-5'>
            {children}
          </div>
          {pageType === PageType.BlogPost && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}