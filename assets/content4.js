/* ==========================================================================
   Kadala Fire & Safety EA
   v3: full screen storytelling home, partner marquee, verified fire class
   matrix, solution pages and the product catalogue.
   ========================================================================== */
(function(){
const G = window.KFSEA_G;
const CO = window.KFSEA_CO;
const IMG = window.KFSEA_IMG;
const PAGES = window.KFSEA_PAGES;
const H = window.KFSEA_H;
const {secHead,eyebrow,card,product,checks,ctaFinal,btn,tlink,journeySection,chainSection,
       explorerSection,industriesGrid} = H;

/* ---------------- New photography ---------------- */
const P = {
  residential:'assets/img/residential.webp',      residentialCard:'assets/img/residential-card.webp',
  manufacturing:'assets/img/manufacturing.webp',  manufacturingCard:'assets/img/manufacturing-card.webp',
  industrial:'assets/img/industrial.webp',
  hospitality:'assets/img/hospitality.webp',      hospitalityCard:'assets/img/hospitality-card.webp',
  loungeCard:'assets/img/lounge-card.webp',
  restaurant:'assets/img/restaurant.webp',
  corporate:'assets/img/corporate.webp',          corporateCard:'assets/img/corporate-card.webp',
  healthcare:'assets/img/healthcare.webp',        healthcareCard:'assets/img/healthcare-card.webp',
  faith:'assets/img/faith.webp',                  faithCard:'assets/img/faith-card.webp',
  education:'assets/img/education.webp',          educationCard:'assets/img/education-card.webp',
  training:'assets/img/training-people.webp',     trainingCard:'assets/img/training-card.webp',
  gauge:'assets/img/gauge.webp',
  sprinkler:'assets/img/sprinkler-riser.webp'
};

/* ---------------- Builders ---------------- */
const story = ({img,video,poster,kicker,h,p,btns,align,mid,alt}) => `
  <section class="story${align==='left'?' story--left':''}${mid?' story--mid':''}">
    <div class="story-bg">${
      video
        ? `<video autoplay muted loop playsinline preload="none" poster="${poster}" data-lazyvid="${video}" aria-label="${alt||''}"></video>`
        : `<img src="${img}" alt="${alt||''}" loading="lazy" decoding="async">`
    }</div>
    <div class="wrap">
      <div class="story-in reveal">
        ${kicker?`<span class="story-kicker"><i></i>${kicker}</span>`:''}
        <h2>${h}</h2><p>${p}</p>
        ${btns?`<div class="btn-row">${btns.map(b=>btn(b.label,b.href,b.cls||'btn--solid-light')).join('')}</div>`:''}
      </div>
    </div>
  </section>`;

const band = (txt, accent) => `
  <section class="band">
    <video autoplay muted loop playsinline preload="none" poster="assets/video/kadala-band-poster.jpg"
           data-lazyvid="assets/video/kadala-band.mp4" aria-label="Fire suppression pipework and manifolds"></video>
    <div class="band-in"><p>${txt}${accent?` <span>${accent}</span>`:''}</p></div>
  </section>`;

/* Partner marquee. Sources the canonical partner list, which contains only
   organisations whose logo artwork the client has supplied. */
const {PARTNERS, partnerTile} = H;
const marquee = () => {
  const group = n => `<div class="marquee-group"${n?' aria-hidden="true"':''}>${PARTNERS.map(partnerTile).join('')}</div>`;
  return `<div class="marquee" role="group" aria-label="Organisations Kadala works with">
    <div class="marquee-track">${group(0)}${group(1)}</div>
  </div>`;
};

/* ---------------- Verified fire class matrix ----------------
   Classification follows BS EN 2, the system Kenyan practice and KEBS
   certified extinguishers are labelled against. Y suitable, L limited,
   N not suitable. Electrical is shown as a hazard, not a class.          */
const MEDIA = ['Water','Foam','CO\u2082','ABC Dry Powder','Wet Chemical'];
const CLASSES = [
  {c:'A', t:'Solid combustibles', d:'Wood, paper, textiles, cardboard, most plastics',
   v:['Y','Y','N','Y','L']},
  {c:'B', t:'Flammable liquids', d:'Petrol, diesel, solvents, paint, oils that are not cooking oils',
   v:['N','Y','Y','Y','N']},
  {c:'C', t:'Flammable gases', d:'LPG, butane, propane, methane',
   v:['N','N','N','Y','N'], note:'1'},
  {c:'D', t:'Combustible metals', d:'Magnesium, aluminium swarf, sodium, potassium, lithium',
   v:['N','N','N','N','N'], note:'2'},
  {c:'F', t:'Cooking oils and fats', d:'Deep fat fryers, commercial kitchen ranges',
   v:['N','N','N','N','Y']},
  {c:'\u26A1', t:'Electrical equipment', d:'Live switchgear, servers, distribution boards',
   v:['N','N','Y','Y','N'], na:true, note:'3'}
];
const MK = {Y:'<span class="mk mk--y" aria-hidden="true">&#10003;</span><span class="mk-t">Yes</span>',
            N:'<span class="mk mk--n" aria-hidden="true">&#10007;</span><span class="mk-t">No</span>',
            L:'<span class="mk mk--l" aria-hidden="true">&#8776;</span><span class="mk-t">Limited</span>'};
const MKW = {Y:'Suitable', N:'Not suitable', L:'Limited effect'};

const matrix = () => `
  <div class="matrix reveal">
    <div class="matrix-head">
      <h3>Fire classes and matching extinguisher media</h3>
      <span>Classification: BS EN 2</span>
    </div>
    <div class="matrix-scroll">
      <table>
        <caption class="sr-only">Suitability of extinguisher media by fire class under BS EN 2</caption>
        <thead><tr><th scope="col">Class and fuel</th>${MEDIA.map(m=>`<th scope="col">${m}</th>`).join('')}</tr></thead>
        <tbody>
          ${CLASSES.map(r=>`
            <tr>
              <th scope="row">
                <span style="display:flex;gap:13px;align-items:flex-start">
                  <span class="cls${r.na?' cls--na':''}" aria-hidden="true">${r.c}</span>
                  <span><b>${r.na?'Electrical hazard':'Class '+r.c+': '+r.t}</b>${r.na?'':''}
                  <span class="quiet">${r.d}</span>${r.note?` <sup>${r.note}</sup>`:''}</span>
                </span>
              </th>
              ${r.v.map((v,i)=>`<td><span class="sr-only">${MEDIA[i]}: ${MKW[v]}</span>${MK[v]}</td>`).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="matrix-foot">
      <p><b>1.</b> Isolate the gas supply first. Extinguishing a gas fire while the supply is still feeding it can allow an explosive build up.</p>
      <p><b>2.</b> Standard ABC dry powder must not be used on metal fires. Class D fires need a specialist Class D powder, supplied as a separate product.</p>
      <p><b>3.</b> Electrical is not a fire class under BS EN 2. Fires are classified by the fuel that is actually burning, and the electrical risk is handled by choosing a non conductive medium and isolating the supply where it is safe to do so.</p>
      <p><b>Systems differ.</b> Under the North American NFPA system the same letters mean different things: Class C there is energised electrical equipment, and cooking oils are Class K. This table uses BS EN 2 throughout and does not mix the two.</p>
      <p><b>Final selection follows a site risk assessment</b>, not a table. Tell us what is in each area and we will specify it.</p>
      <div class="matrix-key">
        <span>${MK.Y.replace('<span class="mk-t">Yes</span>','')} Suitable</span>
        <span>${MK.L.replace('<span class="mk-t">Limited</span>','')} Limited effect</span>
        <span>${MK.N.replace('<span class="mk-t">No</span>','')} Not suitable</span>
      </div>
    </div>
  </div>`;

const wideCta = (h,label,href) => `
  <div class="wide-cta reveal"><h3>${h}</h3>${btn(label,href)}</div>`;

window.KFSEA_H2 = {story,band,marquee,matrix,wideCta,P,PARTNERS};

/* ==========================================================================
   HOME
   ========================================================================== */
PAGES['home'] = {
  title:`Fire Protection, Safety Systems and Training in Kenya | ${CO.shortName}`,
  desc:'Kadala Fire and Safety East Africa Limited provides fire protection equipment, safety systems, security technology, training, inspection and maintenance for schools, offices and institutions across Kenya.',
  hero:true,
  body:() => `
  <section class="hero hero--full" id="hero">
    <div class="hero-media" id="hero-media">
      <img class="poster" id="hero-poster" src="assets/video/kadala-hero-poster.jpg" alt="Fire suppression pipework and actuator heads in a plant room">
      <video id="hero-video" class="hero-vid" muted playsinline preload="none" aria-hidden="true"
             poster="assets/video/kadala-hero-poster.jpg"></video>
      <video id="hero-video-2" class="hero-vid" muted playsinline preload="none" aria-hidden="true"
             poster="assets/video/kadala-hero-2-poster.jpg"></video>
    </div>
    <div class="hero-scrim"></div>
    <div class="hero-grain"></div>
    <button class="vid-toggle" id="vid-toggle" type="button" aria-label="Pause background video" aria-pressed="false">
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="2" width="4" height="12" rx="1"/><rect x="9" y="2" width="4" height="12" rx="1"/></svg>
    </button>
    <div class="wrap">
      <div class="hero-inner">
        <span class="hero-label"><i></i>Fire Protection &nbsp;&middot;&nbsp; Safety &nbsp;&middot;&nbsp; Preparedness</span>
        <h1><span class="mask-rise"><span>Your safety,</span></span><span class="mask-rise"><span class="l2">our mission<span class="dot">.</span></span></span></h1>
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
        <div>${eyebrow('What Kadala does')}
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

  ${band('A fire meets your protection in sequence.', 'Every layer buys time for the next.')}

  ${explorerSection(true)}

  ${story({
    img:P.industrial, align:'left', kicker:'02 &nbsp;/&nbsp; Fire protection equipment',
    alt:'A textile mill worker at a printing and finishing line on a working factory floor',
    h:'Specified by risk, not by catalogue page',
    p:'The right extinguisher depends on what is actually likely to burn in each area. We specify by risk, supply KEBS certified units with wall brackets and signage, and service them on schedule.',
    btns:[{label:'Open the equipment store',href:'#/products'},{label:'Fire protection',href:'#/fire-protection',cls:'btn--light'}]
  })}

  <section class="section">
    <div class="wrap">
      ${secHead('Equipment','Supplied, installed and serviced','Certified fire protection equipment for institutions, workplaces and residential buildings. Request a price on any item.')}
      <div class="grid g4 tilt-wrap">
        ${product({img:IMG.range4,h:'Fire Extinguishers',p:'ABC dry powder, CO\u2082, foam, water mist and mobile trolley units.',chips:['KEBS certified','Refillable'],app:'Offices, schools, workshops, vehicles',order:'Fire Extinguishers',over:'Wall brackets included'})}
        ${product({img:IMG.smokeDetector,fill:true,h:'Smoke Detectors',p:'Early stage smoke detection with audible warning, wired and wireless.',chips:['Wired / wireless'],app:'Residential, commercial, institutional',order:'Smoke Detectors',over:'Integrates with alarm systems'})}
        ${product({img:IMG.callPoint,fill:true,h:'Manual Call Points',p:'Lets a person raise the alarm the moment they see a fire.',chips:['BS 5839'],app:'Exit routes, stairwells, corridors',order:'Manual Call Points',over:'Resettable element'})}
        ${product({img:IMG.hoseCabinet,fill:true,h:'Hose Reels &amp; Cabinets',p:'30m systems in stainless or powder coated cabinets, manual or automatic.',chips:['30 m'],app:'Corridors, factories, apartment blocks',order:'Fire Hose Reels',over:'Installed on request'})}
      </div>
      <div style="margin-top:34px">${wideCta('Not sure which media each area of your building needs?','See the fire class matrix','#/fire-protection')}</div>
    </div>
  </section>

  ${story({
    img:P.sprinkler, mid:true, kicker:'06 &nbsp;/&nbsp; Fixed installations',
    alt:'Zoned sprinkler risers with control valves, pressure gauges and zone labelling on a building exterior',
    h:'A building protects itself in zones',
    p:'Fixed protection is laid out zone by zone, and every valve, gauge and label has to be right on the one day it matters. Kadala inspects, services and documents the equipment it supplies, and keeps the record a compliance officer will ask for.',
    btns:[{label:'Inspection and maintenance',href:'#/service-maintenance'}]
  })}

  ${chainSection()}
  ${journeySection()}

  ${story({
    img:P.training, align:'left', kicker:'07 &nbsp;/&nbsp; Training and preparedness',
    alt:'Trainees practising with fire extinguishers at a controlled training burn',
    h:'Equipment only works if somebody knows how to use it',
    p:'On site training delivered with your building, your escape routes and the equipment your people will actually reach for. Fire safety, Fire Marshal, First Aid, extinguisher handling and evacuation drills.',
    btns:[{label:'Book training',href:'#/book-training'},{label:'All programmes',href:'#/training',cls:'btn--light'}]
  })}

  <section class="section">
    <div class="wrap">
      ${secHead('Training','Choose a programme','Select a programme to see what it covers and how it runs.')}
      <div class="trainer reveal" id="trainer">
        <div class="trainer-media">
          ${[{img:P.training},{img:IMG.wallSign},{art:'firstaid'},{art:'assembly'},{img:IMG.hoseInterior}]
            .map((m,i)=>`<div class="tm${m.art?' is-art':''}${i===0?' on':''}" data-tm="${i}">${
              m.art==='firstaid' ? G.svgFirstAid() : m.art==='assembly' ? G.svgSign('assembly')
              : `<img src="${m.img}" alt="" loading="lazy" decoding="async">`
            }</div>`).join('')}
        </div>
        <div class="trainer-body">
          <div class="trainer-tabs" role="tablist" aria-label="Training programmes">
            ${['Fire Safety Training','Fire Marshal Training','First Aid Training','Fire Drills','Emergency Evacuation Training']
              .map((t,i)=>`<button class="ttab" role="tab" type="button" data-tt="${i}" aria-selected="${i===0}">${t}${G.ARROW}</button>`).join('')}
          </div>
          <div class="trainer-detail" id="trainer-detail"></div>
        </div>
      </div>
    </div>
  </section>

  ${story({
    img:P.education, kicker:'08 &nbsp;/&nbsp; The Fire Marshals Club',
    alt:'Students and staff walking through a university campus',
    h:'Building a culture of safety',
    p:'The Kadala Fire Marshals Club introduces practical fire safety, preparedness, First Aid and emergency response awareness in schools. Learn, train, practice, lead, protect.',
    btns:[{label:'Discover the Fire Marshals Club',href:'#/fire-marshals-club'},{label:'School programme',href:'#/schools',cls:'btn--light'}]
  })}

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Industries we serve','Eight building types, one approach','Six sectors are named in our company profile. These are the environments those sectors actually occupy.')}
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
      ${secHead('Our partners','Trusted by leading organisations','Institutions and corporations across Kenya trust Kadala Fire &amp; Safety to protect their people, property and operations.',true)}
    </div>
    ${marquee()}
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Resources','Practical guidance, written plainly','Fire safety guides you can act on, and the reference material behind the equipment we supply.')}
      <div class="grid g3">
        ${card({ico:'doc',h:'Fire safety guides',p:'What to do when an alarm sounds, how to use an extinguisher safely, and how often equipment should be serviced.',href:'#/resources',cta:'Read the guides',rule:'red',d:1})}
        ${card({ico:'risk',h:'Fire class reference',p:'A verified BS EN 2 matrix of fire classes and the extinguisher media that suit each one.',href:'#/fire-protection',cta:'Open the matrix',rule:true,d:2})}
        ${card({ico:'calendar',h:'Events and programmes',p:'The session types we run, from staff training days to school safety programmes.',href:'#/events',cta:'See programmes',rule:true,d:3})}
      </div>
    </div>
  </section>

  <section class="section section--sm section--mist">
    <div class="wrap">
      ${secHead('Trust and credibility','What we can evidence, and what we cannot yet','We publish the standards our documentation references and nothing beyond them.',true)}
      <div class="grid g4">
        ${card({ico:'check',h:'BS 5839',p:'Fire alarm systems and accessories described as BS 5839 compliant.',rule:'red',d:1})}
        ${card({ico:'shield',h:'BAFE SP203',p:'Fire alarm systems described as BAFE SP203 compliant for all building types.',rule:true,d:2})}
        ${card({ico:'star',h:'KEBS',p:'Supplied extinguishers described as KEBS certified, refillable, with wall brackets.',rule:true,d:3})}
        ${card({ico:'light',h:'OSHA / NEMA',p:'Emergency lighting and safety signage described as OSHA and NEMA compliant.',rule:true,d:4})}
      </div>
      <div class="notice reveal" style="margin-top:26px">
        <b>Certificate documents are not yet published</b>
        The standards above come from Kadala's own company profile and service documentation. Certificates, licences and manufacturer
        authorisations have not been supplied to us, so none are displayed and no further certification is claimed.
        <a href="#/certifications" style="font-weight:700">See the compliance page</a>
      </div>
    </div>
  </section>

  ${story({
    img:P.residential, mid:true, kicker:'14 &nbsp;/&nbsp; Ready when you are',
    alt:'A modern residential building lit at dusk',
    h:'Ready to make safety a priority?',
    p:'Tell us the building type, the floor area and what happens inside it. We come back with a written specification and an itemised quote.',
    btns:[{label:'Get a quote',href:'#/quote'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}]
  })}
  `
};

/* ==========================================================================
   SOLUTION PAGES
   ========================================================================== */
PAGES['fire-protection'] = {
  title:`Fire Protection Kenya: Extinguishers, Blankets, Hose Reels | ${CO.shortName}`,
  desc:'Fire extinguishers, fire blankets and fire hose reels supplied, installed, inspected and maintained across Kenya, specified by fire class and site risk.',
  h1:'Fire protection',
  sub:'Equipment within reach of the person who sees the fire, specified by what is actually likely to burn in each area.',
  bannerImg:IMG.rangeRender,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split" style="margin-bottom:clamp(38px,4.4vw,64px)">
        <div>
          ${eyebrow('Portable protection')}
          <h2 class="reveal">Fire extinguishers</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">We specify by risk, supply KEBS certified units with wall brackets
            and location signage, and service them on schedule.</p>
          <div class="chips reveal" data-d="2" style="margin-top:20px">
            <span class="chip chip--red">KEBS certified</span><span class="chip">Refillable</span><span class="chip">Wall brackets included</span>
          </div>
          <div class="btn-row reveal" data-d="3" style="margin-top:26px">
            ${btn('Order fire extinguishers','#/fire-extinguishers')}
            ${btn('Request a price list','#/quote?intent=order','btn--out')}
          </div>
        </div>
        <div class="reveal" data-d="1">
          <div class="figure figure--wide"><img src="${IMG.range4}" alt="Powder, water, CO2 and wet chemical fire extinguishers" loading="lazy" decoding="async" style="object-fit:contain;background:var(--mist);padding:20px"></div>
        </div>
      </div>
      <div class="grid g4 tilt-wrap">
        ${product({art:G.svgExtinguisher('powder'),h:'ABC Dry Powder',p:'General purpose cover for mixed risks, rated for Class A, B and C.',chips:['KEBS certified'],app:'Offices, schools, corridors, vehicles',order:'ABC Dry Powder Extinguisher',over:'Class A, B and C'})}
        ${product({img:IMG.co2,h:'CO\u2082',p:'Leaves no residue, so electrical equipment survives the extinguishing.',chips:['KEBS certified'],app:'Server rooms, switch rooms, laboratories',order:'CO2 Extinguisher',over:'Safe on live electrical equipment'})}
        ${product({img:IMG.foam,h:'Foam (AFFF)',p:'Blankets flammable liquids and stops re ignition at the surface.',chips:['KEBS certified'],app:'Fuel stores, workshops, generator rooms',order:'Foam Extinguisher',over:'Class A and B'})}
        ${product({art:G.svgExtinguisher('water'),h:'Water and Water Mist',p:'Cools burning solids. Mist variants reduce the risk around electrical equipment.',chips:['KEBS certified'],app:'Stores, dormitories, paper and textile risks',order:'Water Mist Extinguisher',over:'Class A'})}
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Choosing correctly','Match the medium to the fuel','This is the reference we work from. It is general guidance, and the specification for your site follows a risk assessment.')}
      ${matrix()}
    </div>
  </section>

  ${story({
    img:P.restaurant, align:'left', mid:true, kicker:'Kitchens and canteens',
    alt:'A hotel restaurant dining room',
    h:'Class F needs wet chemical, and nothing else will do',
    p:'Cooking oils and fats behave differently from every other fuel. Water and foam can cause a violent eruption on burning oil. Commercial kitchens need wet chemical units and a fire blanket within reach of the range.',
    btns:[{label:'Order fire blankets',href:'#/fire-blankets'},{label:'Request a site assessment',href:'#/quote?intent=assessment',cls:'btn--light'}]
  })}

  <section class="section">
    <div class="wrap">
      ${secHead('Also in this family','Blankets, trolleys and hose reels')}
      <div class="grid g3 tilt-wrap">
        ${product({art:G.svgBlanket(),h:'Fire Blankets',p:'Smothers a small fire at its source, and can be used on a person whose clothing has caught alight.',chips:['1m x 1m to 1.8m x 1.8m'],app:'Kitchens, laboratories, restaurants, schools',order:'Fire Blankets',over:'Wall mounted pouch'})}
        ${product({img:IMG.trolley,h:'Mobile Trolley Units',p:'High capacity wheeled extinguishers for large open risks where a portable will not cover the area.',chips:['Wheeled'],app:'Factories, yards, fuel bays',order:'Mobile Trolley Extinguisher',over:'For large open risks'})}
        ${product({img:IMG.hoseCabinet,fill:true,h:'Fire Hose Reels',p:'30m hose systems with stainless or powder coated cabinets, manual or automatic.',chips:['30 m'],app:'Corridors, factories, apartment blocks',order:'Fire Hose Reels',over:'Installed on request'})}
      </div>
      <div style="margin-top:34px">${wideCta('Every item here can be quoted or ordered today.','Open the equipment store','#/products')}</div>
    </div>
  </section>

  ${ctaFinal('Specify it once. Maintain it properly.',
    'Tell us the building type, the floor area and what happens inside it. We come back with a specification and an itemised quote.',
    [{label:'Get a quote',href:'#/quote',cls:'btn--solid-light'},{label:'Book a service',href:'#/quote?intent=service',cls:'btn--light'}],
    IMG.extRow)}
  `
};

PAGES['fire-detection'] = {
  title:`Fire Detection and Alarm Systems Kenya | ${CO.shortName}`,
  desc:'Conventional, addressable and wireless fire alarm systems, smoke detectors, heat detectors, manual call points and sounders, supplied and commissioned as BS 5839 and BAFE SP203 compliant systems.',
  h1:'Fire detection',
  sub:'Detection is the layer that buys people time. Everything downstream depends on the fire being found while it is still small.',
  bannerImg:IMG.callPoint,
  body:() => `
  <section class="section">
    <div class="wrap">
      ${secHead('Systems','Conventional, addressable and wireless','Professional fire detection and alarm solutions for different building types, supplied and commissioned as BS 5839 and BAFE SP203 compliant systems.')}
      <div class="grid g3 tilt-wrap">
        ${product({art:G.svgPanel('conventional'),h:'Conventional Fire Alarms',p:'Zoned detection for smaller and simpler buildings, where a zone identifies the area in alarm.',chips:['BS 5839'],spec:['Zoned control panel','Detector and call point circuits','Battery standby'],app:'Small offices, clinics, apartments',order:'Conventional Fire Alarm System',over:'Zone level identification'})}
        ${product({art:G.svgPanel('addressable'),h:'Addressable Fire Alarms',p:'Each device reports its own address, so the panel names the exact device in alarm rather than just the zone.',chips:['BS 5839','BAFE SP203'],spec:['Device level identification','Loop wiring','Fault and event logging'],app:'Schools, hospitals, campuses',order:'Addressable Fire Alarm System',over:'Names the exact device'})}
        ${product({art:G.svgSounder(),h:'Wireless Fire Alarms',p:'Quick to install with no wiring damage. Ideal for older or delicate buildings and sites that cannot close for cabling.',chips:['BS 5839'],spec:['Minimal wiring','Faster installation','Easy expansion'],app:'Heritage and occupied buildings',order:'Wireless Fire Alarm System',over:'No chasing walls'})}
        ${product({img:IMG.smokeDetector,fill:true,h:'Smoke Detectors',p:'Early stage smoke detection with audible warning, in wired and wireless configurations.',chips:['Wired / wireless'],app:'Residential, commercial, institutional',order:'Smoke Detectors',over:'Integrates with alarm systems'})}
        ${product({art:G.svgDetector('heat'),h:'Heat Detectors',p:'For kitchens, plant rooms and dusty stores where smoke detection would false alarm.',app:'Kitchens, plant rooms, workshops',order:'Heat Detectors',over:'Avoids nuisance alarms'})}
        ${product({img:IMG.callPoint,fill:true,h:'Manual Call Points',p:'Lets a person raise the alarm the moment they see a fire, without waiting for detection.',chips:['BS 5839'],app:'Exit routes, stairwells, corridors',order:'Manual Call Points',over:'Resettable element'})}
      </div>
    </div>
  </section>

  ${story({
    img:P.corporate, align:'left', mid:true, kicker:'Addressable systems',
    alt:'A modern office boardroom with glazed partitions',
    h:'A zone tells you roughly where. An address tells you exactly where.',
    p:'In a large building the difference matters. A zoned panel sends someone to a floor. An addressable panel names the device, which is the difference between finding a fire and searching for it.',
    btns:[{label:'Request a fire alarm assessment',href:'#/quote?intent=assessment&item=Fire%20Alarm%20Assessment'}]
  })}

  <section class="section">
    <div class="wrap">
      ${secHead('Why wireless','Minimal disruption, faster installation')}
      <div class="split">
        <div class="reveal">
          ${checks([
            'Minimal wiring, so no chasing walls or lifting finishes',
            'Faster installation, often within a single working visit',
            'Reduced disruption to teaching, trading or production',
            'Suitable for heritage and difficult to wire buildings',
            'Easy expansion as the building or the occupancy changes',
            'Lower decoration and restoration costs after install'
          ])}
        </div>
        <div class="art-frame reveal" data-d="1">${G.svgPanel('addressable')}</div>
      </div>
      <div style="margin-top:34px">${wideCta('Detection is only useful if the warning reaches everyone.','See emergency systems','#/emergency-systems')}</div>
    </div>
  </section>

  ${ctaFinal('Book a fire alarm assessment',
    'We survey the building, establish the detection category it needs and specify the panel, devices and coverage in writing.',
    [{label:'Request an assessment',href:'#/quote?intent=assessment&item=Fire%20Alarm%20Assessment',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.hoseInterior)}
  `
};

PAGES['emergency-systems'] = {
  title:`Emergency Lighting and Safety Signage Kenya | ${CO.shortName}`,
  desc:'Emergency lighting, exit and directional signage, fire point signs and assembly point marking supplied, installed and tested across Kenya.',
  h1:'Emergency systems',
  sub:'Getting people out depends on two things working when the power does not: light on the route, and signs that can still be read.',
  bannerImg:IMG.wallSign,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="grid g3 tilt-wrap">
        ${product({art:G.svgEmergencyLight(),h:'Emergency Lighting',p:'Maintained and non maintained luminaires that illuminate escape routes when the mains supply drops.',chips:['OSHA / NEMA','LED'],spec:['Exit lights and luminaires','Directional signage','Testing and maintenance'],app:'Stairwells, corridors, exits',order:'Emergency Lighting',over:'Tested and maintained'})}
        ${product({art:G.svgSign('exit'),h:'Exit and Directional Signs',p:'Photoluminescent and LED signage that stays readable when the lights and the air are not on your side.',chips:['Photoluminescent'],spec:['Final exit signage','Directional route signs'],app:'All building types',order:'Exit Signage',over:'Readable without power'})}
        ${product({art:G.svgSign('extinguisher'),h:'Fire Point Signs',p:'Marks extinguisher and fire point locations so they can be found by someone who has never looked before.',chips:['Photoluminescent'],app:'Corridors, workshops, kitchens',order:'Fire Point Signage',over:'Makes equipment findable'})}
        ${product({art:G.svgSign('assembly'),h:'Assembly Point Signs',p:'Defines where people gather after evacuation, which is what turns a drill into a roll call.',app:'Car parks, fields, courtyards',order:'Assembly Point Signage',over:'Supports the roll call'})}
        ${product({img:IMG.wallSign,fill:true,h:'Safety and Warning Signage',p:'Warning, prohibition and mandatory signage to complete a marked and legible building.',chips:['NEMA / OSHA'],app:'All building types',order:'Safety Signage',over:'Completes the scheme'})}
        ${product({art:G.svgSounder(),h:'Sounders and Strobes',p:'Audible and visual warning devices, with standby batteries so the warning survives a mains failure.',chips:['BS 5839'],app:'All system types',order:'Sounders and Strobes',over:'Backup batteries'})}
      </div>
    </div>
  </section>

  ${story({
    img:P.hospitality, align:'left', mid:true, kicker:'Unfamiliar occupants',
    alt:'A double height hotel lobby lounge with full height glazing and open seating',
    h:'Guests do not know your building',
    p:'In hotels, malls and hospitals most occupants have never walked the escape route. Lit, marked and unobstructed routes are doing the entire job of orientation, in smoke, at night, for people who arrived yesterday.',
    btns:[{label:'Request a site assessment',href:'#/quote?intent=assessment'}]
  })}

  ${ctaFinal('Light the route, mark the route, test the route',
    'Emergency lighting and signage are only compliant while they still work. We install, test and document them on a schedule.',
    [{label:'Get a quote',href:'#/quote',cls:'btn--solid-light'},{label:'Book a service',href:'#/quote?intent=service',cls:'btn--light'}],
    IMG.wallSign)}
  `
};

/* Older entry points keep working after the solutions split */
PAGES['fire-safety'] = PAGES['fire-protection'];
PAGES['inspection-maintenance'] = PAGES['service-maintenance'];
PAGES['safety-training'] = PAGES['training'];
})();
