import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return <div className='text-6xl text-blue-800'>Web Page</div>;
};

export default App;
