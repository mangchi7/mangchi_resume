import profileImage from '../assets/myong.webp';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-50 to-white section-padding">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <div className="mb-8 inline-block">
            <img
              src={profileImage}
              alt="서명세"
              className="w-40 h-40 rounded-full object-cover shadow-2xl mx-auto border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-apple-gray-900 mb-4 tracking-tight">
            서명세
          </h1>
          <p className="text-2xl md:text-3xl text-apple-gray-600 mb-8 font-light">
            Full-stack Developer
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-apple-gray-500 leading-relaxed mb-8">
              10년차 풀스택 개발자로, 금융권에서 프리랜서로 일해왔습니다.
              빠른 의사결정과 실행력을 바탕으로 비즈니스 임팩트를 만드는 것에 관심이 많습니다.
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center text-apple-gray-600">
            <a
              href="mailto:dlsdus101@hanmail.net"
              className="hover:text-apple-gray-900 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href="https://github.com/mangchi7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-apple-gray-900 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="tel:010-3343-9871"
              className="hover:text-apple-gray-900 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
