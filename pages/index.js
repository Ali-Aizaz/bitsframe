import Header from '../components/header';
import Cover from '../components/cover';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Price from '../components/prices';
import Mail from '../components/mail';

export default function Home() {
  return (
    <main>
      <Header />
      <Cover />
      <Services />
      <Portfolio />
      <Price />
      <Mail />
    </main>
  );
}
