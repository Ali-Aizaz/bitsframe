import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
