import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cocktails from './components/Cocktails';
import AboutSection from './components/AboutSection';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <AboutSection />
    </main>
  );
};

export default App;
