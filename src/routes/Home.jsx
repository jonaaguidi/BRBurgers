import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarqueeComponent from "../components/Marquee/Marquee";
import Burgers from '../components/Burgers/Burgers';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Testimonials/Reviews';

function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <MarqueeComponent />
      <Burgers />
      <Reviews />
    </main>
    <Footer />
    </>
  )
}

export default Home;
