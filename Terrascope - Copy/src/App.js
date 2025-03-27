import './App.css';
import Navbar from './components/Navbar.jsx';
import Marquee from './components/Marquee.js';
import LandingPage from './components/LandingPage.jsx';
import SeniorsSection from './components/SeniorsSection.jsx';
import Quote from './components/Quote.jsx';
import CardsSection from './components/CardsSection.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.js';
import FAQ from './components/FAQ.jsx';
import Hometwo from './components/Hometwo.jsx';
import HomeSix from './components/HomeSix.jsx';

function App() {
  return (
    <div className="App">
      <Marquee />
      <Navbar />
      {/* <LandingPage />
      <Hometwo />
      <SeniorsSection />
      <Quote />
      <CardsSection />
      <HomeSix />
      <AboutUs />
      <FAQ />
      <Footer /> */}
    </div>
  );
}

export default App;
