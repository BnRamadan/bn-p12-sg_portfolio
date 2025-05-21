import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-t border-gray-800' : 'bg-gray-100 text-gray-700 border-t border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-bold mb-2">
              <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>{t('headerFirstName')}</span>
              <span className="ms-1 text-amber-500">{t('headerLastName')}</span>
            </div>
          </div>

          <div className="flex space-x-6 rtl:space-x-reverse mb-4 md:mb-0">
            <a href="https://www.linkedin.com/in/sara-ghoneim-357821273/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:sara.ghoneim2016@gmail.com" className="hover:text-amber-500 transition-colors duration-300">
              <i className="fas fa-envelope text-xl"></i>
              <span className="sr-only">Email</span>
            </a>
            <a href="https://wa.me/+201067393377" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors duration-300">
              <i className="fab fa-whatsapp text-xl"></i>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>

          <div className="text-sm">
            <p>
              © {currentYear} {t('footerRights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
