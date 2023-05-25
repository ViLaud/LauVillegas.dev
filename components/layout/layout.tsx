import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

const name = 'Lau Villegas';
export const siteTitle = 'Lau\'s Home Site';
export enum PageType {
  Home,
  BlogPost,
}

type Props = {
  children: React.ReactNode,
  pageType: PageType,
}

export default function Layout({ children, pageType }: Props) {
  return (
    <div className="container mx-auto">
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
      <div className="flex flex-col">
        <div className='max-w-screen-md px-auto place-self-center'>
          <header className="">
            {pageType === PageType.Home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className="my-auto"
                  height={144}
                  width={108}
                  alt=""
                />
                <h1 className="py-auto">{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.png"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={108}
                    alt=""
                  />
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
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