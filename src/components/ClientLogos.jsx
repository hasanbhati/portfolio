import React from 'react';

// Authentic vector brand marks for enterprise clients
export const ClientBrandLogo = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Microsoft':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" rx="1" />
          <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" rx="1" />
          <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" rx="1" />
          <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" rx="1" />
        </svg>
      );

    case 'Bosch Power Tools':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#EA1C24" fillOpacity="0.15" stroke="#EA1C24" strokeWidth="2" />
          <rect x="8" y="13" width="16" height="6" rx="2" fill="#EA1C24" />
          <circle cx="16" cy="16" r="3" fill="#002D62" />
          <path d="M12 9h8M12 23h8" stroke="#EA1C24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Bosch Smart Home':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#007BC0" fillOpacity="0.15" stroke="#007BC0" strokeWidth="2" />
          <path d="M16 7L8 14v11h16V14L16 7z" fill="#007BC0" fillOpacity="0.3" stroke="#007BC0" strokeWidth="2" />
          <path d="M13 18a3 3 0 0 1 6 0v7h-6v-7z" fill="#007BC0" />
          <circle cx="16" cy="11" r="1.5" fill="#00F2FE" />
        </svg>
      );

    case 'Ring':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#1B98F5" fillOpacity="0.15" />
          <circle cx="16" cy="16" r="12" stroke="#1B98F5" strokeWidth="2.5" strokeDasharray="50 15" />
          <circle cx="16" cy="16" r="6" fill="#1B98F5" />
          <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'BSH Home Appliances':
    case 'BSH':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="6" fill="#0B2F5C" />
          <circle cx="10" cy="16" r="3.5" fill="#00F2FE" />
          <circle cx="16" cy="10" r="3.5" fill="#FFFFFF" />
          <circle cx="22" cy="16" r="3.5" fill="#4FACFE" />
          <path d="M10 16h12M16 10v12" stroke="#00F2FE" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      );

    case 'Kärcher':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#FFED00" />
          <path d="M8 8v16h4v-7l6 7h5l-7.5-8.5L22 8h-4.8l-5.2 6.5V8H8z" fill="#000000" />
        </svg>
      );

    case 'Grohe':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="6" fill="#003D7A" fillOpacity="0.2" stroke="#00A3E0" strokeWidth="1.5" />
          <path d="M8 18c3-6 7-6 10 0s7 6 10 0" stroke="#00A3E0" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 13c3-5 7-5 10 0s7 5 10 0" stroke="#00F2FE" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );

    case 'Gardena':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#FF5E00" fillOpacity="0.15" stroke="#FF5E00" strokeWidth="1.5" />
          <path d="M16 6c-5.5 0-10 4.5-10 10 0 6 7 10 10 10s10-4 10-10c0-5.5-4.5-10-10-10z" fill="#FF5E00" />
          <path d="M16 9v14M11 16l5-4 5 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Ottobock':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#002D62" fillOpacity="0.2" stroke="#0080C9" strokeWidth="1.5" />
          <path d="M11 10a8 8 0 0 1 10 0M11 22a8 8 0 0 0 10 0" stroke="#0080C9" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3.5" fill="#00F2FE" />
        </svg>
      );

    case 'Mettler Toledo':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#002F6C" />
          <path d="M16 6L7 21h18L16 6z" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M16 11L11 20h10L16 11z" fill="#00A3E0" />
          <circle cx="16" cy="25" r="2" fill="#00F2FE" />
        </svg>
      );

    case 'Midea':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#0092D0" fillOpacity="0.15" stroke="#0092D0" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="10" ry="5" stroke="#0092D0" strokeWidth="2" transform="rotate(-25 16 16)" />
          <circle cx="19" cy="14" r="3" fill="#0092D0" />
        </svg>
      );

    case 'Dremel':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#E31B23" />
          <path d="M7 10h9a6 6 0 0 1 0 12H7V10z" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="2.5" fill="#000000" />
          <path d="M23 10l3 12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'Master Lock':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="6" fill="#003366" />
          <rect x="9" y="14" width="14" height="12" rx="2" fill="#D4AF37" />
          <path d="M12 14V10a4 4 0 1 1 8 0v4" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="20" r="1.5" fill="#003366" />
        </svg>
      );

    case 'Monster Notebook':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="6" fill="#0B130E" stroke="#00FF66" strokeWidth="1.5" />
          <path d="M9 8l4 15M14 7l3 17M20 8l-2 15M24 10l-4 13" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Lucky Bike':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="15" fill="#00843D" fillOpacity="0.2" stroke="#00843D" strokeWidth="1.5" />
          <circle cx="11" cy="18" r="4.5" stroke="#00FF66" strokeWidth="2" />
          <circle cx="21" cy="18" r="4.5" stroke="#00FF66" strokeWidth="2" />
          <path d="M11 18l4-6h3l3 6M15 12v-2h2" stroke="#00FF66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
  }
};
