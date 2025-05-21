import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with cybersecurity theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-100/40 to-gray-100'}`}></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="mb-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{t('heroTitle')}</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-2 text-amber-500">{t('heroSubtitle')}</h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('heroLocation')}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/+201067393377"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Hire Me
              </a>
              <a
                href="#contact"
                className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                  theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-900/20' : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <i className="fas fa-envelope mr-2"></i>
                {t('heroContact')}
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
            <img src="/src/Pics/Logo.png" alt="Sara Ghoneim" className="h-64 w-64 md:h-80 md:w-80 object-contain" />
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className={`flex flex-col items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-amber-500 transition-colors duration-300`}>
            <span className="text-sm mb-2">Scroll</span>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
