import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function CareerSection({ onScrollUp, isActive }) {
  const contentRef = useRef(null);
  const [selectedCareer, setSelectedCareer] = useState(null);

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

  const openModal = (career) => {
    setSelectedCareer(career);
  };

  const closeModal = () => {
    setSelectedCareer(null);
  };

  // ESC 키로 모달 닫기 & body 스크롤 방지
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedCareer) {
        closeModal();
      }
    };

    // 모달이 열릴 때 body 스크롤 방지
    if (selectedCareer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [selectedCareer]);

  return (
    <>
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

        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 max-w-[95%] xl:max-w-[85%] 2xl:max-w-[1800px] mt-8 md:mt-12 lg:mt-16">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {careers.map((career, idx) => (
              <div
                key={idx}
                onClick={() => openModal(career)}
                className={`bg-gradient-to-br ${career.color} rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-6 md:p-8 lg:p-10`}
              >
                <div className="flex flex-col h-full">
                  {/* Company Name */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-apple-gray-900 mb-3 md:mb-4">
                    {career.company}
                  </h3>

                  {/* Period */}
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block text-apple-gray-600 font-medium bg-white px-4 py-2 rounded-full text-sm md:text-base">
                      {career.period}
                    </span>
                  </div>

                  {/* Role */}
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-apple-gray-700 mt-auto">
                    {career.role}
                  </p>

                  {/* Click Indicator */}
                  <div className="mt-4 flex items-center text-apple-gray-600 text-sm">
                    <span>상세보기</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8 md:mt-12 lg:mt-16 pb-6 md:pb-8">
            <button
              onClick={() => onScrollUp && onScrollUp()}
              className="inline-flex items-center gap-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors text-sm md:text-base lg:text-lg font-medium cursor-pointer"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
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

      {/* Modal - Rendered via Portal to body */}
      {selectedCareer && createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-3 md:p-4"
          style={{ zIndex: 9999 }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl md:rounded-3xl w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl max-h-[92vh] md:max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-br ${selectedCareer.color} p-4 md:p-6 lg:p-8 sticky top-0 z-10`}>
              <div className="flex justify-between items-start gap-2 md:gap-4 mb-3 md:mb-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-apple-gray-900 mb-2 md:mb-3 break-words">
                    {selectedCareer.company}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-apple-gray-700 mb-2">
                    {selectedCareer.role}
                  </p>
                  <span className="inline-block text-apple-gray-600 font-medium bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    {selectedCareer.period}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full hover:bg-apple-gray-100 transition-colors flex-shrink-0"
                  aria-label="닫기"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-apple-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-xs md:text-sm lg:text-base xl:text-lg text-apple-gray-600 leading-relaxed">
                {selectedCareer.description}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 lg:p-8">
              {/* Achievements */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-apple-gray-900 mb-3 md:mb-4 lg:mb-5 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  주요 성과
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {selectedCareer.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-apple-gray-500 mr-2 md:mr-3 mt-0.5 md:mt-1 text-sm md:text-base flex-shrink-0">▪</span>
                      <span className="text-xs md:text-sm lg:text-base xl:text-lg text-apple-gray-700 leading-relaxed break-words">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-apple-gray-900 mb-3 md:mb-4 lg:mb-5">기술 스택</h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3">
                  {selectedCareer.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 bg-apple-gray-100 text-apple-gray-700 rounded-full text-xs md:text-sm lg:text-base font-medium hover:bg-apple-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default CareerSection;
