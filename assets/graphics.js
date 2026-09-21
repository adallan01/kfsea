/* ==========================================================================
   Kadala Fire & Safety EA
   Original technical illustrations and icon system, drawn on the Kadala
   palette. Nothing here reproduces a manufacturer's product or branding.
   ========================================================================== */

const C = {
  ink:'#202225', char:'#4E5156',
  red:'#B33632', redDark:'#8E2A27', redLight:'#C9463F',
  steel:'#D3DDE6', steelDark:'#A9B8C6', steelLight:'#E9EFF5',
  white:'#FFFFFF',
  safetyGreen:'#1F7A4D'   /* used only inside regulated signage illustrations */
};

/* ---------------- Equipment illustrations ---------------- */

function svgExtinguisher(kind){
  const map = {
    powder:{body:C.red,   dark:C.redDark,  band:C.white, txt:C.ink,   code:'ABC'},
    co2:   {body:C.ink,   dark:'#141518',  band:C.char,  txt:C.white, code:'CO\u2082'},
    foam:  {body:C.red,   dark:C.redDark,  band:C.steel, txt:C.ink,   code:'AFFF'},
    water: {body:C.red,   dark:C.redDark,  band:C.steelLight, txt:C.ink, code:'H\u2082O'}
  };
  const m = map[kind] || map.powder;
  return `<svg viewBox="0 0 132 208" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 30h30a4 4 0 0 1 0 8H52z" fill="${C.steelDark}"/>
    <path d="M48 18h34a5 5 0 0 1 5 5v4H48z" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <rect x="58" y="27" width="16" height="12" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="94" cy="22" r="7" fill="none" stroke="${C.red}" stroke-width="3.4"/>
    <rect x="56" y="38" width="20" height="12" rx="2" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.4"/>
    <path d="M40 66c0-9 8-16 26-16s26 7 26 16v104c0 8-5 12-14 12H54c-9 0-14-4-14-12z" fill="${m.body}" stroke="${C.ink}" stroke-width="3"/>
    <path d="M40 66c0-9 8-16 26-16v132H54c-9 0-14-4-14-12z" fill="${m.dark}" opacity=".3"/>
    <rect x="43" y="63" width="9" height="110" rx="4.5" fill="${C.white}" opacity=".22"/>
    <rect x="40" y="96" width="52" height="40" fill="${m.band}" stroke="${C.ink}" stroke-width="2.2"/>
    <text x="66" y="118" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="13" font-weight="800" fill="${m.txt}">${m.code}</text>
    <text x="66" y="130" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="7" font-weight="600" letter-spacing="1" fill="${m.txt}" opacity=".7">KEBS</text>
    <path d="M92 74c18 6 20 34 8 52" fill="none" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>
    <path d="M92 74c18 6 20 34 8 52" fill="none" stroke="${C.char}" stroke-width="3" stroke-linecap="round"/>
    ${kind==='co2'
      ? `<path d="M100 126l18-8 6 24-20 6z" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.6" stroke-linejoin="round"/>`
      : `<rect x="96" y="124" width="22" height="9" rx="3" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.4"/>`}
    <rect x="46" y="178" width="40" height="8" rx="2" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.4"/>
  </svg>`;
}

function svgBlanket(){
  return `<svg viewBox="0 0 170 190" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="32" y="20" width="106" height="132" rx="7" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
    <path d="M32 27a7 7 0 0 1 7-7h27v132H39a7 7 0 0 1-7-7z" fill="${C.redDark}" opacity=".3"/>
    <rect x="46" y="38" width="78" height="46" rx="3" fill="${C.white}" stroke="${C.ink}" stroke-width="2.2"/>
    <text x="85" y="58" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="13" font-weight="800" fill="${C.ink}">FIRE</text>
    <text x="85" y="74" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="13" font-weight="800" fill="${C.ink}">BLANKET</text>
    <rect x="46" y="94" width="78" height="20" rx="2" fill="${C.white}" opacity=".2"/>
    <text x="85" y="108" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="9" font-weight="600" letter-spacing="1" fill="${C.white}">1.2m x 1.2m</text>
    <path d="M62 152v22M108 152v22" stroke="${C.white}" stroke-width="9" stroke-linecap="round"/>
    <circle cx="62" cy="176" r="5" fill="${C.steel}" stroke="${C.ink}" stroke-width="2"/>
    <circle cx="108" cy="176" r="5" fill="${C.steel}" stroke="${C.ink}" stroke-width="2"/>
  </svg>`;
}

function svgDetector(type){
  const heat = type === 'heat';
  return `<svg viewBox="0 0 190 150" role="img" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="95" cy="112" rx="72" ry="22" fill="${C.steelDark}" opacity=".22"/>
    <ellipse cx="95" cy="96" rx="70" ry="22" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="3"/>
    <path d="M25 78v18a70 22 0 0 0 140 0V78z" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="3"/>
    <ellipse cx="95" cy="78" rx="70" ry="22" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <ellipse cx="95" cy="74" rx="44" ry="13" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2.2"/>
    ${heat
      ? `<ellipse cx="95" cy="70" rx="17" ry="6" fill="${C.red}" stroke="${C.ink}" stroke-width="2.2"/>
         <path d="M95 52v12" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>`
      : `<g opacity=".8" fill="${C.steelDark}">
           <ellipse cx="70" cy="74" rx="8" ry="3"/><ellipse cx="95" cy="76" rx="8" ry="3"/><ellipse cx="120" cy="74" rx="8" ry="3"/>
         </g>`}
    <circle cx="140" cy="84" r="5.5" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>
    <g fill="none" stroke="${C.red}" stroke-width="2.6" stroke-linecap="round" opacity=".6">
      <path d="M52 118a52 52 0 0 0 86 0"/><path d="M38 132a70 70 0 0 0 114 0" opacity=".55"/>
    </g>
  </svg>`;
}

function svgPanel(kind){
  const addressable = kind === 'addressable';
  return `<svg viewBox="0 0 180 200" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="16" width="136" height="168" rx="8" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="22" y="16" width="30" height="168" rx="8" fill="${C.redDark}" opacity=".32"/>
    <rect x="36" y="32" width="108" height="48" rx="4" fill="${C.ink}" stroke="${C.ink}" stroke-width="2.4"/>
    <text x="46" y="52" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="10" font-weight="700" fill="${C.steel}">SYSTEM NORMAL</text>
    <text x="46" y="68" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="9" font-weight="500" fill="${C.steelDark}">${addressable?'ZONES 1-64  OK':'ZONES 1-8  OK'}</text>
    <circle cx="48" cy="98" r="6" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2"/>
    <circle cx="48" cy="118" r="6" fill="${C.steel}" stroke="${C.ink}" stroke-width="2"/>
    <circle cx="48" cy="138" r="6" fill="${C.white}" stroke="${C.ink}" stroke-width="2"/>
    <rect x="60" y="94" width="42" height="8" rx="2" fill="${C.white}" opacity=".55"/>
    <rect x="60" y="114" width="52" height="8" rx="2" fill="${C.white}" opacity=".4"/>
    <rect x="60" y="134" width="34" height="8" rx="2" fill="${C.white}" opacity=".4"/>
    <g fill="${C.white}" stroke="${C.ink}" stroke-width="2.2">
      <rect x="36" y="154" width="30" height="16" rx="3"/><rect x="74" y="154" width="30" height="16" rx="3"/><rect x="112" y="154" width="32" height="16" rx="3"/>
    </g>
    <rect x="112" y="96" width="32" height="46" rx="3" fill="${C.redDark}" stroke="${C.ink}" stroke-width="2.2"/>
    <circle cx="128" cy="112" r="6" fill="${C.steel}" stroke="${C.ink}" stroke-width="2"/>
    <path d="M128 106v-6" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/>
    <text x="90" y="196" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1.4" fill="${C.char}">${addressable?'ADDRESSABLE':'CONVENTIONAL'}</text>
  </svg>`;
}

function svgCallPoint(){
  return `<svg viewBox="0 0 160 170" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="20" width="108" height="118" rx="9" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="26" y="20" width="26" height="118" rx="9" fill="${C.redDark}" opacity=".32"/>
    <rect x="44" y="40" width="72" height="56" rx="4" fill="${C.white}" stroke="${C.ink}" stroke-width="2.6"/>
    <path d="M52 68h56" stroke="${C.red}" stroke-width="7" stroke-linecap="round"/>
    <text x="80" y="58" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="10" font-weight="800" fill="${C.ink}">PRESS HERE</text>
    <text x="80" y="88" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="7.5" font-weight="600" letter-spacing=".6" fill="${C.char}">RESETTABLE ELEMENT</text>
    <rect x="44" y="106" width="72" height="16" rx="3" fill="${C.white}" opacity=".22"/>
    <text x="80" y="118" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1" fill="${C.white}">FIRE ALARM</text>
    <path d="M56 138v12M104 138v12" stroke="${C.steelDark}" stroke-width="5" stroke-linecap="round"/>
  </svg>`;
}

function svgSounder(){
  return `<svg viewBox="0 0 170 160" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="66" y="112" width="38" height="24" rx="4" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2.6"/>
    <path d="M40 104a45 45 0 0 1 90 0z" fill="${C.red}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 104a45 45 0 0 1 45-45v45z" fill="${C.redDark}" opacity=".3"/>
    <rect x="34" y="102" width="102" height="12" rx="5" fill="${C.redDark}" stroke="${C.ink}" stroke-width="2.6"/>
    <circle cx="85" cy="74" r="12" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.4"/>
    <g fill="none" stroke="${C.red}" stroke-width="3" stroke-linecap="round">
      <path d="M22 62a34 34 0 0 1 8-20"/><path d="M8 66a52 52 0 0 1 12-32" opacity=".55"/>
      <path d="M148 62a34 34 0 0 0-8-20"/><path d="M162 66a52 52 0 0 0-12-32" opacity=".55"/>
    </g>
  </svg>`;
}

function svgEmergencyLight(){
  return `<svg viewBox="0 0 200 150" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="46" y="26" width="108" height="34" rx="5" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="46" y="26" width="108" height="10" rx="5" fill="${C.steelLight}"/>
    <circle cx="140" cy="43" r="4" fill="${C.red}" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="60" y="49" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1" fill="${C.char}">3H AUTONOMY</text>
    <circle cx="74" cy="72" r="15" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2.8"/>
    <circle cx="74" cy="72" r="7" fill="${C.white}" stroke="${C.steelDark}" stroke-width="1.5"/>
    <circle cx="126" cy="72" r="15" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2.8"/>
    <circle cx="126" cy="72" r="7" fill="${C.white}" stroke="${C.steelDark}" stroke-width="1.5"/>
    <path d="M74 80l-32 58h64z" fill="${C.steel}" opacity=".55"/>
    <path d="M126 80l-32 58h64z" fill="${C.steel}" opacity=".55"/>
    <path d="M20 138h160" stroke="${C.ink}" stroke-width="2.6" stroke-linecap="round" opacity=".35"/>
  </svg>`;
}

function svgSign(type){
  if(type === 'extinguisher'){
    return `<svg viewBox="0 0 200 120" role="img" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="14" width="164" height="92" rx="5" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
      <rect x="30" y="26" width="46" height="68" rx="3" fill="${C.white}" opacity=".95"/>
      <path d="M46 44h14v40H46z" fill="${C.red}"/>
      <rect x="48" y="36" width="10" height="8" fill="${C.ink}"/>
      <text x="130" y="56" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="19" font-weight="800" fill="${C.white}">FIRE</text>
      <text x="130" y="82" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="19" font-weight="800" fill="${C.white}">POINT</text>
    </svg>`;
  }
  if(type === 'assembly'){
    return `<svg viewBox="0 0 200 120" role="img" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="14" width="164" height="92" rx="5" fill="${C.safetyGreen}" stroke="${C.ink}" stroke-width="3"/>
      <g fill="${C.white}">
        <circle cx="52" cy="40" r="7"/><path d="M45 50h14l4 30h-6l-2-18-2 18h-6l-2-18-2 18h-6z"/>
        <circle cx="76" cy="44" r="6"/><path d="M70 53h12l3 27h-5l-2-16-1 16h-5l-1-16-2 16h-5z"/>
      </g>
      <text x="140" y="52" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="15" font-weight="800" fill="${C.white}">ASSEMBLY</text>
      <text x="140" y="76" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="15" font-weight="800" fill="${C.white}">POINT</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 200 120" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="14" width="164" height="92" rx="5" fill="${C.safetyGreen}" stroke="${C.ink}" stroke-width="3"/>
    <g fill="${C.white}">
      <circle cx="62" cy="36" r="8"/>
      <path d="M58 46l14-3 9 16-7 4-5-8-3 11 12 14 3 20h-9l-3-16-13-13 2-16-10 6-6 12-7-3 8-16z"/>
    </g>
    <path d="M104 26h30v68h-30z" fill="none" stroke="${C.white}" stroke-width="5"/>
    <circle cx="110" cy="62" r="3" fill="${C.white}"/>
    <path d="M148 60h24m-9-9l9 9-9 9" fill="none" stroke="${C.white}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function svgHoseReel(){
  return `<svg viewBox="0 0 200 190" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="18" width="150" height="150" rx="9" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="18" y="18" width="34" height="150" rx="9" fill="${C.redDark}" opacity=".3"/>
    <g fill="none" stroke="${C.ink}" stroke-width="8" opacity=".92"><circle cx="96" cy="93" r="52"/><circle cx="96" cy="93" r="36"/></g>
    <g fill="none" stroke="${C.char}" stroke-width="4"><circle cx="96" cy="93" r="52"/><circle cx="96" cy="93" r="36"/></g>
    <circle cx="96" cy="93" r="22" fill="${C.steel}" stroke="${C.ink}" stroke-width="3"/>
    <circle cx="96" cy="93" r="7" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.4"/>
    <g stroke="${C.ink}" stroke-width="3" stroke-linecap="round"><path d="M96 71v-8M96 123v8M74 93h-8M118 93h8"/></g>
    <path d="M148 93h26c8 0 12 6 12 14v34" fill="none" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/>
    <path d="M148 93h26c8 0 12 6 12 14v34" fill="none" stroke="${C.char}" stroke-width="4" stroke-linecap="round"/>
    <rect x="178" y="140" width="16" height="26" rx="4" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.6"/>
    <text x="96" y="182" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1.2" fill="${C.white}">30 M HOSE</text>
  </svg>`;
}

