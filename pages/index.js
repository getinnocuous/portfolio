import { Header } from '../sections/Header/Header';
import { Experience } from '../sections/Experience/Experience';
import { Skillset } from '../sections/Skillset/Skillset';
import { Portfolio } from '../sections/Portfolio/Portfolio';
import { Footer } from '../sections/Footer/Footer';

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Experience />
        <Skillset />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
