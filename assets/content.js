/* ==========================================================================
   Kadala Fire & Safety East Africa
   Shared data, builders, and the home, about and solutions pages.
   Company facts come from the supplied Company Profile and service document.
   Anything not evidenced there is marked as a placeholder, never invented.
   ========================================================================== */

const G = window.KFSEA_G;
const A = G.ARROW;

const CO = {
  name:'Kadala Fire and Safety East Africa Limited',
  shortName:'Kadala Fire &amp; Safety EA',
  tagline:'Your Safety, Our Mission',
  site:'www.kfsea.com',
  email:'info@kfsea.com',
  tel1:'0721 629427',
  tel2:'0721 838796',
  tel1Raw:'+254721629427',
  tel2Raw:'+254721838796',
  wa:'254721629427',
  box:'P.O. Box 30353 - 00100',
  city:'Nairobi, Kenya',
  office:'New Commercial House, Nairobi',
  hours:'Monday to Friday, 8:00am to 5:30pm'
};

/* Photography supplied by the client, optimised for the web. */
const IMG = {
  hoseGarden:'assets/img/hose-reel-garden.jpg',
  hoseCabinet:'assets/img/hose-reel-cabinet.jpg',
  hoseInterior:'assets/img/hose-reel-interior.jpg',
  servicing:'assets/img/servicing-batch.jpg',
  rangeGroup:'assets/img/range-group.jpg',
  rangeRender:'assets/img/range-render.jpg',
  range4:'assets/img/range-render-4.jpg',
  foam:'assets/img/ext-foam.jpg',
  co2:'assets/img/ext-co2.jpg',
  callPoint:'assets/img/call-point.jpg',
  extRow:'assets/img/ext-row.jpg',
  wallSign:'assets/img/ext-wall-sign.jpg',
  handling:'assets/img/handling.jpg',
  cabinet:'assets/img/fire-cabinet.jpg',
  smokeDetector:'assets/img/smoke-detector.webp',
  extPowder:'assets/img/p-ext-powder.webp',
  extMist:'assets/img/p-ext-mist.webp',
  extWater:'assets/img/p-ext-water.webp',
  trolley:'assets/img/p-trolley.webp',
  trolleyCo2:'assets/img/p-trolley-co2.webp',
  blanket:'assets/img/p-blanket.webp',
  emgLight:'assets/img/p-emg-light.webp',
  detectorHead:'assets/img/p-detector-head.webp',
  panelHand:'assets/img/p-panel-hand.webp',
  intruderPanel:'assets/img/p-intruder-panel.webp',
  sounder:'assets/img/p-sounder.webp',
  sounderWall:'assets/img/p-sounder-wall.webp',
  exitCorridor:'assets/img/p-exit-corridor.webp',
  assemblySign:'assets/img/p-assembly-sign.webp',
  exitSign:'assets/img/p-exit-sign.webp',
  firstaidKit:'assets/img/p-firstaid-kit.webp',
  firstaidWall:'assets/img/p-firstaid-wall.webp',
  cctvBullet:'assets/img/p-cctv-bullet.webp',
  cctvDome:'assets/img/p-cctv-dome.webp',
  accessBio:'assets/img/p-access-bio.webp',
  accessCard:'assets/img/p-access-card.webp',
  intruder:'assets/img/p-intruder.webp',
  alarmWall:'assets/img/p-alarm-wall.webp',
  firepoint:'assets/img/p-firepoint.webp',
  panelSuppression:'assets/img/p-panel-suppression.webp',
  fireDrill:'assets/img/p-fire-drill.webp',
  industrialWide:'assets/img/industrial.webp',
  hospitalityWide:'assets/img/hospitality.webp',
  sprinklerRiser:'assets/img/sprinkler-riser.webp',
  sprinklerCard:'assets/img/sprinkler-riser-card.webp',
  sprinklerDetail:'assets/img/sprinkler-detail.webp'
};

/* ---------------- Builders ---------------- */
const eyebrow = t => `<span class="eyebrow">${t}</span>`;

const secHead = (eb,h,lead,center) => `
  <div class="sec-head${center?' sec-head--c':''} reveal">
    ${eb?eyebrow(eb):''}<h2>${h}</h2>${lead?`<p class="lead">${lead}</p>`:''}
  </div>`;

const btn = (label,href,cls) => `<a class="btn ${cls||''}" href="${href}"><span>${label}</span>${A}</a>`;
const tlink = (label,href) => `<a class="tlink" href="${href}">${label}${A}</a>`;

