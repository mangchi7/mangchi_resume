import { useRef, useEffect } from 'react';

function AboutMe({ onScrollUp, onScrollDown, isActive }) {
  const contentRef = useRef(null);

  const info = [
    { label: '이름', value: '서명세' },
    { label: '생년월일', value: '1991년 1월 5일' },
    { label: '이메일', value: 'dlsdus101@hanmail.net', link: 'mailto:dlsdus101@hanmail.net' },
    { label: '전화번호', value: '010-3343-9871', link: 'tel:010-3343-9871' },
    { label: 'GitHub', value: 'github.com/mangchi7', link: 'https://github.com/mangchi7' },
  ];

  const skills = {
    Frontend: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    ],
    Backend: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    ],
    DevOps: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    ],
    Tools: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    ],
  };

  const education = [
    { school: '학점은행제 컴퓨터공학과', period: '2018.06 - 2019.02', degree: '학사 졸업' },
    { school: '신구대학 컴퓨터정보처리학과', period: '2009.03 - 2015.02', degree: '전문학사 졸업' },
  ];

  const certifications = [
    { name: '빅데이터분석기사', date: '2025.07' },
    { name: 'SQLD', date: '2024.06' },
    { name: '정보처리기사', date: '2019.08' },
  ];

  useEffect(() => {
    if (!isActive) return;

    const content = contentRef.current;
    if (!content) return;

    let isTransitioning = false;
    let touchStartY = 0;
    let touchStartScrollTop = 0;

    const handleWheel = (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const scrollTop = content.scrollTop;
      const scrollHeight = content.scrollHeight;
      const clientHeight = content.clientHeight;
      const isAtTop = scrollTop <= 1;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;

      // Scrolling down at bottom
      if (e.deltaY > 0 && isAtBottom && onScrollDown) {
        e.preventDefault();
        isTransitioning = true;
        onScrollDown();
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
      // Scrolling up at top
      else if (e.deltaY < 0 && isAtTop && onScrollUp) {
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
      touchStartScrollTop = content.scrollTop;
    };

    const handleTouchEnd = (e) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const scrollTop = content.scrollTop;
      const scrollHeight = content.scrollHeight;
      const clientHeight = content.clientHeight;
      const isAtTop = scrollTop <= 1;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;

      // Swipe up at bottom (scroll down to next section)
      if (deltaY > 50 && isAtBottom && onScrollDown) {
        isTransitioning = true;
        onScrollDown();
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
      // Swipe down at top (scroll up to previous section)
      else if (deltaY < -50 && isAtTop && onScrollUp) {
        isTransitioning = true;
        onScrollUp();
        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
    };

    content.addEventListener('wheel', handleWheel, { passive: false });
    content.addEventListener('touchstart', handleTouchStart, { passive: true });
    content.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      content.removeEventListener('wheel', handleWheel);
      content.removeEventListener('touchstart', handleTouchStart);
      content.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isActive, onScrollUp, onScrollDown]);

  return (
    <div
      id="about"
      className="bg-apple-gray-100 relative border-t-8 border-apple-gray-900"
      style={{ height: '100vh', width: '100%', overflow: 'hidden' }}
    >
      <div
        ref={contentRef}
        className="custom-scrollbar"
        style={{
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Section Label - Top Right */}
        <div className="absolute top-4 md:top-8 right-4 md:right-8 text-right z-10">
          <p className="text-apple-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase mb-1">Section 02</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-apple-gray-900">About Me</h2>
        </div>

        <div className="container mx-auto px-6 py-20 max-w-5xl mt-16">
          {/* Introduction */}
          <div className="mb-16 fade-in-delay-1">
            <p className="text-lg md:text-xl lg:text-2xl text-center text-apple-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
              10년차 풀스택 개발자로, 금융권에서 프리랜서로 일해왔습니다.
              빠른 의사결정과 실행력을 바탕으로 비즈니스 임팩트를 만드는 것에 관심이 많으며,
              기술 부채 관리와 팀 생산성 향상에도 기여해왔습니다.
              최근에는 AI/ML 기술을 활용한 서비스 개발에도 참여하고 있습니다.
            </p>
          </div>

          {/* Basic Info */}
          <div className="mb-16 fade-in-delay-2 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-apple-gray-900 mb-6 md:mb-8 text-center">기본 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
              {info.map((item, idx) => (
                <div key={idx} className="bg-apple-gray-50 rounded-xl p-4 md:p-6">
                  <p className="text-apple-gray-600 text-xs md:text-sm mb-1 md:mb-2">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-apple-gray-900 font-semibold text-base md:text-lg hover:text-apple-gray-600 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-apple-gray-900 font-semibold text-base md:text-lg">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16 fade-in-delay-3 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-apple-gray-900 mb-6 md:mb-8 text-center">기술 스택</h3>
            <div className="space-y-6 md:space-y-8">
              {Object.entries(skills).map(([category, icons], idx) => (
                <div key={idx} className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-apple-gray-700 mb-3 md:mb-4">{category}</h4>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {icons.map((icon, iconIdx) => (
                      <div
                        key={iconIdx}
                        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform duration-300"
                      >
                        <img src={icon} alt={`${category} icon ${iconIdx}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 px-4">
            {/* Education */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-apple-gray-900 mb-4 md:mb-6">학력</h3>
              <div className="space-y-3 md:space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-apple-gray-50 rounded-xl p-4 md:p-6">
                    <h4 className="font-semibold text-apple-gray-900 mb-2 text-sm md:text-base">{edu.school}</h4>
                    <p className="text-apple-gray-600 text-xs md:text-sm mb-1">{edu.period}</p>
                    <p className="text-apple-gray-700 text-sm md:text-base">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-apple-gray-900 mb-4 md:mb-6">자격증</h3>
              <div className="space-y-3 md:space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-apple-gray-50 rounded-xl p-4 md:p-6 flex justify-between items-center">
                    <h4 className="font-semibold text-apple-gray-900 text-sm md:text-base">{cert.name}</h4>
                    <span className="text-apple-gray-600 text-xs md:text-sm bg-white px-2 md:px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center pb-8">
            <div className="inline-flex flex-col items-center text-apple-gray-600">
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
