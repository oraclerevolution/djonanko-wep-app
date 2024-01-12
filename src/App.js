import './App.css';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <>
        <Hero />
        <About />
        <Features />
      </>
    </ParallaxProvider>
  );
}

export default App;
