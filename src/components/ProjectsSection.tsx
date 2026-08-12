import React from 'react';
import { MagicCard } from './magicui/magic-card';
import { Button } from './ui/Button';
import { projects } from '@/data/portfolio';
import { BlurFade } from './magicui/blur-fade';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl leading-[1.07] tracking-tight font-display font-semibold text-foreground mb-4">
              Projetos
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <BlurFade key={project.id} delay={0.15 * idx} inView>
              <MagicCard className="h-full flex flex-col cursor-pointer" gradientColor="rgba(0, 113, 227, 0.1)">
                {/* Project Image */}
                <div className="h-48 bg-muted flex items-center justify-center border-b border-border">
                  <div className="text-foreground text-6xl font-display font-semibold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl leading-[1.17] font-semibold tracking-tight font-display text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background border border-border text-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.projectUrl && (
                      <Button
                        href={project.projectUrl}
                        size="sm"
                        className="flex-1"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Projeto
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.6} inView>
          <div className="text-center mt-16">
            <Button href="https://github.com/welder-fernandes" variant="outline" size="lg">
              Ver Mais Projetos no GitHub
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
