import React from 'react';
import { Card } from './ui/Card';
import { skills } from '@/data/portfolio';

export const SkillsSection: React.FC = () => {
  const skillCategories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Banco de Dados',
    tools: 'Ferramentas'
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert':
        return 'Especialista';
      case 'advanced':
        return 'Avançado';
      case 'intermediate':
        return 'Intermediário';
      case 'beginner':
        return 'Iniciante';
      default:
        return 'Iniciante';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, title]) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {title}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs text-white ${getLevelColor(skill.level)}`}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Principais Tecnologias
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills
              .filter(skill => skill.level === 'expert' || skill.level === 'advanced')
              .slice(0, 8)
              .map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

