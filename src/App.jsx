import Hero from './components/Hero'
import ParticlesComponent from './components/ui/Particle'
import './App.css'
import { useEffect, useState } from 'react';
import Preloader from './components/ui/Preloader';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
    <ParticlesComponent id="particles" />
    {isLoading ? <Preloader /> : <Hero />}
    </>
  )
}

export default App
