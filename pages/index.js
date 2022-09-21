import Cover from '../components/cover';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Price from '../components/prices';
import Mail from '../components/mail';
import { getPortfolio } from './api/hello';

export async function getServerSideProps() {
  const data = await getPortfolio();
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <main>
      <Cover />
      <Services />
      <Portfolio props={data} />
      <Price />
      <Mail />
    </main>
  );
}
