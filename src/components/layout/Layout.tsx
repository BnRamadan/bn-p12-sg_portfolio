import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isRTL ? 'font-tajawal' : 'font-inter'
      } ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