function svgCctv(kind){
  if(kind === 'dome'){
    return `<svg viewBox="0 0 200 150" role="img" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="30" width="112" height="14" rx="5" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.8"/>
      <path d="M52 44a48 40 0 0 0 96 0z" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
      <path d="M52 44a48 40 0 0 0 48 40V44z" fill="${C.steelLight}" opacity=".85"/>
      <circle cx="100" cy="70" r="15" fill="${C.ink}" stroke="${C.ink}" stroke-width="2.6"/>
      <circle cx="100" cy="70" r="6" fill="${C.steel}"/>
      <circle cx="94" cy="65" r="2.6" fill="${C.white}" opacity=".9"/>
      <path d="M100 88l-42 52h84z" fill="${C.steel}" opacity=".5"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 200 150" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 22h16v30H34z" fill="${C.steelDark}" stroke="${C.ink}" stroke-width="2.6"/>
    <path d="M42 52v14" stroke="${C.steelDark}" stroke-width="7" stroke-linecap="round"/>
    <rect x="36" y="62" width="118" height="44" rx="12" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="36" y="62" width="118" height="16" rx="10" fill="${C.steelLight}"/>
    <rect x="148" y="70" width="22" height="28" rx="6" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.8"/>
    <circle cx="164" cy="84" r="9" fill="${C.ink}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="164" cy="84" r="3.5" fill="${C.steel}"/>
    <g fill="${C.red}"><circle cx="60" cy="84" r="3"/><circle cx="72" cy="84" r="3"/><circle cx="84" cy="84" r="3"/></g>
    <text x="112" y="88" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1" fill="${C.char}">IR / HD</text>
    <path d="M174 84l18-26v52z" fill="${C.steel}" opacity=".6"/>
  </svg>`;
}

function svgAccess(kind){
  const bio = kind === 'biometric';
  return `<svg viewBox="0 0 140 200" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="16" width="92" height="168" rx="11" fill="${C.ink}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="24" y="16" width="24" height="168" rx="11" fill="#000" opacity=".24"/>
    ${bio
      ? `<rect x="40" y="36" width="60" height="70" rx="8" fill="${C.char}" stroke="${C.ink}" stroke-width="2.4"/>
         <g fill="none" stroke="${C.steel}" stroke-width="2.6" stroke-linecap="round">
           <path d="M70 56c-9 0-16 7-16 16v14"/><path d="M70 56c9 0 16 7 16 16v14"/>
           <path d="M70 66c-4 0-7 3-7 7v13"/><path d="M70 66c4 0 7 3 7 7v13"/><path d="M70 76v12"/>
         </g>
         <text x="70" y="126" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1" fill="${C.steel}">FINGERPRINT</text>`
      : `<rect x="40" y="32" width="60" height="26" rx="4" fill="${C.char}" stroke="${C.ink}" stroke-width="2.2"/>
         <text x="70" y="49" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="9" font-weight="700" fill="${C.steel}">ENTER PIN</text>
         <g fill="${C.char}">
           ${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${43+c*20}" y="${68+r*20}" width="15" height="15" rx="3"/>`).join('')).join('')}
         </g>`}
    <rect x="40" y="136" width="60" height="30" rx="5" fill="${C.char}" opacity=".5"/>
    <rect x="52" y="144" width="36" height="14" rx="2" fill="${C.steel}" stroke="${C.ink}" stroke-width="2"/>
    <circle cx="70" cy="176" r="4.5" fill="${C.red}"/>
  </svg>`;
}

