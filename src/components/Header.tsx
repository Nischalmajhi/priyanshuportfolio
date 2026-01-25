import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

function Header({ scrollToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e27]/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          PRIYAN<span className="text-cyan-400">SHU</span>
        </button>

        <nav className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