const card = ({ico,h,p,href,cta,chips,rule,d}) => `
  <article class="card lift reveal${rule?' card--rule':''}${rule==='red'?' on-red':''}"${d?` data-d="${d}"`:''}>
    ${ico?`<div class="card-ico">${G.icon(ico)}</div>`:''}
    <h3>${h}</h3><p>${p}</p>
    ${chips?`<div class="chips">${chips.map(c=>`<span class="chip">${c}</span>`).join('')}</div>`:''}
    ${href?tlink(cta||'Learn more',href):''}
  </article>`;

const product = ({img,art,fill,h,p,spec,app,chips,order,over,cat}) => `
  <article class="prod tilt reveal" data-cat="${cat||'all'}">
    <div class="prod-fig">
      ${img?`<img src="${img}" alt="${h}" loading="lazy" decoding="async"${fill?' class="fill"':''}>`:art}
      ${over?`<div class="prod-over">${over}</div>`:''}
    </div>
    <div class="prod-body">
      <h3>${h}</h3><p>${p}</p>
      ${chips?`<div class="chips">${chips.map(c=>`<span class="chip">${c}</span>`).join('')}</div>`:''}
      ${spec?`<ul class="spec">${spec.map(s=>`<li>${s}</li>`).join('')}</ul>`:''}
      ${app?`<p class="prod-app">Applications: ${app}</p>`:''}
      <div class="prod-cta">
        <a class="btn btn--sm" href="#/quote?item=${encodeURIComponent(order||h)}"><span>Request price</span></a>
        <a class="btn btn--sm btn--out" href="#/quote?item=${encodeURIComponent(order||h)}&amp;intent=order"><span>Order now</span></a>
      </div>
    </div>
  </article>`;

