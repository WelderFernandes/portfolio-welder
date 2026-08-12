import React from "react";
import { Button } from "./ui/Button";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";
import { WordRotate } from "./magicui/word-rotate";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <BlurFade delay={0.25} inView className="w-full">
              <h1 className="text-[2.75rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[1.05] tracking-tight font-display text-foreground mb-4 sm:mb-6">
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="block mt-1 sm:mt-2">
                  <WordRotate
                    className="text-gradient inline-block"
                    words={["Desenvolvedor", "Criativo", "Fullstack"]}
                  />
                </span>
              </h1>
            </BlurFade>
            
            <BlurFade delay={0.25 * 2} inView>
              <h2 className="text-2xl md:text-3xl leading-[1.14] text-muted-foreground font-medium mb-6">
                {personalInfo.title}
              </h2>
            </BlurFade>

            <BlurFade delay={0.25 * 3} inView>
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl mb-10">
                {personalInfo.description}
              </p>
            </BlurFade>

            <BlurFade delay={0.25 * 4} inView>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button href="#projects" size="lg" className="px-8 text-base">
                  Ver Projetos
                </Button>
                <Button href="#contact" variant="outline" size="lg" className="px-8 text-base">
                  Entre em Contato
                </Button>
              </div>
            </BlurFade>

            {/* Social Links */}
            <BlurFade delay={0.25 * 5} inView>
              <div className="flex items-center justify-center lg:justify-start space-x-5 mt-12">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-panel text-foreground hover:text-white hover:bg-gradient-modern transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-panel text-foreground hover:text-white hover:bg-gradient-modern transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Profile Image - Vibrant approach */}
          <BlurFade delay={0.25} inView className="lg:w-1/2 flex justify-center mt-6 lg:mt-0 w-full max-w-sm lg:max-w-none mx-auto">
            <div className="relative w-full aspect-square md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] lg:rounded-[32px] overflow-hidden border-2 border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-modern opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
              <Image
                src="/me.jpg"
                fill
                alt={personalInfo.name}
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                draggable={false}
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
