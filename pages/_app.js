import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
import ContactUs from '../components/contact';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster containerClassName='z-50' />
      <Header />
      <Sidebar />
      <ContactUs />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
