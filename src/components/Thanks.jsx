import { useState, useEffect, useRef } from 'react';

function Thanks({ onScrollUp, isActive }) {
  const [displayText, setDisplayText] = useState('');
  const [showSecondary, setShowSecondary] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const sectionRef = useRef(null);

  const texts = ['THANK YOU', '읽어주셔서 감사합니다.'];

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

  // Handle wheel and touch events to scroll to previous section
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

      // Scroll up to previous section
      if (e.deltaY < 0 && onScrollUp) {
        e.preventDefault();
        isTransitioning = true;
        onScrollUp();
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

      // Swipe down (scroll up to previous section)
      if (deltaY < -50 && onScrollUp) {
        isTransitioning = true;
        onScrollUp();
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
  }, [isActive, onScrollUp]);

  return (
    <div
      id="thanks"
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative overflow-hidden"
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Marble Background */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="marble-thanks">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="3" seed="2" />
              <feColorMatrix type="saturate" values="0" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0" />
            </filter>
            <linearGradient id="marbleGradient-thanks" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#marbleGradient-thanks)" />
          <rect width="100%" height="100%" filter="url(#marble-thanks)" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Background Text - THANK YOU */}
        {currentPhase === 2 && (
          <div
            className={`absolute left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden ${
              showSecondary ? 'scale-in' : 'opacity-0'
            }`}
            style={{ zIndex: 0, top: 'clamp(-30px, -3vw, -48px)' }}
          >
            <span
              className="font-bold text-apple-gray-900 whitespace-nowrap select-none"
              style={{
                fontSize: 'clamp(3rem, 15vw, 9rem)',
                opacity: 0.15,
                letterSpacing: '0.05em',
              }}
            >
              THANK YOU
            </span>
          </div>
        )}

        {/* Typing Text */}
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-apple-gray-900 mb-8 md:mb-12 min-h-[120px] md:min-h-[160px] flex items-center justify-center px-4"
          style={{ paddingTop: 'clamp(2rem, 5vw, 5rem)' }}
        >
          <span className={currentPhase < 2 ? 'typing-cursor' : ''}>
            {currentPhase === 2 ? (
              <>
                {displayText}
              </>
            ) : (
              displayText
            )}
          </span>
        </h1>

        {/* Contact Links 
        {showSecondary && (
          <div className="mt-8 space-y-4 fade-in-delay-1">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:dlsdus101@hanmail.net"
                className="inline-flex items-center gap-2 px-6 py-3 bg-apple-gray-900 text-white rounded-full hover:bg-apple-gray-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a
                href="https://github.com/mangchi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-apple-gray-900 text-white rounded-full hover:bg-apple-gray-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        )}
        */}
      </div>

      {/* Scroll Up Indicator */}
      {showSecondary && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-2">
          <div className="flex flex-col items-center text-apple-gray-600">
            <button
              onClick={onScrollUp}
              className="inline-flex items-center gap-2 hover:text-apple-gray-900 transition-colors font-medium cursor-pointer"
            >
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thanks;