function svgIntruder(kind){
  if(kind === 'siren'){
    return `<svg viewBox="0 0 170 160" role="img" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="30" width="82" height="96" rx="10" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
      <rect x="44" y="30" width="20" height="96" rx="10" fill="${C.redDark}" opacity=".32"/>
      <rect x="58" y="44" width="54" height="34" rx="4" fill="${C.white}" opacity=".92"/>
      <g fill="${C.redDark}" opacity=".5">${[0,1,2,3].map(i=>`<rect x="62" y="${48+i*8}" width="46" height="4" rx="2"/>`).join('')}</g>
      <circle cx="85" cy="100" r="11" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="2.6"/>
      <text x="85" y="145" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1.2" fill="${C.char}">SOUNDER + STROBE</text>
      <g fill="none" stroke="${C.red}" stroke-width="3" stroke-linecap="round" opacity=".6">
        <path d="M28 88a30 30 0 0 1 0-28"/><path d="M14 96a46 46 0 0 1 0-44" opacity=".55"/>
        <path d="M142 88a30 30 0 0 0 0-28"/><path d="M156 96a46 46 0 0 0 0-44" opacity=".55"/>
      </g>
    </svg>`;
  }
  return `<svg viewBox="0 0 170 150" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 24h58a8 8 0 0 1 8 8v44a30 30 0 0 1-30 30H78a30 30 0 0 1-30-30V32a8 8 0 0 1 8-8z" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <path d="M56 24h20v82h-4a30 30 0 0 1-24-30V32a8 8 0 0 1 8-8z" fill="${C.steelLight}" opacity=".9"/>
    <rect x="62" y="56" width="46" height="26" rx="6" fill="${C.ink}" stroke="${C.ink}" stroke-width="2.4"/>
    <circle cx="85" cy="40" r="4" fill="${C.red}"/>
    <g fill="none" stroke="${C.red}" stroke-width="2.6" stroke-linecap="round" opacity=".6">
      <path d="M40 122a58 58 0 0 1 90 0"/><path d="M26 138a78 78 0 0 1 118 0" opacity=".55"/>
    </g>
    <text x="85" y="146" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8" font-weight="700" letter-spacing="1.2" fill="${C.char}">PIR MOTION</text>
  </svg>`;
}

