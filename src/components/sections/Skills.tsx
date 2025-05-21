import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import ProgressBar from '../ui/ProgressBar';
import { Shield, Network, Code, AlertCircle } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      icon: <Shield size={24} />,
      title: 'SOC Analysis',
      skills: [
        { name: 'skillSIEM', level: 95 },
        { name: 'skillThreatHunting', level: 90 },
      ],
    },
    {
      icon: <Network size={24} />,
      title: 'Networking',
      skills: [
        { name: 'skillNetworking', level: 85 },
        { name: 'skillFirewalls', level: 90 },
        { name: 'skillIDS', level: 80 },
      ],
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Security Tools',
      skills: [
        { name: 'skillKibana', level: 95 },
        { name: 'skillSecurityOnion', level: 85 },
        { name: 'skillWireshark', level: 90 },
      ],
    },
    {
      icon: <Code size={24} />,
      title: 'Programming',
      skills: [
        { name: 'skillCPP', level: 75 },
        { name: 'skillPython', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('skillsTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`rounded-lg p-6 transition-transform hover:translate-y-[-5px] ${theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>{category.icon}</div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t(skill.name)}</span>
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                    </div>
                    <ProgressBar
                      progress={skill.level}
                      colorClass={skill.level >= 90 ? 'bg-blue-500' : skill.level >= 80 ? 'bg-amber-500' : 'bg-teal-500'}
                      backgroundColor={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg text-center relative overflow-hidden">
          <div className={`absolute inset-0 opacity-20 ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>

          <div className="relative z-10">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('skillsExpertiseTitle')}</h3>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t('skillsExpertiseDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