const checks = items => `<ul class="checks">${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;

const ctaFinal = (h,p,btns,bg) => `
  <section class="section"><div class="wrap"><div class="cta-final reveal">
    ${bg?`<div class="cta-bg"><img src="${bg}" alt="" loading="lazy" decoding="async"></div>`:''}
    <h2>${h}</h2><p>${p}</p>
    <div class="btn-row">${btns.map(b=>btn(b.label,b.href,b.cls||'btn--solid-light')).join('')}</div>
  </div></div></section>`;

/* Only organisations whose logo artwork the client has supplied appear here. */
const PARTNERS = [
  {name:'KTDA',                  logo:'assets/logos/ktda.png'},
  {name:'Premier Bank',          logo:'assets/logos/premier-bank.png'},
  {name:'Kenya Railways',        logo:'assets/logos/kenya-railways.png'},
  {name:'Co-operative Bank',     logo:'assets/logos/coop-bank.png'},
  {name:'Samasource',            logo:'assets/logos/samasource.png'},
  {name:'Al-Husnain Motors Ltd', logo:'assets/logos/al-husnain.png'},
  {name:'Brickwoods Schools',    logo:'assets/logos/brickwoods.png'}
];
const partnerTile = p => `<div class="pmark"><img src="${p.logo}" alt="${p.name}" loading="lazy" decoding="async"></div>`;
const partnerMarks = () => `<div class="marks reveal">${PARTNERS.map(p=>
  `<div class="mark"><img src="${p.logo}" alt="${p.name}" loading="lazy" decoding="async"></div>`).join('')}</div>`;

const NOT_A_BRIGADE = `
  <div class="notice notice--red reveal">
    <b>What we are, and what we are not</b>
    Kadala is a fire protection, detection, safety systems and training company. We do not operate a fire brigade
    and we do not send firefighting crews to attend active fires. Our work is prevention, protection, detection,
    preparedness, inspection and maintenance, so that your building and your people are ready long before an
    emergency service is ever needed.
  </div>`;

/* ---------------- Protection journey data ---------------- */
const JOURNEY = [
  {t:'Assess',    p:'We survey the site, map the risks and record what protection is already in place and what is missing.', img:IMG.hoseInterior},
  {t:'Recommend', p:'You receive a written specification for the building, and an itemised quotation with nothing hidden in the total.', art:'building'},
  {t:'Supply',    p:'Certified equipment is supplied to the agreed specification, with brackets, signage and mounting included.', img:IMG.rangeGroup},
  {t:'Install',   p:'Our technicians install and commission the systems, working around your teaching, trading or production hours.', img:IMG.hoseCabinet},
  {t:'Train',     p:'Your people learn to use the equipment and follow the procedure, on your own site and with your own layout.', img:IMG.handling},
  {t:'Maintain',  p:'Scheduled inspection, testing and servicing keeps every part of the system ready between incidents.', img:IMG.servicing}
];

const journeySection = () => `
  <section class="section section--mist">
    <div class="wrap">
      ${secHead('The protection journey','From first survey to scheduled service','Six stages, in order. Each one leaves you with something you can keep: a risk picture, a written specification, a commissioned system, a trained team, a service record.')}
      <div class="journey" id="journey">
        <div class="journey-sticky">
          <div class="journey-visual">
            ${JOURNEY.map((s,i)=>`<div class="jv${s.art?' is-art':''}${i===0?' on':''}" data-jv="${i}">${
              s.art ? G.svgHeroBuilding() : `<img src="${s.img}" alt="${s.t} stage" loading="lazy" decoding="async">`
            }</div>`).join('')}
            <div class="journey-badge"><b id="jbadge-n">01</b><span id="jbadge-t">Assess</span></div>
          </div>
        </div>
        <div class="journey-steps">
          ${JOURNEY.map((s,i)=>`
            <div class="jstep${i===0?' on':''}" data-jstep="${i}">
              <div class="num">${String(i+1).padStart(2,'0')}</div>
              <h3>${s.t}</h3><p>${s.p}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;

/* ---------------- Category explorer data ---------------- */
const EXPLORER = [
  {
    key:'protection', label:'Fire Protection', ico:'extinguisher', img:IMG.extRow,
    h:'Equipment within reach of the person who sees the fire',
    p:'Portable and fixed protection specified by what is actually likely to burn in each area, supplied with brackets, signage and a service schedule.',
    list:['ABC dry powder','CO\u2082','Foam','Water mist','Mobile trolleys','Fire blankets','Hose reels'],
    cta:['Explore fire safety','#/fire-safety']
  },
  {
    key:'systems', label:'Safety Systems', ico:'alarm', img:IMG.callPoint,
    h:'Detection that buys people time',
    p:'Fire detection and alarm systems supplied and commissioned as BS 5839 and BAFE SP203 compliant, in conventional, addressable and wireless configurations.',
    list:['Conventional panels','Addressable panels','Wireless alarms','Smoke detectors','Heat detectors','Manual call points','Sounders'],
    cta:['See detection systems','#/fire-safety']
  },
  {
    key:'security', label:'Security Systems', ico:'camera', img:IMG.cctvBullet,
    h:'Who is in the building, and what is happening in it',
    p:'CCTV, intruder detection and access control specified alongside your fire strategy rather than bolted on beside it, so escape routes stay usable.',
    list:['HD CCTV','Night vision','Intruder alarms','PIR detection','Card and PIN access','Biometric access'],
    cta:['See security systems','#/security-systems']
  },
  {
    key:'training', label:'Training', ico:'training', img:IMG.handling,
    h:'Equipment only works if somebody knows how to use it',
    p:'On site training delivered with your building, your escape routes and the equipment your people will actually reach for.',
    list:['Fire safety training','Fire Marshal training','First Aid','Extinguisher handling','Evacuation drills','Workplace awareness'],
    cta:['View training programmes','#/training']
  },
  {
    key:'maintenance', label:'Inspection &amp; Maintenance', ico:'wrench', img:IMG.servicing,
    h:'Protection does not end after installation',
    p:'A lost charge, a painted over detector, a standby battery at the end of its life: none of these announce themselves. Scheduled servicing finds them first.',
    list:['Inspection','Refilling','Pressure testing','Alarm servicing','Lighting testing','Fault diagnosis','Compliance reports'],
    cta:['Service and maintenance','#/service-maintenance']
  },
  {
    key:'preparedness', label:'Emergency Preparedness', ico:'people', img:IMG.wallSign,
    h:'Rehearsed beats improvised, every time',
    p:'Evacuation planning, marshal roles, assembly points and drills that are timed, observed and written up afterwards so the next one is better.',
    list:['Evacuation planning','Assembly points','Fire drills','Marshal roles','Fire Marshals Club','Post drill assessment'],
    cta:['Fire drills and preparedness','#/fire-drills']
  }
];

const explorerSection = (dark) => `
  <section class="section${dark?' section--ink':''}">
    <div class="wrap">
      ${secHead('What we do','Six ways we keep a building ready','Safety is not one purchase. It is a set of layers that each buy time for the next one. Choose a layer to see what it involves.')}
      <div class="explorer reveal" id="explorer">
        <div class="exp-list" role="tablist" aria-label="What Kadala does">
          ${EXPLORER.map((e,i)=>`
            <button class="exp-btn" role="tab" id="tab-${e.key}" aria-controls="pane-${e.key}"
                    aria-selected="${i===0}" data-exp="${i}" type="button">
              <span class="n">${String(i+1).padStart(2,'0')}</span>
              <span class="t">${e.label}</span>
              <span class="ic">${G.icon(e.ico)}</span>
            </button>`).join('')}
        </div>
        <div class="exp-panel">
          ${EXPLORER.map((e,i)=>`
            <div class="pane${i===0?' on':''}" id="pane-${e.key}" role="tabpanel" aria-labelledby="tab-${e.key}" data-pane="${i}">
              <div class="pane-media"><img src="${e.img}" alt="${e.label}" loading="lazy" decoding="async"></div>
              <div class="pane-body">
                <h3>${e.h}</h3><p>${e.p}</p>
                <div class="pane-list">${e.list.map(x=>`<span>${x}</span>`).join('')}</div>
                ${btn(e.cta[0], e.cta[1], 'btn--solid-light')}
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;

/* ---------------- System chain ---------------- */
const CHAIN = [
  {t:'Detect',   ico:'detector',     p:'A detector finds the fire while it is still small.', eq:'Smoke and heat detectors'},
  {t:'Alert',    ico:'alarm',        p:'Everybody in the building is told at once.',          eq:'Panels, sounders, call points'},
  {t:'Respond',  ico:'extinguisher', p:'A trained person can tackle a small fire safely.',    eq:'Extinguishers, blankets, hose reels'},
  {t:'Evacuate', ico:'light',        p:'People leave along a lit and marked route.',          eq:'Emergency lighting, signage'},
  {t:'Protect',  ico:'people',       p:'Marshals sweep, direct and account for everyone.',    eq:'Fire Marshals, drills, procedure'},
  {t:'Recover',  ico:'wrench',       p:'Everything is checked, refilled and documented.',     eq:'Inspection, refilling, reports'}
];

const chainSection = () => `
  <section class="section section--ink">
    <div class="wrap">
      ${secHead('How the parts connect','Fire safety behaves like a system','A fire does not meet all of your protection at once. It meets it in sequence, and every layer exists to buy time for the next one. This is the relationship between the measures, not a description of any one contract.')}
      <div class="chain reveal" id="chain">
        ${CHAIN.map((c,i)=>`
          <div class="chain-node${i===0?' on':''}" data-chain="${i}">
            <div class="dotline"><span class="bead">${G.icon(c.ico,'plain')}</span></div>
            <h4>${c.t}</h4><p>${c.p}</p><span class="eq">${c.eq}</span>
          </div>`).join('')}
      </div>
    </div>
  </section>`;

/* ---------------- Fire Marshals Club feature ---------------- */
const FMC_STEPS = [
  ['Learn','ico:school','Fire safety awareness taught in terms students actually remember.'],
  ['Train','ico:training','Selected students and staff trained in the Fire Marshal role.'],
  ['Practice','ico:drill','Drills and evacuation exercises run on a termly rhythm.'],
  ['Lead','ico:star','Student leadership through a responsibility that genuinely matters.'],
  ['Protect','ico:shield','A school that is measurably more prepared than it was last term.']
];

const fmcSection = () => `
  <section class="section fmc">
    <div class="wrap">
      <div class="split split--wide-l">
        <div>
          ${eyebrow('The Kadala Fire Marshals Club')}
          <h2 class="reveal">Building a culture of safety</h2>
          <p class="lead reveal" data-d="1" style="margin-top:18px">The Kadala Fire Marshals Club introduces practical fire safety,
            preparedness, First Aid and emergency response awareness in schools.</p>
          <p class="dim reveal" data-d="2" style="margin-top:16px">Like Scouts, sports and other co curricular clubs, it gives students
            a role they can hold and skills they keep. Safety becomes part of the school calendar rather than a once a year inspection.</p>
          <div class="btn-row reveal" data-d="3" style="margin-top:30px">
            ${btn('Discover the Fire Marshals Club','#/fire-marshals-club','btn--dark')}
            ${btn('School safety package','#/schools','btn--light')}
          </div>
        </div>
        <div class="reveal" data-d="2">
          <div class="figure figure--sq"><img src="${IMG.hoseInterior}" alt="Fire equipment installed in an institutional corridor" loading="lazy" decoding="async">
            <div class="figure-cap">Preparedness starts with equipment people can find</div>
          </div>
        </div>
      </div>
      <div class="fmc-steps reveal">
        ${FMC_STEPS.map(([t,ic,p])=>`
          <div class="fmc-step">
            <div class="ic" style="--icon-bg:rgba(255,255,255,.08);--icon-bd:rgba(255,255,255,.18);--icon-fg:#fff">${G.icon(ic.split(':')[1])}</div>
            <b>${t}</b><span>${p}</span>
          </div>`).join('')}
      </div>
    </div>
  </section>`;

/* ---------------- Industries ---------------- */
const INDUSTRIES = [
  {t:'Schools &amp; Education', ico:'school',   img:'assets/img/education-card.webp',     p:'Certified fire alarms, emergency lighting, extinguishers, staff First Aid training, drills and the Fire Marshals Club.'},
  {t:'Corporates &amp; Offices',ico:'office',   img:'assets/img/corporate-card.webp',     p:'Fire alarms, CCTV and access control, kept compliant through an ongoing maintenance schedule.'},
  {t:'Hospitals &amp; Healthcare',ico:'hospital',img:'assets/img/healthcare-card.webp',   p:'Reliable fire detection and emergency lighting tailored to healthcare settings and their evacuation constraints.'},
  {t:'Hospitality',             ico:'hotel',    img:'assets/img/hospitality-card.webp',   p:'Hotels, restaurants and accommodation. Kitchen specific protection, guest route lighting and clear signage.'},
  {t:'Manufacturing',           ico:'factory',  img:'assets/img/manufacturing-card.webp', p:'Industrial grade alarms, hose reels and safety signage specified to meet compliance standards.'},
  {t:'Retail &amp; Commercial', ico:'retail',   img:'assets/img/lounge-card.webp',        p:'Fire protection combined with integrated security for shop floors, malls and stores.'},
  {t:'Faith Centres',           ico:'church',   img:'assets/img/faith-card.webp',         p:'Discreet fire alarm and extinguisher installations with routine maintenance, sized for large gatherings.'},
  {t:'Residential &amp; Apartments',ico:'home', img:'assets/img/residential-card.webp',   p:'Centralised fire systems and emergency signage, with optional CCTV and access control for estates and blocks.'}
];

const industriesGrid = () => `<div class="ind-grid">
  ${INDUSTRIES.map((n,i)=>`
    <a class="ind reveal" data-d="${(i%4)+1}" href="#/industries">
      <div class="ind-bg${n.art?' is-art':''}">${
        n.art ? G.svgSign(n.art) : `<img src="${n.img}" alt="${n.t.replace(/&amp;/g,'and')}" loading="lazy" decoding="async">`
      }</div>
      <div class="ind-in">
        <div class="ic" style="--icon-bg:rgba(255,255,255,.1);--icon-bd:rgba(255,255,255,.2);--icon-fg:#fff">${G.icon(n.ico)}</div>
        <h3>${n.t}</h3><p>${n.p}</p>
      </div>
    </a>`).join('')}
</div>`;

/* ==========================================================================
   PAGES
   ========================================================================== */
const PAGES = {};

/* ------------------------------ HOME ------------------------------ */
PAGES['home'] = {
  title:`Fire Protection, Safety Systems &amp; Training in Kenya | ${CO.shortName}`,
  desc:'Kadala Fire and Safety East Africa Limited provides fire protection equipment, safety systems, security technology, training, inspection and maintenance for schools, offices and institutions across Kenya.',
  hero:true,
  body:() => `
  <section class="hero" id="hero">
    <div class="hero-media" id="hero-media">
      <img class="poster" id="hero-poster" src="assets/video/kadala-hero-poster.jpg" alt="Fire suppression pipework and actuator heads in a plant room">
      <video id="hero-video" muted loop playsinline preload="none" aria-label="Ambient footage of a fixed fire suppression installation"
             poster="assets/video/kadala-hero-poster.jpg"></video>
    </div>
    <div class="hero-scrim"></div>
    <div class="hero-grain"></div>
    <button class="vid-toggle" id="vid-toggle" type="button" aria-label="Pause background video" aria-pressed="false">
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="2" width="4" height="12" rx="1"/><rect x="9" y="2" width="4" height="12" rx="1"/></svg>
    </button>
    <div class="wrap">
      <div class="hero-inner">
        <span class="hero-label"><i></i>Fire Protection &nbsp;&middot;&nbsp; Safety &nbsp;&middot;&nbsp; Preparedness</span>
        <h1><span class="mask-rise"><span>Your Safety,</span></span><span class="mask-rise"><span class="l2">Our Mission<span class="dot">.</span></span></span></h1>
        <p class="hero-sub reveal" data-d="2">Kadala Fire &amp; Safety East Africa provides fire protection equipment, safety systems,
          training, inspection, maintenance and emergency preparedness solutions.</p>
        <div class="btn-row reveal" data-d="3">
          ${btn('Get a quote','#/quote')}
          ${btn('Talk to an expert','#/contact','btn--light')}
        </div>
      </div>
      <div class="hero-foot reveal" data-d="4">
        <div class="hero-marks">
          <span class="chip">BS 5839</span><span class="chip">BAFE SP203</span>
          <span class="chip">KEBS certified extinguishers</span><span class="chip">OSHA / NEMA signage</span>
        </div>
        <span class="scroll-cue"><i></i>Scroll</span>
      </div>
    </div>
  </section>

  <section class="statement">
    <div class="wrap">
      <div class="statement-grid">
        <div>
          ${eyebrow('The idea we are built on')}
          <p class="statement-txt reveal">Safety is not just equipment. It is <b>preparation</b>, and Kadala helps organisations prepare.</p>
        </div>
        <div class="statement-side">
          <p class="reveal" data-d="1">We supply and install fire protection equipment, fire detection, emergency lighting, signage
            and security systems. Then we train the people who will use them, and we keep the whole set working through scheduled
            inspection and maintenance.</p>
          <p class="reveal" data-d="2">That is the difference between owning safety equipment and being ready.</p>
          <div class="stats reveal" data-d="3" id="stats">
            <div class="stat"><b data-count="6">6</b><span>Sectors served, from schools to factories</span></div>
            <div class="stat"><b data-count="8">8</b><i>+</i><span>Trusted institutional partners across Kenya</span></div>
            <div class="stat"><b data-count="2">2</b><span>Disciplines, fire safety and security, in one team</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${explorerSection(true)}

  <section class="section">
    <div class="wrap">
      <div class="split split--wide-l" style="margin-bottom:clamp(36px,4vw,60px)">
        <div class="offset-fig reveal">
          <div class="figure figure--wide"><img src="${IMG.rangeRender}" alt="A range of fire extinguisher types" loading="lazy" decoding="async"></div>
          <div class="figure figure--sm"><img src="${IMG.co2}" alt="CO2 fire extinguisher" loading="lazy" decoding="async" style="object-fit:contain;background:#fff;padding:10px"></div>
        </div>
        <div>
          ${eyebrow('Equipment')}
          <h2 class="reveal">Specified by risk, not by catalogue page</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">The right extinguisher depends on what is likely to burn.
            We specify by area, supply KEBS certified units with wall brackets, and service them on schedule.</p>
          <div class="btn-row reveal" data-d="2" style="margin-top:28px">
            ${btn('Open the equipment store','#/products','btn--dark')}
            ${btn('Request a price list','#/quote?intent=order','btn--out')}
          </div>
        </div>
      </div>
      <div class="grid g4 tilt-wrap">
        ${product({img:IMG.range4,h:'Fire Extinguishers',p:'ABC dry powder, CO\u2082, foam, water mist and mobile trolley units.',chips:['KEBS certified','Refillable'],app:'Offices, schools, workshops, vehicles',order:'Fire Extinguishers',over:'Wall brackets included'})}
        ${product({img:IMG.smokeDetector,fill:true,h:'Smoke Detectors',p:'Early stage smoke detection with audible warning, wired and wireless.',chips:['Wired / wireless'],app:'Residential, commercial, institutional',order:'Smoke Detectors',over:'Integrates with alarm systems'})}
        ${product({img:IMG.callPoint,fill:true,h:'Manual Call Points',p:'Lets a person raise the alarm the moment they see a fire.',chips:['BS 5839'],app:'Exit routes, stairwells, corridors',order:'Manual Call Points',over:'Resettable element'})}
        ${product({img:IMG.hoseCabinet,fill:true,h:'Hose Reels &amp; Cabinets',p:'30m systems in stainless or powder coated cabinets, manual or automatic.',chips:['30 m'],app:'Corridors, factories, apartment blocks',order:'Fire Hose Reels',over:'Installed on request'})}
      </div>
    </div>
  </section>

  ${journeySection()}
  ${chainSection()}
  ${fmcSection()}

  <section class="section">
    <div class="wrap">
      ${secHead('Training','Know what to do before an emergency happens','On site training for schools, corporates and institutions. Choose a programme to see what it covers.')}
      <div class="trainer reveal" id="trainer">
        <div class="trainer-media">
          ${[
            {img:IMG.handling},{img:IMG.wallSign},{img:IMG.firstaidKit},{img:IMG.assemblySign},{img:IMG.hoseInterior}
          ].map((m,i)=>`<div class="tm${i===0?' on':''}" data-tm="${i}"><img src="${m.img}" alt="" loading="lazy" decoding="async"></div>`).join('')}
        </div>
        <div class="trainer-body">
          <div class="trainer-tabs" role="tablist" aria-label="Training programmes">
            ${[
              'Fire Safety Training','Fire Marshal Training','First Aid Training','Fire Drills','Emergency Evacuation Training'
            ].map((t,i)=>`<button class="ttab" role="tab" type="button" data-tt="${i}" aria-selected="${i===0}">${t}${A}</button>`).join('')}
          </div>
          <div class="trainer-detail" id="trainer-detail"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Who we work with','Eight building types, one approach','Six sectors are named in our company profile. These are the environments those sectors actually occupy.')}
      ${industriesGrid()}
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Why Kadala','Six capabilities, in one team','Built around what we actually do, not around adjectives.')}
      <div class="grid g3">
        ${card({ico:'extinguisher',h:'Equipment',p:'KEBS certified extinguishers, blankets, hose reels, detection and signage, supplied with the mounting and marking that make them usable.',rule:'red',d:1})}
        ${card({ico:'training',h:'Training',p:'Fire safety, Fire Marshal, First Aid, extinguisher handling and workplace awareness, delivered on your own site.',rule:true,d:2})}
        ${card({ico:'clipboard',h:'Inspection',p:'Site assessment and equipment inspection that tells you what is missing before it matters, in writing.',rule:true,d:3})}
        ${card({ico:'wrench',h:'Maintenance',p:'Biannual servicing, refilling, pressure testing, fault repair and system upgrades across fire and security.',rule:true,d:1})}
        ${card({ico:'people',h:'Preparedness',p:'Evacuation planning, timed drills, marshal roles and the Fire Marshals Club for schools.',rule:true,d:2})}
        ${card({ico:'support',h:'Support',p:'Responsive technical assistance when a system needs urgent attention, and compliance documentation when you need to evidence it.',rule:true,d:3})}
      </div>
    </div>
  </section>

  <section class="section section--sm section--mist">
    <div class="wrap">
      ${secHead('Trusted by leading organisations','Our partners','Institutions and corporations across Kenya trust Kadala Fire &amp; Safety to protect their people, property and operations.',true)}
      ${partnerMarks()}
      <p class="small dim center reveal" style="margin-top:18px">Organisations named in the Kadala company profile. Logo artwork to be supplied by the client for publication.</p>
    </div>
  </section>

  <section class="section section--sm">
    <div class="wrap">${NOT_A_BRIGADE}</div>
  </section>

  ${ctaFinal('Ready to make your space safer?',
    'Whether you need fire protection equipment, safety systems, maintenance or practical training, Kadala Fire and Safety East Africa Limited is ready to help.',
    [{label:'Get a quote',href:'#/quote',cls:'btn--solid-light'},{label:'Book training',href:'#/book-training',cls:'btn--light'},{label:'Order equipment',href:'#/products',cls:'btn--light'}],
    IMG.sprinklerRiser)}
  `
};

/* ------------------------------ ABOUT ------------------------------ */
PAGES['about'] = {
  title:`About Us | ${CO.shortName}`,
  desc:'Kadala Fire and Safety East Africa Limited is a Kenyan fire protection and safety company providing fire alarms, extinguishers, CCTV, access control, training and maintenance to institutions and corporations.',
  h1:'A safety partner, not just a supplier',
  sub:'We protect lives and property with certified systems, expert technicians and reliable support, across fire safety and security, in one team.',
  bannerImg:IMG.hoseInterior,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('Who we are')}
          <h2 class="reveal">Dedicated to delivering the best fire and safety solutions</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">Kadala Fire and Safety East Africa Limited is a Kenyan company offering
            fire alarms, CCTV, extinguishers, access control and more, serving institutions, corporations and facilities with fast,
            affordable, compliant safety systems.</p>
          <p class="reveal dim" data-d="2" style="margin-top:16px">We do not just install. We protect. Our work covers expert installation
            and maintenance of legally compliant fire and security systems for homes, offices, schools, factories, apartments and
            government buildings.</p>
          <div class="btn-row reveal" data-d="3" style="margin-top:28px">
            ${btn('Explore our solutions','#/solutions','btn--dark')}
            ${btn('Talk to an expert','#/contact','btn--out')}
          </div>
        </div>
        <div class="art-frame art-frame--photo reveal" data-d="1"><img src="${IMG.sprinklerRiser}" alt="A commissioned fire protection installation inside a plant room" loading="lazy" decoding="async"></div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Our direction','Mission and vision')}
      <div class="grid g2">
        <article class="card card--rule on-red lift reveal">
          <div class="card-ico">${G.icon('flame')}</div>
          <h3>Our mission</h3>
          <p>To provide reliable, affordable and innovative fire safety solutions that protect lives, property and business
            continuity across East Africa.</p>
        </article>
        <article class="card card--rule lift reveal" data-d="1">
          <div class="card-ico">${G.icon('globe')}</div>
          <h3>Our vision</h3>
          <p>To become East Africa's preferred provider of fire prevention and safety solutions.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('What guides us','Our core values')}
      <div class="grid g4">
        ${card({ico:'check',h:'Integrity',p:'We uphold honesty and professionalism in every engagement.',d:1})}
        ${card({ico:'star',h:'Excellence',p:'We strive for superior service delivery at every step.',d:2})}
        ${card({ico:'handshake',h:'Reliability',p:'We provide dependable products and dependable support.',d:3})}
        ${card({ico:'shield',h:'Safety',p:'Safety remains at the centre of everything we do.',d:4})}
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('Our approach')}
          <h2 class="reveal">Systems, not fire crews</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">Safety is not just a priority, it is a responsibility. Reliable,
            always on protection should not depend on the cost or the wait of an emergency response.</p>
          <p class="dim reveal" data-d="2" style="margin-top:16px">That distinction shapes how we work. Kadala builds the layer that
            comes first: detection that gives people time, equipment within reach of whoever spots the fire, lit routes out, trained
            staff who know the procedure, and a maintenance record that proves the whole system still works.</p>
        </div>
        <div class="reveal" data-d="1">
          ${checks([
            '<b>Compliant and certified.</b> Systems and installations that meet recognised fire and security standards, with documentation to prove it.',
            '<b>Fast installation.</b> Efficient deployment that minimises disruption to your school, office or facility.',
            '<b>Transparent pricing.</b> Clear, upfront quotes with no hidden costs and no surprises at invoice time.',
            '<b>Systems, not fire crews.</b> Reliable protection that does not depend on the cost or wait of emergency response.'
          ])}
        </div>
      </div>
    </div>
  </section>

  ${journeySection()}

  <section class="section section--sm">
    <div class="wrap">${NOT_A_BRIGADE}</div>
  </section>

  <section class="section section--sm section--mist">
    <div class="wrap">
      ${secHead('Our reach','Trusted by leading organisations','Institutions and corporations across Kenya trust Kadala Fire &amp; Safety to protect their people, property and operations.',true)}
      ${partnerMarks()}
    </div>
  </section>

  ${ctaFinal('Let us find the right solution for you',
    'Whether you are protecting a business, a school or an institution, Kadala Fire and Safety East Africa Limited is ready to make safety simple, affordable and effective.',
    [{label:'Talk to an expert',href:'#/contact',cls:'btn--solid-light'},{label:'Get a quote',href:'#/quote',cls:'btn--light'}],
    IMG.industrialWide)}
  `
};

/* ------------------------------ SOLUTIONS ------------------------------ */
PAGES['solutions'] = {
  title:`Solutions: Fire, Security, Service and Training | ${CO.shortName}`,
  desc:'Integrated fire protection, security systems, inspection and maintenance, and safety training from Kadala Fire and Safety East Africa Limited in Nairobi, Kenya.',
  h1:'Products and services, in one place',
  sub:'Kadala supplies certified equipment, and we install, commission, train on and maintain it. Protection does not stop at delivery.',
  bannerImg:IMG.rangeGroup,
  body:() => `
  ${explorerSection(false)}

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('How it fits together','Layers of protection, in the order they act')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Layer</th><th>What it does</th><th>What Kadala provides</th></tr></thead>
          <tbody>
            <tr><td><b>1. Prevention</b></td><td>Removes or controls the conditions that start fires</td><td>Site assessment, signage, staff awareness training</td></tr>
            <tr><td><b>2. Detection</b></td><td>Finds the fire early, while it is still small</td><td>Smoke and heat detectors, conventional and addressable panels, wireless systems</td></tr>
            <tr><td><b>3. Warning</b></td><td>Tells everyone in the building at once</td><td>Sounders, manual call points, zoned alarm panels</td></tr>
            <tr><td><b>4. First response</b></td><td>Lets a trained person tackle a small fire safely</td><td>Extinguishers, fire blankets, hose reels, handling training</td></tr>
            <tr><td><b>5. Escape</b></td><td>Gets people out along a lit, marked route</td><td>Emergency lighting, exit and directional signage, evacuation drills</td></tr>
            <tr><td><b>6. Readiness</b></td><td>Keeps all of the above working between incidents</td><td>Scheduled servicing, testing, refilling, compliance reports</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${chainSection()}
  ${journeySection()}

  ${ctaFinal('Not sure which layer you are missing?',
    'Book a site assessment. We survey the building, map the risks and come back with a written specification and an itemised quote.',
    [{label:'Request a site assessment',href:'#/quote?intent=assessment',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.hoseInterior)}
  `
};

window.KFSEA_PAGES = PAGES;
window.KFSEA_CO = CO;
window.KFSEA_IMG = IMG;
window.KFSEA_H = {secHead,eyebrow,card,product,checks,ctaFinal,partnerMarks,partnerTile,PARTNERS,NOT_A_BRIGADE,btn,tlink,
                  journeySection,chainSection,explorerSection,industriesGrid,INDUSTRIES,JOURNEY,EXPLORER};
