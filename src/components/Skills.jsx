function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'Redux', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Styled-components', level: 'Intermediate' },
        { name: 'SCSS', level: 'Intermediate' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'ORACLE', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'REST API', level: 'Advanced' },
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'GitHub Actions', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'Jennifer', level: 'Intermediate' },
        { name: 'Linux', level: 'Intermediate' },
      ]
    },
    {
      title: 'Tools & Collaboration',
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'Jira', level: 'Intermediate' },
        { name: 'Notion', level: 'Intermediate' },
        { name: 'Figma', level: 'Intermediate' },
        { name: 'Postman', level: 'Advanced' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-apple-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-apple-gray-900">
          기술 스택
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-apple-gray-900 border-b border-apple-gray-200 pb-3">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center justify-between">
                    <span className="text-apple-gray-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-apple-gray-500 bg-apple-gray-100 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
