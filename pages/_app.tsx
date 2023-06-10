import '../styles/global.css';
import { Archivo } from 'next/font/google';

const archivo = Archivo({   
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-archivo',
});

export default function App({ Component, pageProps }) {
    return (
    <main className={`lightMode ${archivo.variable}`}>
      <Component {...pageProps} />
    </main>
    )
  }