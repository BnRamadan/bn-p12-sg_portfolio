import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t, isRTL } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { key: 'navHome', href: '#home' },
    { key: 'navAbout', href: '#about' },
    { key: 'navSkills', href: '#skills' },
    { key: 'navExperience', href: '#experience' },
    { key: 'navProjects', href: '#projects' },
    { key: 'navEducation', href: '#education' },
    { key: 'navContact', href: '#contact' },
  ];

  const handleLanguageChange = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? (theme === 'dark' ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-white/95 shadow-md backdrop-blur-sm') : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home" className="flex items-center">
            <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>{t('headerFirstName')}</span>
            <span className="ms-1 text-amber-500">{t('headerLastName')}</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`text-sm font-medium hover:text-amber-500 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700'}`}
            >
              {t(item.key)}
            </a>
          ))}

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={handleLanguageChange}
              className={`px-3 py-1 rounded-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden">
          <button
            onClick={handleLanguageChange}
            className={`px-2 py-1 text-sm rounded-md transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {language === 'en' ? 'العربية' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className={`p-1.5 rounded-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav
          className={`fixed top-0 left-0 w-full h-screen z-[9999] md:hidden transition-transform duration-300 ease-in-out
            ${theme === 'dark' ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-900'}
            p-6 overflow-y-auto`}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">
              <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>{t('headerFirstName')}</span>
              <span className="ms-1 text-amber-500">{t('headerLastName')}</span>
            </div>
            <button className={`p-1 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`} onClick={toggleMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a href={item.href} className={`block py-2 hover:text-amber-500 transition-colors duration-300 ${theme === 'dark' ? 'hover:text-amber-400' : ''}`} onClick={toggleMenu}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
