import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarqueeComponent from "../components/Marquee/Marquee";
import Burgers from '../components/Burgers/Burgers';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Testimonials/Reviews';
import Location from '../components/Location/Location';
import Instagram from '../components/Instagram/Instagram';
import Preloader from '../components/Preloader/Preloader';
import { useEffect, useState } from 'react';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2200);
  }, []);

  return (
    <>
    {!loaded && <Preloader />}
    {loaded && (
      <>
      <Header />
      <main>
        <Hero />
        <MarqueeComponent />
        <Burgers />
        <Reviews />
        <Location />
        <Instagram />
      </main>
      <Footer />
    </>
    )}
  </>
  );
}

export default Home;
