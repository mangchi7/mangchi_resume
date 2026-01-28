import { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import MainHero from './components/MainHero';
import AboutMe from './components/AboutMe';
import CareerSection from './components/CareerSection';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const isTransitioning = useRef(false);

  const goToSection = (index) => {
    if (index >= 0 && index <= 2 && !isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentSection(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 1000);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navigation />
      <div
        style={{
          height: '100vh',
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.8s ease-in-out',
        }}
      >
        <MainHero onScrollDown={() => goToSection(1)} isActive={currentSection === 0} />
        <AboutMe
          onScrollUp={() => goToSection(0)}
          onScrollDown={() => goToSection(2)}
          isActive={currentSection === 1}
        />
        <CareerSection
          onScrollUp={() => goToSection(1)}
          isActive={currentSection === 2}
        />
      </div>
    </div>
  );
}

export default App;
