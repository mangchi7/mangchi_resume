import { useRef, useEffect, useState } from 'react';

function CareerSection({ onScrollUp, isActive }) {
  const contentRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});

  const careers = [
    {
      company: '한국투자저축은행',
      role: '프리랜서',
      period: '2025.06 - 2025.12',
      description: '한국투자 저축은행에서 운영 중인 PC, Mobile Web, Web App의 유지보수를 담당',
      achievements: [
        '사용자 대시보드 React 리팩토링으로 초기 로딩 속도 70% 개선',
        'CI/CD 파이프라인 구축으로 배포 시간 2시간 → 15분 단축',
        '결제 시스템 안정화 (토스페이먼츠 연동, 환불율 3% → 0.5% 감소)',
        'API 응답 속도 개선 (평균 1.2초 → 300ms, DB 인덱싱 및 쿼리 최적화)',
        '백오피스 관리 시스템 개발로 운영팀 업무 효율 40% 향상',
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
      color: 'from-blue-50 to-blue-100',
    },
    {
      company: 'FinTech Ventures',
      role: 'Full-stack Developer',
      period: '2019.01 - 2021.02',
      description: '모바일 금융 앱 웹뷰 개발 및 송금/결제 API 서버 개발',
      achievements: [
        '실시간 송금 기능 개발 (일 평균 5만 건 처리)',
        '금융 거래 로그 수집 시스템 구축 (Elasticsearch + Kibana)',
        'SMS/Email 알림 시스템 개발 (AWS SES, SNS)',
        '고객 인증 프로세스 개선 (본인인증 API 연동, 가입 전환율 15% 향상)',
        '관리자 대시보드 개발 (거래 모니터링, 이상 거래 탐지)',
      ],
      tags: ['Vue.js', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Redis', 'AWS', 'Docker', 'Jenkins'],
      color: 'from-green-50 to-green-100',
    },
    {
      company: 'WebCraft Agency',
      role: 'Junior Web Developer',
      period: '2017.02 - 2018.12',
      description: '기업 홈페이지 및 쇼핑몰 구축',
      achievements: [
        '20개 이상의 웹사이트 프로젝트 완수',
        'jQuery → React 전환 프로젝트 참여',
        '웹 접근성(WCAG 2.0) 개선 작업',
        'SEO 최적화로 클라이언트 사이트 검색 순위 향상',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress', 'MySQL', 'Git'],
      color: 'from-purple-50 to-purple-100',
    },
  ];

  useEffect(() => {
    if (!isActive) return;

    const content = contentRef.current;
    if (!content) return;

    let isTransitioning = false;
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const scrollTop = content.scrollTop;
      const isAtTop = scrollTop <= 1;

      // Scrolling up at top
      if (e.deltaY < 0 && isAtTop && onScrollUp) {
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

    const handleTouchEnd = (e) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const scrollTop = content.scrollTop;
      const isAtTop = scrollTop <= 1;

      // Swipe down at top (scroll up to previous section)
      if (deltaY < -50 && isAtTop && onScrollUp) {
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
  }, [isActive, onScrollUp]);

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div
      id="career"
      className="bg-white relative border-t-8 border-apple-gray-900"
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
          <p className="text-apple-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase mb-1">Section 03</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-apple-gray-900">Career</h2>
        </div>

        <div className="container mx-auto px-6 py-20 max-w-6xl mt-16">
          {/* Timeline */}
          <div className="space-y-6">
            {careers.map((career, idx) => {
              const isExpanded = expandedCards[idx];

              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${career.color} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Header - Always Visible */}
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-apple-gray-900 mb-2">
                          {career.company}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-apple-gray-700 mb-2">{career.role}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-apple-gray-600 font-medium bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm whitespace-nowrap">
                          {career.period}
                        </span>
                        <button
                          onClick={() => toggleCard(idx)}
                          className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-apple-gray-100 transition-colors duration-200 flex-shrink-0"
                          aria-label={isExpanded ? '접기' : '펼치기'}
                        >
                          <svg
                            className={`w-5 h-5 text-apple-gray-700 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-apple-gray-600 leading-relaxed">{career.description}</p>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg md:text-xl font-bold text-apple-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          주요 성과
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                          {career.achievements.map((achievement, achIdx) => (
                            <li key={achIdx} className="flex items-start">
                              <span className="text-apple-gray-500 mr-2 md:mr-3 mt-1 text-sm">▪</span>
                              <span className="text-sm md:text-base text-apple-gray-700 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {career.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-apple-gray-700 rounded-full text-xs md:text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back to Top */}
          <div className="text-center mt-16 pb-8">
            <button
              onClick={() => onScrollUp && onScrollUp()}
              className="inline-flex items-center gap-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors font-medium cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerSection;
