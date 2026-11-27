import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Portfólio de Welder Nascimento Fernandes, desenvolvedor fullstack especializado em React, Node.js, TypeScript e desenvolvimento mobile.";

export const metadata: Metadata = {
  title: "Welder Nascimento Fernandes - Desenvolvedor Fullstack",
  description,
  keywords: ["desenvolvedor", "fullstack", "react", "nodejs", "typescript", "javascript", "portfolio"],
  authors: [{ name: "Welder Nascimento Fernandes" }],
  openGraph: {
    title: "Welder Nascimento Fernandes - Desenvolvedor Fullstack",
    description,
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#e9eceb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Liga os estados iniciais das animações só quando há JS (sem JS, tudo aparece) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
