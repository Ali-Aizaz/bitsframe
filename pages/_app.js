import '../styles/globals.css';
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }) {
  return <Component className='scroll-smooth' {...pageProps} />;
}

export default MyApp;
