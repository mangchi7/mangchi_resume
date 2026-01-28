import { useEffect, useState } from 'react';

export function useScrollTransition() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section-snap');
    let scrollTimeout;

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSection(index);
          }
        });
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.section-snap');
    if (sections[index]) {
      setIsScrolling(true);
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return { currentSection, scrollToSection };
}