function svgFirstAid(){
  return `<svg viewBox="0 0 180 150" role="img" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="34" width="128" height="94" rx="10" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="26" y="34" width="128" height="22" rx="10" fill="${C.steelLight}"/>
    <path d="M72 34v-8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v8" fill="none" stroke="${C.ink}" stroke-width="3"/>
    <rect x="74" y="66" width="32" height="14" rx="3" fill="${C.red}"/>
    <rect x="83" y="57" width="14" height="32" rx="3" fill="${C.red}"/>
    <text x="90" y="112" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8.5" font-weight="700" letter-spacing="1.2" fill="${C.char}">FIRST AID</text>
  </svg>`;
}

function svgPpe(){
  return `<svg viewBox="0 0 180 170" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 66c0-16 14-28 32-28h16c18 0 32 12 32 28v10H40z" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/>
    <path d="M40 66c0-16 14-28 32-28v38H40z" fill="${C.redDark}" opacity=".28"/>
    <rect x="30" y="76" width="120" height="14" rx="7" fill="${C.ink}"/>
    <path d="M56 38a34 34 0 0 1 68 0" fill="none" stroke="${C.ink}" stroke-width="3"/>
    <rect x="62" y="52" width="56" height="16" rx="8" fill="${C.steel}" stroke="${C.ink}" stroke-width="2.4"/>
    <path d="M52 104h76l8 44H44z" fill="${C.steelLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M48 124h84" stroke="${C.steelDark}" stroke-width="7"/>
    <path d="M48 124h84" stroke="${C.ink}" stroke-width="1.6" opacity=".35"/>
    <text x="90" y="163" text-anchor="middle" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8.5" font-weight="700" letter-spacing="1.2" fill="${C.char}">PPE</text>
  </svg>`;
}

