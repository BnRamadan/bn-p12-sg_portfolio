import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { GraduationCap, Award } from 'lucide-react';
import certificateImage from '../../Pics/Certificate.jpeg';

const Education: React.FC = () => {
  const { t } = useContext(LanguageContext);
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

  const certificateShortDesc = {
    en: 'Cybersecurity Internship Certificate from NTI (Jan–Feb 2024)',
    ar: 'شهادة تدريب الأمن السيبراني من المعهد القومي للاتصالات (يناير – فبراير 2024)',
  };

  return (
    <section id="education" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('educationTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Education */}
          <div className="w-full max-w-xl">
            <div className={`flex items-center mb-6 justify-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              <GraduationCap size={28} className="mr-3" />
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Education</h3>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50 shadow-md'}`}>
              <div className="flex flex-col items-center mb-4 gap-2">
                <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('educationDegree')}</h4>
                <p className="text-amber-500 font-medium">{t('educationUniversity')}</p>
                <span className={`px-3 py-1 text-sm rounded-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>{t('educationPeriod')}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="w-full max-w-xl">
            <div className={`flex items-center mb-6 justify-center ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>
              <Award size={28} className="mr-3" />
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
            </div>
            <div className={`p-5 rounded-lg flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50 shadow-md'}`}>
              <div className="mb-4 w-full flex justify-center">
                <img src={certificateImage} alt="certificate" className="w-auto max-h-72 rounded-lg shadow-lg" />
              </div>
              <p className={`text-center font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t && t('navHome') === 'Home' ? certificateShortDesc.en : certificateShortDesc.ar}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
