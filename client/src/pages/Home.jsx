import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Procedures from '../components/sections/Procedures';
import MissionVision from '../components/sections/MissionVision';
import Booking from '../components/sections/Booking';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Procedures />
        <MissionVision />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default Home;