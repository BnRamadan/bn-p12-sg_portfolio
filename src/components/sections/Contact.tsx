import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';

const Contact: React.FC = () => {
  const { t, language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <i className="fas fa-envelope text-xl"></i>,
      label: 'Email',
      value: 'sara.ghoneim2016@gmail.com',
      link: 'mailto:sara.ghoneim2016@gmail.com',
    },
    {
      icon: <i className="fas fa-phone text-xl"></i>,
      label: 'Phone',
      value: '01067393377',
      link: 'tel:+201067393377',
    },
    {
      icon: <i className="fab fa-linkedin text-xl"></i>,
      label: 'LinkedIn',
      value: 'Sara Ghoneim',
      link: 'https://www.linkedin.com/in/sara-ghoneim-357821273/',
    },
    {
      icon: <i className="fab fa-whatsapp text-xl"></i>,
      label: 'WhatsApp',
      value: 'Sara Ghoneim',
      link: 'https://wa.me/+201067393377',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('contactTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-lg flex items-center justify-between transition-all duration-300 hover:scale-105 group ${
                  theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${theme === 'dark' ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>{info.icon}</div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</p>
                    <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{info.value}</p>
                  </div>
                </div>
                <i className={`fas ${language === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'} text-lg ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-x-2`}></i>
              </a>
            ))}
          </div>

          <div className={`mt-12 p-6 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white shadow-md text-gray-700'}`}>
            <p className="text-lg">{t('contactSectionNote')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
