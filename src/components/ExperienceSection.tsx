import React from 'react';
import { Card } from './ui/Card';
import { experiences } from '@/data/portfolio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl leading-[1.07] font-semibold tracking-tight font-display text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-2xl leading-[1.17] text-muted-foreground max-w-3xl mx-auto">
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
                          <h3 className="text-2xl leading-[1.17] font-semibold text-foreground">
                            {experience.position}
                          </h3>
                          <h4 className="text-lg text-foreground font-medium">
                            {experience.company}
                          </h4>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background border border-border text-foreground">
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-muted-foreground text-sm rounded"
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
          <h3 className="text-3xl leading-[1.14] font-semibold text-foreground mb-8 text-center">
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
                  <h4 className="text-lg font-semibold text-foreground">
                    UniSales - Centro Universitário Salesiano
                  </h4>
                  <p className="text-muted-foreground">
                    Graduação em Tecnologia da Informação
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Formação sólida em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos tecnológicos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

