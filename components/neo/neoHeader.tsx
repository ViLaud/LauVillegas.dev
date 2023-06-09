import styles from './neo.module.css';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

// Component accepts image source, title and subtitle for default styling or children for anything else

type Props = {
  children?: React.ReactNode,
  imageSource?: string,
  title?: string,
  subtitle?: string,
}

export default function NeoHeader({ children, imageSource, title, subtitle }: Props) {
  return (
    <div className={`my-10 bg-pink ${styles.neoHeader}`}>
      <div className='flex flex-row justify-center'>
        <div className='basis-1/2 grow text-left my-auto ml-7'>
          {title &&
            (<h1>{title}</h1>)
          }
          {subtitle &&
            (<h2>{subtitle}</h2>)
          }
        </div>
        <div >
          {imageSource &&
            (<Image
              priority
              src={imageSource}
              className="basis-1/4 my-auto"
              width={200}
              height={50}
              alt=""
            />)
          }
        </div>
      </div>
      {children}
    </div>
  );
}