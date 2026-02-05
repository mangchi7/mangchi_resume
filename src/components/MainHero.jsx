import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/myong.webp';

function MainHero({ onScrollDown, isActive }) {
  const [displayText, setDisplayText] = useState('');
  const [showSecondary, setShowSecondary] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const sectionRef = useRef(null);

  const texts = ['FULL-STACK', '풀스택개발자 서명세입니다.'];

  useEffect(() => {
    if (currentPhase === 0) {
      // First text typing
      const firstText = texts[0];
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= firstText.length) {
          setDisplayText(firstText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentPhase(1);
          }, 1500);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else if (currentPhase === 1) {
      // Delete first text
      let index = texts[0].length;
      const deleteInterval = setInterval(() => {
        if (index >= 0) {
          setDisplayText(texts[0].slice(0, index));
          index--;
        } else {
          clearInterval(deleteInterval);
          setCurrentPhase(2);
        }
      }, 50);

      return () => clearInterval(deleteInterval);
    } else if (currentPhase === 2) {
      // Type second text
      const secondText = texts[1];
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= secondText.length) {
          setDisplayText(secondText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setShowSecondary(true);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentPhase]);

  // Handle wheel and touch events to scroll to next section
  useEffect(() => {
    if (!isActive) return;

    const section = sectionRef.current;
    if (!section) return;

    let isTransitioning = false;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && onScrollDown) {
        e.preventDefault();
        isTransitioning = true;
        onScrollDown();
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isTransitioning) return;

      const deltaY = touchStartY - touchEndY;

      // Swipe up (scroll down)
      if (deltaY > 50 && onScrollDown) {
        isTransitioning = true;
        onScrollDown();
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: true });
    section.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
      section.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isActive, onScrollDown]);

  return (
    <div
      id="main"
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative overflow-hidden"
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Marble Background */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="marble">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="3" seed="2" />
              <feColorMatrix type="saturate" values="0" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0" />
            </filter>
            <linearGradient id="marbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#marbleGradient)" />
          <rect width="100%" height="100%" filter="url(#marble)" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Background Text - FULL-STACK */}
        {currentPhase === 2 && (
          <div className={`absolute left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden ${showSecondary ? 'scale-in' : 'opacity-0'}`} style={{ zIndex: 0, top: 'clamp(-30px, -3vw, -48px)' }}>
            <span
              className="font-bold text-apple-gray-900 whitespace-nowrap select-none"
              style={{
                fontSize: 'clamp(3rem, 15vw, 9rem)',
                opacity: 0.15,
                letterSpacing: '0.05em',
              }}
            >
              FULL-STACK
            </span>
          </div>
        )}

        {/* Typing Text */}
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-apple-gray-900 mb-8 md:mb-12 min-h-[120px] md:min-h-[160px] flex items-center justify-center px-4" style={{ paddingTop: 'clamp(2rem, 5vw, 5rem)' }}>
          <span className={currentPhase < 2 ? 'typing-cursor' : ''}>
            {currentPhase === 2 ? (
              <>
                {displayText.slice(0, 7)}
                {displayText.length > 7 && (
                  <span
                    className="font-extrabold"
                    style={{
                      backgroundSize: '100% 100%',
                      backgroundImage: 'linear-gradient(transparent 80%, rgb(20, 230, 190) 20%)',
                    }}
                  >
                    {displayText.slice(7, 10)}
                  </span>
                )}
                {displayText.slice(10)}
              </>
            ) : (
              displayText
            )}
          </span>
        </h1>

        {/* Profile Image */}
        <div className={`relative z-10 mb-8 inline-block ${showSecondary ? 'scale-in' : 'opacity-0'}`}>
          <img
            src={profileImage}
            alt="서명세"
            className="w-40 sm:w-48 md:w-64 lg:w-80 object-contain mx-auto"
          />
        </div>

        {/* Contact Info */}
        {/*
          <div className="mt-8 space-y-2 fade-in-delay-1">
            <p className="text-apple-gray-600 text-lg">
              <a href="mailto:dlsdus101@hanmail.net" className="hover:text-apple-gray-900 transition-colors">
                dlsdus101@hanmail.net
              </a>
            </p>
            <p className="text-apple-gray-600 text-lg">
              <a href="tel:010-3343-9871" className="hover:text-apple-gray-900 transition-colors">
                010-3343-9871
              </a>
            </p>
          </div>
        )}
        */}
      </div>

      {/* Scroll Down Indicator */}
      {showSecondary && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-2">
          <div className="flex flex-col items-center text-apple-gray-600">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHero;
