import React from "react";
import { Card } from "./ui/Card";
import { personalInfo } from "@/data/portfolio";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl leading-[1.07] tracking-tight font-display font-semibold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada e experiência no desenvolvimento de software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl leading-[1.14] tracking-tight font-display font-semibold text-foreground mb-6">
              Desenvolvedor Fullstack Apaixonado por Tecnologia
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
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
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Localização
              </h4>
              <p className="text-muted-foreground flex items-center bg-muted/50 w-fit px-4 py-2 rounded-full border border-border">
                <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="order-1 md:order-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
            <Card className="p-6 text-center" hover>
              <div className="text-4xl leading-[1.10] font-semibold tracking-tight font-display text-foreground mb-2">6+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-4xl leading-[1.10] font-semibold tracking-tight font-display text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Projetos Concluídos</div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-4xl leading-[1.10] font-semibold tracking-tight font-display text-foreground mb-2">10+</div>
              <div className="text-muted-foreground">Tecnologias</div>
            </Card>

            <Card className="p-6 text-center" hover>
              <div className="text-4xl leading-[1.10] font-semibold tracking-tight font-display text-foreground mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Dedicação</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
