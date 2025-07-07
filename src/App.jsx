import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className='h-dvh bg-black' />
    </main>
  );
};

export default App;
