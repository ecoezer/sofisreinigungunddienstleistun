export const HomeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="url(#home-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V12H15V21" stroke="url(#home-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="home-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const OfficeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="url(#office-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21V7L13 3V21" stroke="url(#office-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 21V9H19V21" stroke="url(#office-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9V9.01M9 12V12.01M9 15V15.01M9 18V18.01M16 15V15.01M16 18V18.01" stroke="url(#office-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="office-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const WindowIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#window-gradient)" strokeWidth="2"/>
    <path d="M3 12H21M12 3V21" stroke="url(#window-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="window-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const SparkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z" stroke="url(#sparkle-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="url(#sparkle-fill)"/>
    <path d="M18 3L19 6L22 7L19 8L18 11L17 8L14 7L17 6L18 3Z" stroke="url(#sparkle-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="sparkle-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
      <linearGradient id="sparkle-fill" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981" stopOpacity="0.1"/>
        <stop offset="1" stopColor="#06b6d4" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
  </svg>
)

export const CarpetIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="16" height="12" rx="1" stroke="url(#carpet-gradient)" strokeWidth="2"/>
    <path d="M4 9H20M4 12H20M4 15H20" stroke="url(#carpet-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 6V18M10 6V18M14 6V18M17 6V18" stroke="url(#carpet-gradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <defs>
      <linearGradient id="carpet-gradient" x1="4" y1="6" x2="20" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const IronIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14H17C18.6569 14 20 15.3431 20 17V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V17C4 15.3431 5.34315 14 7 14Z" stroke="url(#iron-gradient)" strokeWidth="2"/>
    <path d="M7 14V8C7 6.89543 7.89543 6 9 6H17V14" stroke="url(#iron-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 10H22" stroke="url(#iron-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="iron-gradient" x1="4" y1="6" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#check-gradient)"/>
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="check-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9203 21 20.92C10.0736 20.9203 1.07969 11.9264 1.08 1C1.07969 0.447715 1.52715 0 2.08 0H5.08C5.63229 0 6.08 0.447715 6.08 1V1C6.11 3.07 6.51 5.05 7.22 6.88C7.36 7.26 7.25 7.69 6.94 7.96L5.25 9.48C6.93 12.92 9.71 15.7 13.15 17.38L14.67 15.69C14.94 15.38 15.37 15.27 15.75 15.41C17.58 16.12 19.56 16.52 21.63 16.55H21.64C22.1928 16.55 22.64 16.9977 22.64 17.55V20.55" stroke="url(#phone-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="phone-gradient" x1="1" y1="0" x2="22" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#mail-gradient)" strokeWidth="2"/>
    <path d="M3 7L12 13L21 7" stroke="url(#mail-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="mail-gradient" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="url(#location-gradient)" strokeWidth="2"/>
    <circle cx="12" cy="9" r="2.5" stroke="url(#location-gradient)" strokeWidth="2"/>
    <defs>
      <linearGradient id="location-gradient" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="url(#clock-gradient)" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="url(#clock-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="clock-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)

export const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#star-gradient)" stroke="url(#star-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="star-gradient" x1="2" y1="2" x2="22" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
)
