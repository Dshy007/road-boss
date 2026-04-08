export default function TruckHero() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#B8E4F9" />
        </linearGradient>
        <linearGradient id="cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="cabDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="trailer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4EDFC" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="220" fill="url(#sky)" />

      {/* Clouds */}
      <ellipse cx="60" cy="45" rx="40" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="45" cy="42" rx="25" ry="18" fill="white" opacity="0.95" />
      <ellipse cx="80" cy="42" rx="28" ry="16" fill="white" opacity="0.95" />

      <ellipse cx="300" cy="35" rx="45" ry="22" fill="white" opacity="0.85" />
      <ellipse cx="280" cy="32" rx="30" ry="18" fill="white" opacity="0.9" />
      <ellipse cx="325" cy="30" rx="32" ry="16" fill="white" opacity="0.9" />

      <ellipse cx="180" cy="28" rx="30" ry="14" fill="white" opacity="0.7" />

      {/* City silhouette - light/friendly */}
      <rect x="15" y="80" width="28" height="90" rx="3" fill="#D1D5DB" />
      <rect x="48" y="60" width="22" height="110" rx="3" fill="#E5E7EB" />
      <rect x="75" y="75" width="32" height="95" rx="3" fill="#D1D5DB" />
      <rect x="112" y="55" width="18" height="115" rx="3" fill="#E5E7EB" />
      <rect x="135" y="70" width="26" height="100" rx="3" fill="#D1D5DB" />
      {/* Windows on buildings */}
      <rect x="22" y="88" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />
      <rect x="30" y="88" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />
      <rect x="22" y="96" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />
      <rect x="30" y="96" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />
      <rect x="22" y="104" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />
      <rect x="30" y="104" width="4" height="4" rx="1" fill="#87CEEB" opacity="0.6" />

      <rect x="290" y="70" width="24" height="100" rx="3" fill="#E5E7EB" />
      <rect x="320" y="55" width="30" height="115" rx="3" fill="#D1D5DB" />
      <rect x="355" y="75" width="30" height="95" rx="3" fill="#E5E7EB" />

      {/* Road */}
      <rect x="0" y="170" width="400" height="50" fill="url(#road)" />
      {/* Road center line */}
      <rect x="15" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="65" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="115" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="165" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="215" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="265" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="315" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="365" y="188" width="35" height="3" rx="1.5" fill="#FCD34D" />

      {/* Sidewalk */}
      <rect x="0" y="167" width="400" height="6" fill="#D1D5DB" />

      {/* === TRUCK === */}

      {/* Trailer shadow */}
      <ellipse cx="170" cy="180" rx="110" ry="6" fill="rgba(0,0,0,0.1)" />

      {/* Trailer body */}
      <rect x="55" y="105" width="185" height="62" rx="4" fill="url(#trailer)" stroke="#D1D5DB" strokeWidth="1" />

      {/* Trailer panel lines */}
      <line x1="95" y1="105" x2="95" y2="167" stroke="#E5E7EB" strokeWidth="1.5" />
      <line x1="135" y1="105" x2="135" y2="167" stroke="#E5E7EB" strokeWidth="1.5" />
      <line x1="175" y1="105" x2="175" y2="167" stroke="#E5E7EB" strokeWidth="1.5" />
      <line x1="215" y1="105" x2="215" y2="167" stroke="#E5E7EB" strokeWidth="1.5" />

      {/* Trailer bottom frame */}
      <rect x="50" y="165" width="195" height="8" rx="2" fill="#374151" />

      {/* "ROAD BOSS" on trailer */}
      <text x="150" y="145" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="20" fill="#1E3A8A" letterSpacing="0.12em">ROAD BOSS</text>
      <text x="150" y="157" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#6B7280" letterSpacing="0.15em">SAFETY PAYS</text>

      {/* Gold accent stripe on trailer top */}
      <rect x="55" y="103" width="185" height="4" rx="1" fill="#FCD34D" />

      {/* Connector between trailer and cab */}
      <rect x="238" y="115" width="8" height="50" rx="2" fill="#374151" />

      {/* Cab body */}
      <path d="M245 108 L245 168 L310 168 L310 125 Q310 110 295 105 L270 100 Q258 97 248 105 Z" fill="url(#cab)" />

      {/* Cab roof detail */}
      <path d="M250 108 L248 105 Q258 97 270 100 L290 104 Q300 107 305 115 L255 115 Z" fill="url(#cabDark)" />

      {/* Windshield */}
      <path d="M265 104 L288 102 Q298 108 300 120 L268 120 Z" fill="url(#glass)" stroke="#93C5FD" strokeWidth="1" />

      {/* Side window */}
      <rect x="252" y="118" width="14" height="16" rx="2" fill="url(#glass)" stroke="#93C5FD" strokeWidth="0.5" />

      {/* Door handle */}
      <rect x="254" y="138" width="8" height="2" rx="1" fill="#93C5FD" />

      {/* Cab chrome trim */}
      <rect x="245" y="166" width="70" height="4" rx="1" fill="url(#chrome)" />

      {/* Headlight */}
      <rect x="306" y="130" width="6" height="14" rx="3" fill="#FCD34D" />
      <rect x="306" y="130" width="6" height="7" rx="3" fill="white" opacity="0.6" />

      {/* Turn signal */}
      <rect x="306" y="148" width="5" height="5" rx="1.5" fill="#F97316" opacity="0.8" />

      {/* Bumper */}
      <rect x="305" y="155" width="12" height="14" rx="3" fill="url(#chrome)" />

      {/* Grille */}
      <rect x="307" y="132" width="3" height="20" rx="1" fill="#9CA3AF" />

      {/* Exhaust stack */}
      <rect x="250" y="82" width="6" height="28" rx="3" fill="url(#chrome)" />
      <rect x="249" y="80" width="8" height="4" rx="2" fill="#9CA3AF" />

      {/* Mud flaps */}
      <rect x="242" y="165" width="6" height="8" rx="1" fill="#374151" />

      {/* Fuel tank */}
      <rect x="252" y="150" width="15" height="12" rx="3" fill="#6B7280" stroke="#9CA3AF" strokeWidth="0.5" />

      {/* === WHEELS === */}
      {/* Trailer front axle */}
      <circle cx="85" cy="176" r="15" fill="#374151" />
      <circle cx="85" cy="176" r="11" fill="#1F2937" />
      <circle cx="85" cy="176" r="6" fill="#4B5563" />
      <circle cx="85" cy="176" r="3" fill="url(#chrome)" />

      {/* Trailer rear axle */}
      <circle cx="115" cy="176" r="15" fill="#374151" />
      <circle cx="115" cy="176" r="11" fill="#1F2937" />
      <circle cx="115" cy="176" r="6" fill="#4B5563" />
      <circle cx="115" cy="176" r="3" fill="url(#chrome)" />

      {/* Trailer 3rd axle */}
      <circle cx="215" cy="176" r="15" fill="#374151" />
      <circle cx="215" cy="176" r="11" fill="#1F2937" />
      <circle cx="215" cy="176" r="6" fill="#4B5563" />
      <circle cx="215" cy="176" r="3" fill="url(#chrome)" />

      {/* Cab drive wheels */}
      <circle cx="280" cy="176" r="15" fill="#374151" />
      <circle cx="280" cy="176" r="11" fill="#1F2937" />
      <circle cx="280" cy="176" r="6" fill="#4B5563" />
      <circle cx="280" cy="176" r="3" fill="url(#chrome)" />

      {/* Steer wheel */}
      <circle cx="300" cy="176" r="13" fill="#374151" />
      <circle cx="300" cy="176" r="9" fill="#1F2937" />
      <circle cx="300" cy="176" r="5" fill="#4B5563" />
      <circle cx="300" cy="176" r="2.5" fill="url(#chrome)" />

      {/* Speed lines */}
      <rect x="8" y="135" width="28" height="2.5" rx="1.25" fill="#60A5FA" opacity="0.4" />
      <rect x="3" y="145" width="38" height="2.5" rx="1.25" fill="#60A5FA" opacity="0.3" />
      <rect x="12" y="155" width="22" height="2.5" rx="1.25" fill="#60A5FA" opacity="0.35" />

      {/* Small grass tufts */}
      <path d="M10 170 L13 162 L16 170" fill="#86EFAC" opacity="0.6" />
      <path d="M360 170 L363 163 L366 170" fill="#86EFAC" opacity="0.6" />
      <path d="M185 170 L187 164 L189 170" fill="#86EFAC" opacity="0.5" />
    </svg>
  );
}
