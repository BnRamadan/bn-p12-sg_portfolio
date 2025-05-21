import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Shield, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: <Shield className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />,
      title: {
        en: 'Threat Detection',
        ar: 'كشف التهديدات',
      },
      description: {
        en: 'Specialized in identifying and analyzing security threats across various platforms and systems.',
        ar: 'متخصص في تحديد وتحليل التهديدات الأمنية عبر مختلف المنصات والأنظمة.',
      },
    },
    {
      icon: <Zap className={theme === 'dark' ? 'text-amber-400' : 'text-amber-500'} />,
      title: {
        en: 'Incident Response',
        ar: 'الاستجابة للحوادث',
      },
      description: {
        en: 'Experienced in developing and implementing effective response plans for security incidents.',
        ar: 'خبرة في وضع وتنفيذ خطط استجابة فعّالة للحوادث الأمنية.',
      },
    },
    {
      icon: <Sparkles className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />,
      title: {
        en: 'Security Monitoring',
        ar: 'مراقبة الأمن',
      },
      description: {
        en: 'Skilled in utilizing security tools and SIEM technologies for comprehensive system monitoring.',
        ar: 'مهارة في استخدام أدوات الأمن وتقنيات إدارة معلومات الأمن والأحداث (SIEM) لمراقبة شاملة للنظام.',
      },
    },
  ];

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('aboutTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg space-y-4`}>
            <p>{t('aboutDescription')}</p>
            <p className="font-medium text-amber-500">{t('aboutSpecialization')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.title[language]}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{feature.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
