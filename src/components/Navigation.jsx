import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Main', href: '#main' },
    { label: 'About Me', href: '#about' },
    { label: 'Career', href: '#career' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 bg-apple-gray-900 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-apple-gray-900 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-apple-gray-900 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-8 text-center">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-apple-gray-900 hover:text-apple-gray-600 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-30 w-10 h-10 bg-apple-gray-900 text-white rounded-full flex items-center justify-center hover:bg-apple-gray-700 transition-colors duration-300 shadow-lg"
        aria-label="Scroll to top"
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
      </button>
    </>
  );
}

export default Navigation;
