import { useEffect, useRef, useState } from 'react';

function ScrollSection({ id, children, className = '', nextSection, prevSection, isScrollable = false }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section) return;

    // Check if this section is in viewport
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top === 0 && rect.height === window.innerHeight;
      setIsActive(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isScrollable || !isActive) return;

    const content = contentRef.current;
    if (!content) return;

    const handleWheel = (e) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      const scrollTop = content.scrollTop;
      const scrollHeight = content.scrollHeight;
      const clientHeight = content.clientHeight;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

      // Scrolling down at bottom
      if (e.deltaY > 0 && isAtBottom && nextSection) {
        e.preventDefault();
        isTransitioning.current = true;

        const nextElement = document.getElementById(nextSection);
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      }
      // Scrolling up at top
      else if (e.deltaY < 0 && isAtTop && prevSection) {
        e.preventDefault();
        isTransitioning.current = true;

        const prevElement = document.getElementById(prevSection);
        if (prevElement) {
          prevElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      }
    };

    content.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      content.removeEventListener('wheel', handleWheel);
    };
  }, [isActive, nextSection, prevSection, isScrollable]);

  if (!isScrollable) {
    // For sections that don't need internal scrolling (like MainHero)
    return (
      <section
        id={id}
        ref={sectionRef}
        className={`section-snap ${className}`}
        style={{ height: '100vh', minHeight: '100vh' }}
      >
        {children}
      </section>
    );
  }

  // For sections with internal scrolling
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-snap ${className}`}
      style={{ height: '100vh', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      <div
        ref={contentRef}
        style={{
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        className="custom-scrollbar"
      >
        {children}
      </div>
    </section>
  );
}

export default ScrollSection;
