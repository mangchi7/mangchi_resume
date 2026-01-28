function Experience() {
  const experiences = [
    {
      company: '한국투자저축은행 (프리랜서)',
      period: '2025.06 - 2025.12',
      role: '',
      description: '한국투자 저축은행에서 운영 중인 PC, Mobile Web, Web App의 유지보수를 담당',
      achievements: [
        '사용자 대시보드 React 리팩토링으로 초기 로딩 속도 70% 개선',
        'CI/CD 파이프라인 구축으로 배포 시간 2시간 → 15분 단축',
        '결제 시스템 안정화 (토스페이먼츠 연동, 환불율 3% → 0.5% 감소)',
        'API 응답 속도 개선 (평균 1.2초 → 300ms, DB 인덱싱 및 쿼리 최적화)',
        '백오피스 관리 시스템 개발로 운영팀 업무 효율 40% 향상',
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
    },
    {
      company: '핀테크스타트업 (FinTech Ventures)',
      period: '2019.01 - 2021.02',
      role: 'Full-stack Developer',
      description: '모바일 금융 앱 웹뷰 개발 및 송금/결제 API 서버 개발',
      achievements: [
        '실시간 송금 기능 개발 (일 평균 5만 건 처리)',
        '금융 거래 로그 수집 시스템 구축 (Elasticsearch + Kibana)',
        'SMS/Email 알림 시스템 개발 (AWS SES, SNS)',
        '고객 인증 프로세스 개선 (본인인증 API 연동, 가입 전환율 15% 향상)',
        '관리자 대시보드 개발 (거래 모니터링, 이상 거래 탐지)',
      ],
      tags: ['Vue.js', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Redis', 'AWS', 'Docker', 'Jenkins']
    },
    {
      company: '웹에이전시 (WebCraft Agency)',
      period: '2017.02 - 2018.12',
      role: 'Junior Web Developer',
      description: '기업 홈페이지 및 쇼핑몰 구축',
      achievements: [
        '20개 이상의 웹사이트 프로젝트 완수',
        'jQuery → React 전환 프로젝트 참여',
        '웹 접근성(WCAG 2.0) 개선 작업',
        'SEO 최적화로 클라이언트 사이트 검색 순위 향상',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress', 'MySQL', 'Git']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-apple-gray-900">
          경력
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-apple-gray-300 pl-8 hover:border-apple-gray-600 transition-colors duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-apple-gray-900 mb-2">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap gap-3 items-center text-apple-gray-600 mb-2">
                  <span className="font-medium">{exp.period}</span>
                  {exp.role && (
                    <>
                      <span className="text-apple-gray-400">•</span>
                      <span className="font-medium">{exp.role}</span>
                    </>
                  )}
                </div>
                <p className="text-apple-gray-600 mb-4">{exp.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-apple-gray-900 mb-3 text-lg">주요 성과</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="flex items-start">
                      <span className="text-apple-gray-400 mr-2 mt-1.5">▪</span>
                      <span className="text-apple-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-apple-gray-100 text-apple-gray-700 rounded-full text-sm font-medium hover:bg-apple-gray-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
