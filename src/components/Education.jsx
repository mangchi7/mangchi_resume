function Education() {
  const education = [
    {
      school: '학점은행제 컴퓨터공학과',
      period: '2018.06 - 2019.02',
      degree: '학사 졸업'
    },
    {
      school: '신구대학 컴퓨터정보처리학과',
      period: '2009.03 - 2015.02',
      degree: '전문학사 졸업'
    }
  ];

  const certifications = [
    {
      name: '빅데이터분석기사',
      date: '2025.07'
    },
    {
      name: 'SQLD (SQL 개발자)',
      date: '2024.06'
    },
    {
      name: '정보처리기사',
      date: '2019.08'
    }
  ];

  return (
    <section id="education" className="section-padding bg-apple-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-apple-gray-900">학력</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-apple-gray-900 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-apple-gray-600 mb-1">{edu.period}</p>
                  <p className="text-apple-gray-700 font-medium">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-apple-gray-900">자격증</h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-apple-gray-900">
                    {cert.name}
                  </h3>
                  <span className="text-apple-gray-600 bg-apple-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
