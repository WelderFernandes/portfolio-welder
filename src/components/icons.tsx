type P = { size?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ size = 20, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" {...base}>
    <path d={open ? "M6 6L18 18M18 6L6 18" : "M5 9h14M5 15h14"} />
  </svg>
);

export const GithubIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" {...base}>
    <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.9 1.5 4.8 1.8 4.8 1.8a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.3 9c0 5.1 3.1 6.3 6.1 6.6a3 3 0 0 0-.9 2.4V22" />
  </svg>
);

export const LinkedinIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13c0-1.7 1-2.5 2.2-2.5S16 11.3 16 13v3" />
  </svg>
);

export const MailIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </svg>
);

export const PinIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" {...base}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const CheckIcon = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="var(--petrol)" />
    <path d="M6 10.5L8.7 13L14 7.5" fill="none" stroke="var(--paper)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
