import React from 'react';
import { Card } from './ui/Card';
import { experiences } from '@/data/portfolio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Minha trajetória profissional e as experiências que moldaram minha carreira
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <Card className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                          <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                            {experience.company}
                          </h4>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Formação Acadêmica
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    UniSales - Centro Universitário Salesiano
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduação em Tecnologia da Informação
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Formação sólida em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos tecnológicos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

