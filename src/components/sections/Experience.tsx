import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Calendar, Shield, BarChart2 } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) timelineObserver.observe(item);
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      timelineItemsRef.current.forEach((item) => {
        if (item) timelineObserver.unobserve(item);
      });
    };
  }, []);

  const experiences = [
    {
      icon: <Shield size={22} className="text-blue-500" />, // Cybersecurity
      title: t('experience1Title'),
      company: t('experience1Company'),
      period: t('experience1Period'),
      description: t('experience1Desc'),
      highlights: t('experience1Highlights'),
      skills: t('experience1Skills'),
    },
    {
      icon: <BarChart2 size={22} className="text-amber-500" />, // Marketing
      title: t('experience2Title'),
      company: t('experience2Company'),
      period: t('experience2Period'),
      description: t('experience2Desc'),
      highlights: t('experience2Highlights'),
      skills: t('experience2Skills'),
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('experienceTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="relative">
          {/* Vertical line for timeline */}
          <div className={`absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} timeline-item opacity-0`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 md:left-1/2 transform translate-x-[-50%] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-white dark:border-gray-900 z-10"></div>
                {/* Timeline content */}
                <div className="md:w-1/2 relative">
                  <div className={`md:ml-8 md:mr-8 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg border border-gray-200'}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span>{exp.icon}</span>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${theme === 'dark' ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                        <Calendar size={14} className="inline mr-1" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                    <h4 className="text-lg font-medium mb-4 text-amber-500">{exp.company}</h4>

                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>

                    {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                      <ul className={`list-disc list-inside mb-4 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.highlights.map((highlight: string, idx: number) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    )}

                    {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill: string, idx: number) => (
                          <span key={idx} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2"></div> {/* Spacer for the other side */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
