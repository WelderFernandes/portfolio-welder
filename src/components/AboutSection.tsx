import React from 'react';
import { Card } from './ui/Card';
import { personalInfo } from '@/data/portfolio';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada e experiência no desenvolvimento de software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Desenvolvedor Fullstack Apaixonado por Tecnologia
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Sou um desenvolvedor fullstack com experiência sólida em tecnologias modernas como React, Node.js, TypeScript e desenvolvimento mobile com React Native. Atualmente trabalho na Prefeitura Municipal de Cariacica, onde desenvolvo e mantenho sistemas web para gestão municipal.
              </p>
              
              <p>
                Minha paixão pela tecnologia me leva a estar sempre aprendendo e explorando novas ferramentas e frameworks. Acredito que a tecnologia deve ser usada para resolver problemas reais e melhorar a vida das pessoas.
              </p>
              
              <p>
                Tenho experiência tanto no desenvolvimento frontend, criando interfaces modernas e responsivas, quanto no backend, construindo APIs robustas e escaláveis. Também trabalho com bancos de dados relacionais e tenho conhecimento em DevOps e deploy de aplicações.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Localização
              </h4>
              <p className="text-gray-700 dark:text-gray-300 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center" hover>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Anos de Experiência
              </div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Projetos Concluídos
              </div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Tecnologias
              </div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Dedicação
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