/* ---------------- Building schematic ---------------- */
function svgHeroBuilding(){
  const lbl = (x,y,t)=>`<text x="${x}" y="${y}" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".1em" fill="${C.char}">${t}</text>`;
  const sub = (x,y,t)=>`<text x="${x}" y="${y}" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8.5" font-weight="500" letter-spacing=".08em" fill="${C.steelDark}">${t}</text>`;
  const leader = d=>`<path d="${d}" fill="none" stroke="${C.steelDark}" stroke-width="1.6" stroke-dasharray="3 3"/>`;
  const dot = (x,y)=>`<circle cx="${x}" cy="${y}" r="3.4" fill="${C.red}" stroke="${C.white}" stroke-width="1.4"/>`;
  return `<svg viewBox="0 0 560 480" role="img" aria-label="Cross section of an institutional building showing fire detection, protection and security layers" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 432h480" stroke="${C.steelDark}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <rect x="112" y="72" width="300" height="360" rx="4" fill="${C.white}" stroke="${C.char}" stroke-width="2.4"/>
    <path d="M100 72h324l-24-34H124z" fill="${C.char}" stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round"/>
    <g stroke="${C.steelDark}" stroke-width="1.6" opacity=".8"><path d="M112 192h300M112 312h300"/></g>
    <g fill="${C.steelLight}">
      <rect x="126" y="88" width="126" height="88" rx="2"/><rect x="268" y="88" width="128" height="88" rx="2"/>
      <rect x="126" y="208" width="126" height="88" rx="2"/><rect x="268" y="208" width="128" height="88" rx="2"/>
      <rect x="126" y="328" width="270" height="88" rx="2"/>
    </g>
    <g font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="8.5" font-weight="600" letter-spacing=".1em" fill="${C.char}">
      <text x="134" y="104">CLASSROOM</text><text x="276" y="104">LABORATORY</text>
      <text x="134" y="224">OFFICE FLOOR</text><text x="276" y="224">SERVER ROOM</text>
      <text x="134" y="344">RECEPTION / ASSEMBLY</text>
    </g>
    <g stroke="${C.steelDark}" stroke-width="1.6" opacity=".8" fill="none">
      <path d="M256 92v320M256 120h-14M256 148h-14M256 176h-14M256 240h-14M256 268h-14M256 356h-14M256 384h-14"/>
    </g>

    ${dot(170,96)}<ellipse cx="170" cy="96" rx="11" ry="4" fill="${C.char}"/>
    ${leader('M170 96H64')}${lbl(6,92,'DETECTION')}${sub(6,106,'BS 5839')}

    <rect x="404" y="214" width="26" height="34" rx="3" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>
    <rect x="409" y="220" width="16" height="10" rx="1.5" fill="${C.ink}"/>
    <g fill="${C.white}"><circle cx="411" cy="238" r="2"/><circle cx="418" cy="238" r="2"/><circle cx="425" cy="238" r="2"/></g>
    ${leader('M430 231h58')}${lbl(468,227,'PANEL')}${sub(468,241,'ZONED')}

    <rect x="152" y="386" width="14" height="28" rx="4" fill="${C.red}" stroke="${C.ink}" stroke-width="1.8"/>
    <rect x="156" y="380" width="6" height="7" fill="${C.steelDark}"/>
    ${leader('M152 400H64')}${lbl(6,396,'EXTINGUISHERS')}${sub(6,410,'KEBS CERTIFIED')}

    <circle cx="352" cy="368" r="13" fill="none" stroke="${C.red}" stroke-width="3"/>
    <circle cx="352" cy="368" r="5" fill="${C.steelDark}"/>
    ${leader('M365 368h123')}${lbl(468,364,'HOSE REEL')}${sub(468,378,'30 M')}

    <rect x="300" y="404" width="30" height="15" rx="2" fill="${C.safetyGreen}" stroke="${C.ink}" stroke-width="1.6"/>
    <path d="M318 411h7m-3-3l3 3-3 3" stroke="${C.white}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="308" cy="411" r="3" fill="${C.white}"/>
    ${leader('M330 411h158')}${lbl(468,408,'EGRESS')}${sub(468,422,'LIT ROUTES')}

    <path d="M96 118h-18" stroke="${C.steelDark}" stroke-width="3" stroke-linecap="round"/>
    <rect x="70" y="112" width="24" height="12" rx="5" fill="${C.steel}" stroke="${C.ink}" stroke-width="1.8"/>
    <path d="M70 118L42 100v36z" fill="${C.steel}" opacity=".7"/>
    ${leader('M70 132v32H30')}${lbl(6,170,'CCTV')}

    <rect x="426" y="392" width="12" height="20" rx="3" fill="${C.ink}" stroke="${C.ink}" stroke-width="1.8"/>
    <circle cx="432" cy="398" r="2.4" fill="${C.steel}"/>
    ${leader('M438 402h22v44h28')}${lbl(468,450,'ACCESS')}${sub(468,464,'CONTROL')}

    <rect x="272" y="200" width="18" height="7" rx="2" fill="${C.white}" stroke="${C.ink}" stroke-width="1.4"/>
    <path d="M281 207l-16 28h32z" fill="${C.steel}" opacity=".8"/>
  </svg>`;
}

