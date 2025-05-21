import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={language === 'ar' ? 'العودة للأعلى' : 'Scroll to top'}
      className={`fixed z-50 bottom-8 ${
        language === 'ar' ? 'left-8' : 'right-8'
      } bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center animate-bounce ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
    >
      <i className="fas fa-arrow-up text-2xl"></i>
    </button>
  );
};

export default ScrollToTopButton;
