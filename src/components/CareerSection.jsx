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
        '민원 해결: 로그 분석 및 빠른 대응으로 고객 만족도 향상, 주요 문구 삽입 및 직관적인 UI 개선',
        '웹 접근성: 웹 접근성 인증 재인증을 위한 시각적/청각적 개선 작업 완료 (스크린 리더 테스트)',
        '프로세스 개선: 요구불 계좌 가입 절차 17단계 → 9단계로 단축',
        '절차 최적화: 수신 및 여신 프로세스 18단계 → 10단계로 개선',
      ],
      tags: ['JAVA', 'JSP', 'JavaScript', 'JQuery', 'Tibero', 'Web Square', 'INISAFE Web', 'nProtect', 'coocon', 'VeraPort', 'Burp Suite'],
      color: 'from-blue-50 to-blue-100',
    },
    {
      company: '우리은행 WON뱅킹 재구축',
      role: '프리랜서',
      period: '2024.04 - 2025.01',
      description: '유니버설 상품 및 컨텐츠 관리 개발 및 꿀머니 적금서비스 개발',
      achievements: [
        '꿀머니: NEW WON 앱 유니버설 개발, 계정계/멤버스 인터페이스 설계 및 통신 구현',
        '배치 처리: 전일 해지 고객 대상 배치 시스템 구축으로 동기화 문제 해결',
        '운영관리 시스템: antd UI 기반 내부 관리 시스템 개발',
        '계열사 연동: 우리 금융 그룹(카드, 저축은행, 증권) 인터페이스 설계 및 상품/콘텐츠 관리 개발',
      ],
      tags: ['Linux', 'JAVA', 'React', 'TypeScript', 'JQuery', 'ORACLE', 'Spring Framework', 'VSCode', 'Git', 'Ant Design'],
      color: 'from-green-50 to-green-100',
    },
    {
      company: 'DB손해보험 TC-System 구축',
      role: '프리랜서',
      period: '2023.05 - 2023.12',
      description: '텔레마케팅 시스템의 메인, 상담, CALL 기능 개발',
      achievements: [
        '청취와 녹취: Lucis 연동 통화 청취 및 녹취 기능 개발',
        'CORS 문제 해결: 운영 환경에서 발생한 CORS 오류를 업체와 협업하여 iFrame 관련 문제 해결',
        '상담 관리: 상담원을 위한 통화 관리 화면 개발',
      ],
      tags: ['Linux', 'JAVA', 'JSP', 'JavaScript', 'JQuery', 'ORACLE', 'eGovFrameWork', 'Lucis', 'DataTable', 'FullCalendar'],
      color: 'from-purple-50 to-purple-100',
    },
    {
      company: 'DB금융투자 본사영업시스템 구축',
      role: '프리랜서',
      period: '2022.09 - 2023.03',
      description: '고객관리 개발 및 딜 원장 개발',
      achievements: [
        '권한 체크: 팀별/권한별 화면 및 데이터 접근 제어 구현',
        '성능 최적화: 로그인 시 권한 정보 사전 로드로 화면 렌더링 속도 개선',
        '쿼리 튜닝: DBA와 협업하여 복잡한 권한 쿼리 최적화',
      ],
      tags: ['Linux', 'JAVA', 'JSP', 'JavaScript', 'JQuery', 'Vue.js', 'ORACLE', 'Spring Boot'],
      color: 'from-yellow-50 to-yellow-100',
    },
    {
      company: '애큐온캐피탈',
      role: '채널계 및 계정계 담당자',
      period: '2022.01 - 2022.09',
      description: '채널계 및 계정계 개발 및 운영, 앱 개발 및 운영',
      achievements: [
        '개인 대출: 채널계(홈페이지, 모바일 웹)와 계정계 프로세스 개발 및 운영',
        'ODS 프로젝트: 데이터 통합 시스템 개발',
        '간편인증: 쿠콘 API를 이용한 건강보험, 국세청, 등초본 간편인증 개발',
        '앱 배포: Android 및 iOS 앱 수정 및 배포 담당',
      ],
      tags: ['Linux', 'JAVA', 'JSP', 'JavaScript', 'JQuery', 'ORACLE', 'Eclipse', 'I-Studio', 'Android Studio', 'Xcode', 'nProtect', 'VeraPort', 'coocon'],
      color: 'from-red-50 to-red-100',
    },
    {
      company: '한국투자 저축은행 온라인 유지보수',
      role: '프리랜서',
      period: '2021.06 - 2021.12',
      description: 'PC, Mobile Web, Web App 유지보수',
      achievements: [
        '금소법 개정: 금융소비자보호법 개정에 따른 동의사항 화면 개발',
        'IB20 프레임워크: JSP, JQuery 기반 소스 배포',
        '보안 강화: 웹 및 앱 취약점 보완 조치',
      ],
      tags: ['Linux', 'JAVA', 'JSP', 'JavaScript', 'JQuery', 'MySQL', 'Eclipse', 'KMC', 'INISAFE Web', 'nProtect', 'coocon', 'VeraPort'],
      color: 'from-indigo-50 to-indigo-100',
    },
    {
      company: 'SKT 로밍 서비스 시스템 개발',
      role: '프리랜서',
      period: '2020.11 - 2021.02',
      description: 'Flex 언어로 된 로밍 서비스 홈페이지를 JSP로 전환',
      achievements: [
        '기술 스택 전환: Flex → JSP 마이그레이션',
        '데이터 시각화: JqGrid를 이용한 JSON 데이터 그리드 구현',
        '차트 개선: D3 Chart → amChart로 전환',
      ],
      tags: ['JAVA', 'JSP', 'JavaScript', 'JQuery', 'ORACLE', 'Spring Boot', 'amChart', 'JqGrid'],
      color: 'from-pink-50 to-pink-100',
    },
    {
      company: '기업은행 스마트 ATM 단말 개발',
      role: '프리랜서',
      period: '2020.06 - 2020.09',
      description: '스마트 ATM 단말 화면 개발',
      achievements: [
        'ATM 화면 개발: EZsmartbuilder 툴을 이용한 무매체, 잔액증명서, 거래확인서 화면 개발',
        '서버 연동: HTML 기반 화면과 서버단 연동',
      ],
      tags: ['JAVA', 'HTML', 'EZsmartbuilder'],
      color: 'from-teal-50 to-teal-100',
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
