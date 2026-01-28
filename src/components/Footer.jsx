function Footer() {
  return (
    <footer className="bg-apple-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">연락하기</h2>
          <div className="space-y-3 mb-8">
            <p className="text-apple-gray-300">
              <span className="font-semibold text-white">이메일:</span>{' '}
              <a
                href="mailto:dlsdus101@hanmail.net"
                className="hover:text-apple-gray-100 transition-colors duration-200"
              >
                dlsdus101@hanmail.net
              </a>
            </p>
            <p className="text-apple-gray-300">
              <span className="font-semibold text-white">전화:</span>{' '}
              <a
                href="tel:010-3343-9871"
                className="hover:text-apple-gray-100 transition-colors duration-200"
              >
                010-3343-9871
              </a>
            </p>
            <p className="text-apple-gray-300">
              <span className="font-semibold text-white">GitHub:</span>{' '}
              <a
                href="https://github.com/mangchi7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-apple-gray-100 transition-colors duration-200"
              >
                github.com/mangchi7
              </a>
            </p>
          </div>
          <div className="border-t border-apple-gray-700 pt-6">
            <p className="text-apple-gray-400 text-sm">
              © {new Date().getFullYear()} 서명세. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