/* ---------------- Icon system ----------------
   Minimal geometric line icons on a 48 grid. `framed` wraps the glyph in a
   soft brand container; `plain` returns the glyph alone for dark surfaces.   */

const GLYPH = {
  flame:'<path d="M24 11c6.5 6.5 9.5 10.8 9.5 16.4a9.5 9.5 0 0 1-19 0c0-4.2 2-6.4 4.2-9.4 1 3.2 3.1 4.3 3.1 4.3 0-4.3 1-8.6 2.2-11.3z"/>',
  shield:'<path d="M24 10.5l12 4.3v10.4c0 7.6-5.3 11.9-12 14.3-6.7-2.4-12-6.7-12-14.3V14.8z"/><path class="ic-draw" d="M18.6 24.3l4 4 7.6-8.4"/>',
  alarm:'<path d="M13 30.5a11 11 0 0 1 22 0z"/><path d="M10 30.5h28"/><path d="M24 19.5v-5.6"/><path d="M35 35.2H13"/><circle class="ic-pulse" cx="24" cy="26" r="3.4" fill="currentColor" stroke="none"/>',
  extinguisher:'<path d="M18 20.5c0-2.8 2.6-4.6 6-4.6s6 1.8 6 4.6v15.9c0 1.4-.9 2.1-2.4 2.1h-7.2c-1.5 0-2.4-.7-2.4-2.1z"/><path d="M21 15.9v-3h6v3"/><path d="M30 21.6c4.4 1.2 5 6.2 3.6 9.4"/><path d="M19.5 25.8h9"/>',
  detector:'<ellipse cx="24" cy="18.5" rx="11" ry="4.3"/><path d="M13 18.5v3.6c0 2.4 4.9 4.3 11 4.3s11-1.9 11-4.3v-3.6"/><path class="ic-pulse" d="M17 33a9.4 9.4 0 0 0 14 0" stroke-width="2"/>',
  light:'<rect x="15" y="12.5" width="18" height="7.5" rx="2"/><circle cx="19.5" cy="26" r="4.2"/><circle cx="28.5" cy="26" r="4.2"/><path d="M19.5 30.2L14 39.5h11z" opacity=".55"/><path d="M28.5 30.2L23 39.5h11z" opacity=".55"/>',
  camera:'<path d="M12 22.5h16.5l7.5-5.5v14l-7.5-5.5H12z"/><path d="M14.5 28v6.5"/><circle class="ic-pulse" cx="32" cy="24" r="2.4" fill="currentColor" stroke="none"/>',
  lock:'<rect x="13.5" y="22" width="21" height="15" rx="3.5"/><path d="M18.8 22v-4.4a5.2 5.2 0 0 1 10.4 0V22"/><path d="M24 28.4v3.6"/>',
  motion:'<path d="M18 12.5h12a3 3 0 0 1 3 3v9.5a9 9 0 0 1-9 9 9 9 0 0 1-9-9V15.5a3 3 0 0 1 3-3z"/><rect x="19" y="19" width="10" height="6" rx="3"/><path d="M15 40a12.7 12.7 0 0 1 18 0"/>',
  training:'<path d="M11.5 20L24 14.5 36.5 20 24 25.5z"/><path d="M16.5 22.8v7.4c0 2.4 3.4 4.3 7.5 4.3s7.5-1.9 7.5-4.3v-7.4"/><path d="M34.5 21.4v8.6"/>',
  firstaid:'<rect x="12" y="17" width="24" height="19" rx="3.5"/><path d="M19 17v-2.4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V17"/><path d="M24 22.5v8M20 26.5h8"/>',
  drill:'<circle cx="24" cy="24" r="12"/><path d="M24 12v5M24 31v5M12 24h5M31 24h5"/><path class="ic-draw" d="M19 24.3l3.6 3.6 6.4-7"/>',
  clipboard:'<rect x="14.5" y="13.5" width="19" height="23" rx="3"/><path d="M19.5 13.5v-2h9v2"/><path d="M19.5 23h9M19.5 29h6"/>',
  wrench:'<path d="M31.5 13.5a7.2 7.2 0 0 0-9.3 9.3l-8.4 8.4a3.1 3.1 0 0 0 4.4 4.4l8.4-8.4a7.2 7.2 0 0 0 9.3-9.3l-4.2 4.2-4.2-1-1-4.2z"/>',
  risk:'<path d="M24 12.5l12.5 22h-25z"/><path d="M24 22v6.5"/><circle cx="24" cy="31.5" r="1.4" fill="currentColor" stroke="none"/>',
  people:'<circle cx="19" cy="19.5" r="4.3"/><circle cx="30.5" cy="20.5" r="3.6"/><path d="M11.5 34.5c0-4.2 3.4-7.5 7.5-7.5s7.5 3.3 7.5 7.5"/><path d="M28 29c4.2-1 9 1.2 9 5.5"/>',
  school:'<path d="M11.5 23.5L24 15l12.5 8.5"/><path d="M15 23.5V36h18V23.5"/><path d="M21 36v-7h6v7"/><path d="M24 15v-3.5M24 11.5h4.5v3H24"/>',
  office:'<path d="M14.5 36V13h19v23"/><path d="M19.5 19h3M25.5 19h3M19.5 25h3M25.5 25h3"/><path d="M21.5 36v-5.5h5V36"/><path d="M11 36h26"/>',
  hospital:'<path d="M13.5 36V17h21v19"/><path d="M24 21.5v8M20 25.5h8"/><path d="M10.5 36h27"/>',
  hotel:'<path d="M12.5 36V15.5h23V36"/><path d="M17.5 21h4M26.5 21h4M17.5 27h4M26.5 27h4"/><path d="M10.5 36h27"/>',
  factory:'<path d="M12 36V23.5l8 5v-5l8 5V16h8v20z"/><path d="M10.5 36h27"/><path d="M31 22v4"/>',
  retail:'<path d="M12.5 20h23l-2.2 16.5H14.7z"/><path d="M19 20v-3a5 5 0 0 1 10 0v3"/>',
  church:'<path d="M24 11.5v8M20.5 15h7"/><path d="M14.5 36V23.5L24 17l9.5 6.5V36z"/><path d="M21 36v-6h6v6"/><path d="M11.5 36h25"/>',
  home:'<path d="M12.5 24L24 15l11.5 9"/><path d="M15.5 24v12h17V24"/><path d="M21 36v-7h6v7"/>',
  check:'<circle cx="24" cy="24" r="11.5"/><path class="ic-draw" d="M18.8 24.2l3.9 3.9 7.6-8.4"/>',
  star:'<path d="M24 12.5l3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L24 31l-7.2 3.8 1.4-8.1-5.9-5.7 8.1-1.1z"/>',
  handshake:'<path d="M11.5 22L18 17.6l6 3 6-3 6.5 4.4v8.2l-5.4 4.2-5.1-4-1.5 1.1-1.5-1.1-5.1 4-5.4-4.2z"/>',
  globe:'<circle cx="24" cy="24" r="11.5"/><path d="M12.5 24h23"/><path d="M24 12.5c4.3 5.4 4.3 17.6 0 23-4.3-5.4-4.3-17.6 0-23z"/>',
  route:'<circle cx="16" cy="16.5" r="3.6"/><circle cx="32" cy="31.5" r="3.6"/><path d="M16 20.1v7.4a4 4 0 0 0 4 4h8.4"/>',
  doc:'<path d="M17.5 12.5h9l7.5 7.5v15.5a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5V15a2.5 2.5 0 0 1 2.5-2.5z"/><path d="M26.5 12.5V20H34"/><path d="M20 27h9M20 32h6"/>',
  calendar:'<rect x="12.5" y="15.5" width="23" height="21" rx="3"/><path d="M12.5 21.5h23M19 12.5v5M29 12.5v5"/><circle class="ic-pulse" cx="24" cy="29" r="2.6" fill="currentColor" stroke="none"/>',
  phone:'<path d="M16.5 12.5h5l2.2 6-3.2 2.1a15.5 15.5 0 0 0 7 7l2.1-3.2 6 2.2v5a2.4 2.4 0 0 1-2.4 2.4A22.8 22.8 0 0 1 14.1 14.9a2.4 2.4 0 0 1 2.4-2.4z"/>',
  mail:'<rect x="11.5" y="16.5" width="25" height="16.5" rx="3"/><path d="M11.5 18.8L24 28.4l12.5-9.6"/>',
  pin:'<path d="M24 37s9.5-9.7 9.5-15.8a9.5 9.5 0 1 0-19 0C14.5 27.3 24 37 24 37z"/><circle cx="24" cy="21" r="3.4"/>',
  clock:'<circle cx="24" cy="24" r="11.5"/><path d="M24 17.5v7l4.4 3.2"/>',
  whatsapp:'<path d="M13 35.5l1.7-5.7A11.6 11.6 0 1 1 19.4 34z"/><path d="M20.5 22c0 4.2 3.2 6.4 6.4 6.4"/>',
  search:'<circle cx="22" cy="22" r="8.5"/><path d="M28.2 28.2L35 35"/>',
  layers:'<path d="M24 12.5L36 19l-12 6.5L12 19z"/><path d="M12 25l12 6.5L36 25"/><path d="M12 31l12 6.5L36 31"/>',
  support:'<circle cx="24" cy="24" r="11.5"/><circle cx="24" cy="24" r="4.4"/><path d="M15.9 15.9l4.9 4.9M27.2 27.2l4.9 4.9M32.1 15.9l-4.9 4.9M20.8 27.2l-4.9 4.9"/>'
};

function icon(name, variant){
  const g = GLYPH[name] || GLYPH.shield;
  const glyph = `<g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${g}</g>`;
  if(variant === 'plain'){
    return `<svg viewBox="0 0 48 48" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${glyph}</svg>`;
  }
  return `<svg viewBox="0 0 48 48" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.2" y="1.2" width="45.6" height="45.6" rx="13" fill="var(--icon-bg, #E9EFF5)" stroke="var(--icon-bd, #D3DDE6)" stroke-width="1.4"/>
    <g style="color:var(--icon-fg, #B33632)">${glyph}</g>
  </svg>`;
}

const ARROW = '<svg class="arw" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

window.KFSEA_G = {
  svgExtinguisher, svgBlanket, svgDetector, svgPanel, svgCallPoint, svgSounder,
  svgEmergencyLight, svgSign, svgHoseReel, svgCctv, svgAccess, svgIntruder,
  svgFirstAid, svgPpe, svgHeroBuilding, icon, ARROW
};
