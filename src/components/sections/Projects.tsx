import React, { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { ExternalLink, Code, LineChart, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('all');

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

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      image: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: <LineChart size={24} />,
      tools: t('project1Tools'),
      link: '#',
      category: 'analysis',
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      image: 'https://images.pexels.com/photos/14553709/pexels-photo-14553709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: <Code size={24} />,
      tools: t('project2Tools'),
      link: '#',
      category: 'frameworks',
    },
    {
      title: t('project3Title'),
      description: t('project3Desc'),
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Clock size={24} />,
      tools: t('project3Tools'),
      link: '#',
      category: 'tools',
    },
  ];

  const filters = [
    { id: 'all', name: 'projectsAll' },
    { id: 'tools', name: 'projectsTools' },
    { id: 'analysis', name: 'projectsAnalysis' },
    { id: 'frameworks', name: 'projectsFrameworks' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} fade-in-section`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('projectsTitle')}</h2>
          <div className={`w-20 h-1 mx-auto rounded ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === item.id
                    ? theme === 'dark'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {t(item.name)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-white shadow-md border border-gray-200'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{project.icon}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project.tools) &&
                    project.tools.map((tool: string, idx: number) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {tool}
                      </span>
                    ))}
                </div>

                <a
                  href={project.link}
                  className={`inline-flex items-center text-sm font-medium transition-colors duration-300 ${
                    theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Learn More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
