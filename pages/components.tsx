import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout/layout';
import Link from 'next/link';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { PageType } from '../components/layout/layout';
import NeoContainer from '../components/neo/neoHeader';
import NeoCard from '../components/neo/neoCard';
import NeoHeader from '../components/neo/neoHeader';
import Image from 'next/image';

export default function Components() {
    const components = [
        {
            name: 'Header with Image and text',
            component: (() => {return (
                    <NeoHeader>
                        <div className='flex flex-row justify-center'>
                            <div className='basis-1/2 grow text-left my-auto ml-7'>
                                <h1 className="">Hey there! I'm Lau. <br /> And here are some of my thoughts, ideas and research.</h1>
                            </div>
                            <div >
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
                )})()
        },
        {
            name: 'Basic content card',
            component: (() => {return (
                <NeoCard>
                  <Link href={`/Home`}>An example of a title link</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    Written at some point in time
                  </small>
              </NeoCard>
                )})()
        },


        
    ]
    return (
        <Layout pageType={PageType.Components}>
            <Head>
                <title>Neu Brutalist Components</title>
            </Head>
            <section className={`${utilStyles.headingMd}`}>
                <p>Hey there! This is a compilation of all the neu brutalist components I've been working on in order to build this website following the design trend.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Components</h2>
                <ul className={utilStyles.list}>
                    {components.map(({ name, component}, i) => (
                         <li className={utilStyles.listItem} key={i}>
                        <h3 className='font-extralight'>{name}</h3>
                        <div>{component}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}