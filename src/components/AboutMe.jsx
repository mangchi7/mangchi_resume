import { useRef, useEffect } from 'react';
import characterImage from '../assets/re.png';

function AboutMe({ onScrollUp, onScrollDown, isActive }) {
  const contentRef = useRef(null);

  const hashtags = ['#10년차', '#풀스택', '#금융권', '#바이브코딩'];

  const info = [
    { label: '이름', value: '서명세' },
    { label: '생년월일', value: '1991년 1월 5일' },
    { label: '이메일', value: 'dlsdus101@hanmail.net', link: 'mailto:dlsdus101@hanmail.net' },
    { label: '전화번호', value: '010-3343-9871', link: 'tel:010-3343-9871' },
    { label: 'GitHub', value: 'github.com/mangchi7', link: 'https://github.com/mangchi7' },
  ];

  const education = [
    { school: '학점은행제 컴퓨터공학과', period: '2018.06 - 2019.02', degree: '학사 졸업' },
    { school: '신구대학 컴퓨터정보처리학과', period: '2009.03 - 2015.02', degree: '전문학사 졸업' },
  ];

  const certifications = [
    { name: '빅데이터분석기사', date: '2025.07' },
    { name: 'SQLD', date: '2024.06' },
    { name: '정보처리기사', date: '2019.08' },
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-apple-gray-900">About Me</h2>
        </div>

        <div className="container mx-auto px-6 py-20 max-w-7xl mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Character Image */}
            <div className="flex flex-col items-center justify-center fade-in-delay-1 space-y-8">
              <div className="relative">
                <img
                  src={characterImage}
                  alt="Character"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                />
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-3 justify-center">
                {hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-apple-gray-900 text-white rounded-full text-sm font-medium hover:bg-apple-gray-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              <a
                href="https://github.com/mangchi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-apple-gray-900 text-white rounded-full font-semibold hover:bg-apple-gray-700 transition-all duration-300 shadow-lg"
              >
                링크 바로 보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right Column - Content */}
            <div className="text-apple-gray-900 space-y-12 fade-in-delay-2">
              {/* Mind Section */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-apple-gray-900">마음가짐</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg md:text-xl text-apple-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-apple-gray-900">끈기와 인내심</span>
                    </p>
                    <p className="text-base text-apple-gray-600 leading-relaxed">
                      마지막까지 끈기와 인내심이 필요한 마라톤을 취미로 즐기고 있습니다.<br/>
                      그래서 개발 중 예상치 못한 문제가 발생하더라도 포기하지 않고 끝까지 해결해 완료하는 것을 중요하게 생각합니다.<br/>
                      과정은 쉽지 않지만 완주하듯 결과를 만들어냈을 때 느끼는 성취감을 중요하게 생각합니다.<br/>
                    </p>
                  </div>

                  <div>
                    <p className="text-lg md:text-xl text-apple-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-apple-gray-900">팀보다 위대한 선수는 없다.</span>
                    </p>
                    <p className="text-base text-apple-gray-600 leading-relaxed">
                      아무리 뛰어난 개인이라도 혼자서는 한계가 있다고 생각합니다.<br/>
                      여러 사람이 함께 고민하고 방향을 맞춰가는 집단지성의 과정 속에서 더 나은 결과가 나온다고 믿습니다.<br/>
                      저는 팀 안에서 원활한 소통과 역할 조율을 통해 시너지를 만들어내는 협업 중심의 개발자입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skill & Tools Section */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-apple-gray-900">기술 스택</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, icons], idx) => (
                    <div key={idx}>
                      <h4 className="text-lg md:text-xl font-bold text-apple-gray-900 mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {icons.map((icon, iconIdx) => (
                          <div
                            key={iconIdx}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-2 hover:scale-110 hover:bg-gray-50 transition-all duration-300 shadow-md"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-apple-gray-900 mb-4">학력</h4>
                  <div className="space-y-3">
                    {education.map((edu, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-semibold text-apple-gray-900">{edu.school}</p>
                        <p className="text-apple-gray-600 text-xs">{edu.period}</p>
                        <p className="text-apple-gray-700 text-xs">{edu.degree}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-apple-gray-900 mb-4">자격증</h4>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-semibold text-apple-gray-900">{cert.name}</p>
                        <p className="text-apple-gray-600 text-xs">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center pb-8 pt-16">
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
