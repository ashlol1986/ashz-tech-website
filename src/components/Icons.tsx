import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

// Software & AI Icons
export const AIAgentIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
    <circle cx="8.5" cy="14.5" r="1.5"/>
    <circle cx="15.5" cy="14.5" r="1.5"/>
    <path d="M9 18h6"/>
  </svg>
);

export const KnowledgeBaseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M8 7h8"/>
    <path d="M8 11h8"/>
    <path d="M8 15h4"/>
  </svg>
);

export const AIAppIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const SoftwareDevIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
  </svg>
);

// BIM & 3D Icons
export const BIMIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20h20"/>
    <path d="M5 20V8l7-5 7 5v12"/>
    <path d="M9 20v-6h6v6"/>
    <path d="M9 10h6"/>
  </svg>
);

export const UnrealEngineIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
    <polygon points="10 8 10 13 14.5 10.5 10 8" fill="currentColor"/>
  </svg>
);

export const Web3DIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <ellipse cx="12" cy="12" rx="10" ry="4"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export const SimulationIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
    <line x1="12" y1="2" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
  </svg>
);

// Hardware Icons
export const EmbeddedIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M9 2v2"/>
    <path d="M15 2v2"/>
    <path d="M9 20v2"/>
    <path d="M15 20v2"/>
    <path d="M2 9h2"/>
    <path d="M2 15h2"/>
    <path d="M20 9h2"/>
    <path d="M20 15h2"/>
  </svg>
);

export const IoTIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5.636 18.364a9 9 0 0 1 0-12.728"/>
    <path d="M18.364 5.636a9 9 0 0 1 0 12.728"/>
    <path d="M8.464 15.536a5 5 0 0 1 0-7.072"/>
    <path d="M15.536 8.464a5 5 0 0 1 0 7.072"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const IndustrialIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20h20"/>
    <path d="M6 20V10l4 2V8l4 2V4l4 6v10"/>
    <path d="M6 14h2"/>
    <path d="M14 16h2"/>
  </svg>
);

export const SmartDeviceIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12" y2="18.01"/>
    <path d="M9 6h6"/>
    <path d="M9 9h6"/>
    <path d="M9 12h3"/>
  </svg>
);

// App Development Icons
export const IOSIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="3"/>
    <path d="M12 18h.01"/>
    <path d="M9 6h6"/>
  </svg>
);

export const AndroidIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 16V9a7 7 0 0 1 14 0v7"/>
    <rect x="4" y="16" width="16" height="6" rx="2"/>
    <circle cx="9" cy="7" r="1" fill="currentColor"/>
    <circle cx="15" cy="7" r="1" fill="currentColor"/>
    <path d="M6 3l2 3"/>
    <path d="M18 3l-2 3"/>
  </svg>
);

export const CrossPlatformIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
    <path d="M7 8h2"/>
    <path d="M7 11h4"/>
    <path d="M15 8h2"/>
    <path d="M15 11h2"/>
  </svg>
);

export const CloudAPIIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <path d="M12 12v4"/>
    <path d="M12 8v.01"/>
  </svg>
);

export default {
  AIAgentIcon,
  KnowledgeBaseIcon,
  AIAppIcon,
  SoftwareDevIcon,
  BIMIcon,
  UnrealEngineIcon,
  Web3DIcon,
  SimulationIcon,
  EmbeddedIcon,
  IoTIcon,
  IndustrialIcon,
  SmartDeviceIcon,
  IOSIcon,
  AndroidIcon,
  CrossPlatformIcon,
  CloudAPIIcon,
};
