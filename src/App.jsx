import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cocktails from './components/Cocktails';
import AboutSection from './components/AboutSection';
import ArtSection from './components/ArtSection';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <AboutSection />
      <ArtSection />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
