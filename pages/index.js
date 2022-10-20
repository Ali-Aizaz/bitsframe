import Cover from '../components/cover';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Price from '../components/prices';
// import Mail from '../components/mail';
import { getPortfolio } from './api/hello';
import Head from 'next/head';

export async function getStaticProps() {
  const data = await getPortfolio();
  return { props: { data }, revalidate: 86400 };
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Bitsframe We Develope || Homepage</title>
        <meta
          name='description'
          content='Get your website developed by the best. High SEO ranking,
          user friendly interface, mobile optimization, low prices and modern UI/UX design. Bitsframe We Develope'
        />
        <meta
          name='Homepage'
          content='initial-scale=1.0, width=device-width'
          key='Homepage'
        />
        <meta property='og:type' content='website' />
        <meta name='robots' content='index, follow, archive' />
        <meta property='og:type' content='artical' />
        <meta property='og:title' content='Bitsframe We Develope || Homepage' />
        <meta property='og:site_name' content='Bitsframe' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <Cover />
        <Services />
        <Portfolio props={data} />
        <Price />
        {/* <Mail /> */}
      </main>
    </>
  );
}
