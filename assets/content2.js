/* ==========================================================================
   Kadala Fire & Safety EA
   Fire safety, security systems, service and maintenance, equipment store.
   ========================================================================== */
(function(){
const G = window.KFSEA_G;
const CO = window.KFSEA_CO;
const IMG = window.KFSEA_IMG;
const PAGES = window.KFSEA_PAGES;
const {secHead,eyebrow,card,product,checks,ctaFinal,btn,journeySection} = window.KFSEA_H;

/* ------------------------------ FIRE SAFETY ------------------------------ */
PAGES['fire-safety'] = {
  title:`Fire Safety Solutions Kenya: Extinguishers, Alarms, Lighting | ${CO.shortName}`,
  desc:'Fire extinguishers, fire alarm systems, wireless fire alarms, emergency lighting, fire blankets, hose reels, smoke detectors and fire safety signage supplied and installed across Kenya.',
  h1:'Fire safety solutions',
  sub:'Detection that buys time, equipment within reach, and lit routes out. Specified for your building and maintained so it still works next year.',
  bannerImg:IMG.rangeRender,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split" style="margin-bottom:clamp(38px,4.4vw,64px)">
        <div>
          ${eyebrow('Portable protection')}
          <h2 class="reveal">Fire extinguishers</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">The right extinguisher depends on what is likely to burn.
            We specify by risk, supply KEBS certified units with wall brackets, and service them on schedule.</p>
          <div class="chips reveal" data-d="2" style="margin-top:20px">
            <span class="chip chip--red">KEBS certified</span><span class="chip">Refillable</span><span class="chip">Wall brackets included</span>
          </div>
          <div class="btn-row reveal" data-d="3" style="margin-top:26px">
            ${btn('Order fire extinguishers','#/quote?item=Fire%20Extinguishers&amp;intent=order')}
            ${btn('Request a price list','#/quote?intent=order','btn--out')}
          </div>
        </div>
        <div class="reveal" data-d="1">
          <div class="figure figure--wide"><img src="${IMG.range4}" alt="Powder, water, CO2 and wet chemical fire extinguishers" loading="lazy" decoding="async" style="object-fit:contain;background:var(--mist);padding:20px"></div>
        </div>
      </div>

      <div class="grid g4 tilt-wrap">
        ${product({img:IMG.extPowder,h:'ABC Dry Powder',p:'General purpose cover for mixed risks. The default choice for corridors, classrooms and vehicles.',chips:['KEBS certified','Refillable'],app:'Offices, schools, corridors, vehicles',order:'ABC Dry Powder Extinguisher',over:'Class A, B and C risks'})}
        ${product({img:IMG.co2,h:'CO\u2082',p:'Displaces oxygen and leaves no residue, so electrical equipment survives the extinguishing.',chips:['KEBS certified','Non residue'],app:'Server rooms, switch rooms, laboratories',order:'CO2 Extinguisher',over:'Safe on live electrical equipment'})}
        ${product({img:IMG.foam,h:'Foam (AFFF)',p:'Forms a blanket over flammable liquids and stops re ignition at the surface.',chips:['KEBS certified','Refillable'],app:'Fuel stores, workshops, generator rooms',order:'Foam Extinguisher',over:'Class A and B risks'})}
        ${product({img:IMG.extMist,h:'Water and Water Mist',p:'Cools burning solids. Water mist variants reduce the risk around electrical equipment.',chips:['KEBS certified'],app:'Stores, dormitories, paper and textile risks',order:'Water Mist Extinguisher',over:'Class A risks'})}
      </div>

      <div class="grid g2 tilt-wrap" style="margin-top:22px">
        ${product({img:IMG.trolley,h:'Mobile Trolley Units',p:'High capacity wheeled extinguishers for large open risks where a portable unit does not give enough coverage.',chips:['KEBS certified','Wheeled'],app:'Factories, yards, fuel bays, plant rooms',order:'Mobile Trolley Extinguisher',over:'For large open risk areas'})}
        ${product({img:IMG.blanket,h:'Fire Blankets',p:'Smothers a small fire at its source, and can be used on a person whose clothing has caught alight.',chips:['1m x 1m to 1.8m x 1.8m','Wall mounted'],app:'Kitchens, laboratories, restaurants, schools, offices, homes',order:'Fire Blankets',over:'Fire resistant, wall mounted pouch'})}
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Choosing correctly','Fire classes and matching equipment','General guidance on how fires are classified and which media suit each class. Final selection for your site is set by the risk assessment, not by a table.')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Class</th><th>Type of fire</th><th>Typically found in</th><th>Commonly suitable media</th></tr></thead>
          <tbody>
            <tr><td><span class="fireclass">A</span></td><td>Solids such as wood, paper, textiles and rubbish</td><td>Classrooms, offices, stores, dormitories</td><td>Water, water mist, foam, ABC dry powder</td></tr>
            <tr><td><span class="fireclass">B</span></td><td>Flammable liquids such as petrol, diesel, solvents and paint</td><td>Workshops, fuel stores, generator rooms</td><td>Foam, CO\u2082, ABC dry powder</td></tr>
            <tr><td><span class="fireclass">C</span></td><td>Flammable gases such as LPG and butane</td><td>Kitchens, gas stores, laboratories</td><td>ABC dry powder, after isolating the gas supply</td></tr>
            <tr><td><span class="fireclass">D</span></td><td>Combustible metals</td><td>Specialist industrial and laboratory settings</td><td>Specialist powder only</td></tr>
            <tr><td><span class="fireclass">F</span></td><td>Cooking oils and fats</td><td>Commercial kitchens, canteens, restaurants</td><td>Wet chemical, fire blanket</td></tr>
            <tr><td><span class="fireclass alt">E</span></td><td>Fires involving live electrical equipment</td><td>Server rooms, switch rooms, offices</td><td>CO\u2082, water mist, isolating the supply where safe</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small dim reveal" style="margin-top:16px">Class E is not a formal fire class in every standard, because electrical fires are
        described by the fuel that is actually burning. It appears here because it is how most buildings think about the risk.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Detection and warning','Fire alarm systems','Professional fire detection and alarm solutions for different building types, supplied and commissioned as BS 5839 and BAFE SP203 compliant systems.')}
      <div class="grid g3 tilt-wrap">
        ${product({art:G.svgPanel('conventional'),h:'Conventional Fire Alarms',p:'Zoned detection suited to smaller and simpler buildings, where a zone identifies the area in alarm.',chips:['BS 5839'],spec:['Zoned control panel','Detector and call point circuits','Battery standby'],app:'Small offices, clinics, apartments',order:'Conventional Fire Alarm System',over:'Zone level identification'})}
        ${product({art:G.svgPanel('addressable'),h:'Addressable Fire Alarms',p:'Each device reports its own address, so the panel names the exact device in alarm rather than just the zone.',chips:['BS 5839','BAFE SP203'],spec:['Device level identification','Loop wiring','Fault and event logging'],app:'Schools, hospitals, multi storey and campus buildings',order:'Addressable Fire Alarm System',over:'Device level identification'})}
        ${product({art:G.svgDetector('smoke'),h:'Smoke Detectors',p:'Early stage smoke detection with audible warning, in wired and wireless configurations.',chips:['Wired / wireless'],spec:['Early stage detection','Audible warning','Integrates with alarm systems'],app:'Residential and commercial',order:'Smoke Detectors',over:'Wired and wireless options'})}
        ${product({art:G.svgDetector('heat'),h:'Heat Detectors',p:'For areas where smoke detection would false alarm, such as kitchens, boiler rooms and dusty stores.',spec:['Fixed temperature and rate of rise types','Suited to kitchens and plant rooms'],app:'Kitchens, plant rooms, workshops',order:'Heat Detectors',over:'Avoids nuisance alarms'})}
        ${product({img:IMG.callPoint,fill:true,h:'Manual Call Points',p:'Lets a person raise the alarm the moment they see a fire, without waiting for detection.',chips:['BS 5839'],spec:['Resettable element','Surface or flush mounting'],app:'Exit routes, stairwells, corridors',order:'Manual Call Points',over:'Resettable element'})}
        ${product({img:IMG.sounder,h:'Sounders and Accessories',p:'Panels, detectors, call points, sirens and backup batteries: the parts that make an alarm into a system.',chips:['BS 5839'],spec:['Sounders and strobes','Backup batteries','Control panel accessories'],app:'All system types',order:'Fire Alarm Accessories',over:'Backup batteries included'})}
      </div>
      <div class="btn-row reveal" style="margin-top:30px">
        ${btn('Request a fire alarm assessment','#/quote?intent=assessment&amp;item=Fire%20Alarm%20Assessment')}
        ${btn('Order smoke detectors','#/quote?item=Smoke%20Detectors&amp;intent=order','btn--out')}
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('Minimal disruption')}
          <h2 class="reveal">Wireless fire alarms</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">Quick to install, with no wiring damage. Ideal for older or delicate
            buildings, and for sites that cannot close for a cabling programme.</p>
          <div class="reveal" data-d="2" style="margin-top:24px">
            ${checks([
              'Minimal wiring, so no chasing walls or lifting finishes',
              'Faster installation, often within a single working visit',
              'Reduced disruption to teaching, trading or production',
              'Suitable for heritage and difficult to wire buildings',
              'Easy expansion as the building or the occupancy changes',
              'Lower decoration and restoration costs after install'
            ])}
          </div>
          <div class="btn-row reveal" data-d="3" style="margin-top:28px">
            ${btn('Ask about wireless systems','#/quote?item=Wireless%20Fire%20Alarm%20System')}
          </div>
        </div>
        <div class="art-frame reveal" data-d="1" style="background:rgba(255,255,255,.06)">${G.svgPanel('addressable')}</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Getting people out','Emergency lighting, hose reels and signage','Emergency lighting helps occupants navigate a building safely when normal power fails, which in a fire it usually does.')}
      <div class="grid g3 tilt-wrap">
        ${product({img:IMG.emgLight,fill:true,h:'Emergency Lighting',p:'Maintained and non maintained luminaires that illuminate escape routes when the mains supply drops.',chips:['OSHA / NEMA','LED'],spec:['Emergency exit lights and luminaires','Directional signage','Testing and maintenance'],app:'Stairwells, corridors, exits',order:'Emergency Lighting',over:'Tested and maintained'})}
        ${product({img:IMG.hoseCabinet,fill:true,h:'Fire Hose Reels and Cabinets',p:'30m hose systems with stainless or powder coated cabinets, in manual or automatic configurations.',chips:['30 m'],spec:['Supply and installation','Inspection and maintenance','Manual or automatic reels'],app:'Corridors, factories, warehouses, apartment blocks',order:'Fire Hose Reels',over:'Installed on request'})}
        ${product({img:IMG.exitCorridor,fill:true,h:'Fire Safety Signage',p:'Photoluminescent and LED signage that stays readable when the lights and the air are not on your side.',chips:['Photoluminescent','NEMA / OSHA'],spec:['Fire exit and emergency route signs','Fire extinguisher and fire point signs','Assembly point signs','Warning signs'],app:'All building types',order:'Fire Safety Signage',over:'Photoluminescent and LED'})}
      </div>
      <div class="grid g3" style="margin-top:38px">
        <div class="figure figure--tall reveal"><img src="${IMG.hoseGarden}" alt="Outdoor fire point with hose reel" loading="lazy" decoding="async">
          <div class="figure-cap">External fire points, sited where people can reach them</div></div>
        <div class="figure figure--tall reveal" data-d="1"><img src="${IMG.hoseInterior}" alt="Interior hose reel and fire cabinet installation" loading="lazy" decoding="async">
          <div class="figure-cap">Interior hose reel and cabinet installation</div></div>
        <div class="figure figure--tall reveal" data-d="2"><img src="${IMG.wallSign}" alt="Wall mounted extinguisher below its location sign" loading="lazy" decoding="async">
          <div class="figure-cap">Signage is what makes equipment findable</div></div>
      </div>
      <div class="btn-row reveal" style="margin-top:30px">
        ${btn('Request a site assessment','#/quote?intent=assessment')}
        ${btn('Full equipment range','#/products','btn--out')}
      </div>
    </div>
  </section>

  ${ctaFinal('Specify it once. Maintain it properly.',
    'Tell us the building type, the floor area and what happens inside it. We will come back with a specification and an itemised quote.',
    [{label:'Get a quote',href:'#/quote',cls:'btn--solid-light'},{label:'Book a service',href:'#/quote?intent=service',cls:'btn--light'}],
    IMG.sprinklerRiser)}
  `
};

/* ------------------------------ SECURITY ------------------------------ */
PAGES['security-systems'] = {
  title:`Security Systems Kenya: CCTV, Intruder Alarms, Access Control | ${CO.shortName}`,
  desc:'CCTV installation, intruder alarm systems and access control using card, PIN and biometric credentials, supplied, installed and maintained in Nairobi and across Kenya.',
  h1:'Security systems',
  sub:'Fire and security are the same problem seen from two angles: who is in the building, and what is happening in it. We specify both together.',
  bannerImg:IMG.cabinet,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="grid g3 tilt-wrap">
        ${product({img:IMG.cctvBullet,h:'CCTV Systems',p:'HD video surveillance for monitoring, deterrence and evidence, with night vision and remote mobile viewing.',chips:['HD','Night vision','Mobile viewing'],spec:['Indoor and outdoor cameras','Remote monitoring and playback','Motion detection and recording'],app:'Perimeters, entrances, corridors, yards',order:'CCTV System',over:'Remote mobile viewing'})}
        ${product({img:IMG.cctvDome,h:'Dome and Internal Cameras',p:'Discreet internal coverage for receptions, corridors and retail floors where a bullet camera would dominate the room.',chips:['HD','Indoor'],spec:['Vandal resistant housings','Wide internal coverage'],app:'Receptions, classrooms, shop floors',order:'Dome CCTV Cameras',over:'Discreet internal coverage'})}
        ${product({img:IMG.intruder,fill:true,h:'Intruder Alarms',p:'Infrared and motion triggered detection for entry points and internal spaces, integrating with CCTV.',chips:['PIR','Works with CCTV'],spec:['Motion detection','Door and window sensors','Alarm panels','Sirens and silent alerts'],app:'Offices, warehouses, schools, homes',order:'Intruder Alarm System',over:'Sirens and silent alerts'})}
        ${product({img:IMG.sounderWall,fill:true,h:'External Sirens and Strobes',p:'Audible and visual alerting at the boundary, so an intrusion is announced outside as well as inside.',spec:['Sounder and strobe','Tamper protection'],app:'Building perimeters',order:'External Siren',over:'Tamper protected'})}
        ${product({img:IMG.accessCard,fill:true,h:'Card and PIN Access Control',p:'Manage who goes where, and keep a record of it. Single door through to networked multi door systems.',chips:['Card','PIN','Network ready'],spec:['Single door and multi door systems','Staff entry tracking','Networked configurations'],app:'Offices, server rooms, stores, labs',order:'Access Control (Card / PIN)',over:'Tracks staff entry'})}
        ${product({img:IMG.accessBio,fill:true,h:'Biometric Access Control',p:'Fingerprint credentials for areas where a card that can be lent or lost is not good enough.',chips:['Biometric'],spec:['Fingerprint enrolment','Integrates with door hardware'],app:'Server rooms, cash offices, restricted areas',order:'Biometric Access Control',over:'Fingerprint enrolment'})}
      </div>
      <div class="btn-row reveal" style="margin-top:30px">
        ${btn('Request a security assessment','#/quote?intent=assessment&amp;item=Security%20Assessment')}
        ${btn('Talk to an expert','#/contact','btn--out')}
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Why specify them together','One survey, one design, one point of accountability')}
      <div class="grid g3">
        ${card({ico:'route',h:'Escape routes stay usable',p:'Access controlled doors have to release on a fire alarm condition. Designing the two systems separately is how locked exits happen.',rule:'red',d:1})}
        ${card({ico:'camera',h:'Detection gets context',p:'When an alarm activates, CCTV shows you what is actually happening at that location before anyone walks toward it.',rule:true,d:2})}
        ${card({ico:'clipboard',h:'One maintenance visit',p:'Servicing fire and security on the same schedule means one visit, one report and one supplier to hold accountable.',rule:true,d:3})}
      </div>
    </div>
  </section>

  ${ctaFinal('Book a security assessment',
    'We survey the site, identify the exposure and specify camera positions, detection zones and door hardware that work with your fire strategy.',
    [{label:'Request a security assessment',href:'#/quote?intent=assessment&item=Security%20Assessment',cls:'btn--solid-light'},{label:'Contact Kadala',href:'#/contact',cls:'btn--light'}],
    IMG.hospitalityWide)}
  `
};

/* ------------------------------ SERVICE ------------------------------ */
PAGES['service-maintenance'] = {
  title:`Fire Extinguisher Servicing and System Maintenance Kenya | ${CO.shortName}`,
  desc:'Fire extinguisher inspection, refilling and pressure testing, fire alarm servicing, emergency lighting testing, fault diagnosis, system upgrades and compliance support across Kenya.',
  h1:'Protection does not end after installation',
  sub:'Fire safety equipment and systems require regular inspection, testing and maintenance to remain ready when needed.',
  bannerImg:IMG.servicing,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('How we keep you covered')}
          <h2 class="reveal">Our service and maintenance approach</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">An extinguisher that has lost pressure, a detector that has been
            painted over, a standby battery at the end of its life: none of these announce themselves. Scheduled servicing is how you
            find out before the fire does.</p>
          <div class="reveal" data-d="2" style="margin-top:24px">
            ${checks([
              'Fire extinguisher inspection, refilling and recharging',
              'Pressure testing and unit replacement',
              'Fire alarm servicing and fault diagnosis',
              'Emergency lighting testing',
              'System upgrades and expansions',
              'Compliance support and documentation'
            ])}
          </div>
          <div class="btn-row reveal" data-d="3" style="margin-top:28px">
            ${btn('Book a service','#/quote?intent=service')}
            ${btn('Request a site assessment','#/quote?intent=assessment','btn--out')}
          </div>
        </div>
        <div class="stack gap-18 reveal" data-d="1">
          <div class="figure figure--wide"><img src="${IMG.sprinklerCard}" alt="Zoned sprinkler risers with control valves, pressure gauges and zone labelling" loading="lazy" decoding="async">
            <div class="figure-cap">Zoned fixed installations, where every valve and gauge is checked against its zone</div></div>
          <div class="figure figure--wide"><img src="${IMG.servicing}" alt="Fire extinguishers gathered for inspection and refilling" loading="lazy" decoding="async">
            <div class="figure-cap">Units gathered for inspection, refilling and pressure testing</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('The maintenance cycle','Four things we do, on a schedule')}
      <div class="grid g4">
        ${card({ico:'clipboard',h:'Biannual servicing',p:'Routine checks of all installed fire and security systems, twice a year.',rule:'red',d:1})}
        ${card({ico:'wrench',h:'Fault repairs',p:'Prompt diagnosis and correction of system faults, before they become failures.',rule:true,d:2})}
        ${card({ico:'support',h:'Urgent technical support',p:'Responsive assistance when a system needs attention urgently. This is technical support for your equipment, not a fire response service.',rule:true,d:3})}
        ${card({ico:'doc',h:'Compliance reports',p:'Documentation confirming that your systems meet the standard they were installed to.',rule:true,d:4})}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('What gets checked','A service visit, item by item')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Equipment</th><th>Checked for</th><th>Typical action</th></tr></thead>
          <tbody>
            <tr><td><b>Portable extinguishers</b></td><td>Pressure, seal, hose condition, mounting, access, signage, service date</td><td>Recharge, refill, replace parts, pressure test, retag</td></tr>
            <tr><td><b>Fire alarm system</b></td><td>Panel status, zone and device response, sounder coverage, standby batteries, logged faults</td><td>Test devices, clear faults, replace batteries, update the log</td></tr>
            <tr><td><b>Emergency lighting</b></td><td>Illumination on discharge, battery duration, lamp condition, route coverage</td><td>Discharge test, replace lamps or batteries, reposition</td></tr>
            <tr><td><b>Hose reels</b></td><td>Water supply, reel operation, hose condition, nozzle, cabinet access</td><td>Run off, repair or replace hose, clear obstructions</td></tr>
            <tr><td><b>Signage and routes</b></td><td>Visibility, photoluminescence, obstructed exits, assembly point marking</td><td>Replace faded signage, report obstructions to the client</td></tr>
            <tr><td><b>Security systems</b></td><td>Camera views and focus, recording retention, detector coverage, door releases</td><td>Realign, clean, test fire alarm door release, update firmware</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small dim reveal" style="margin-top:16px">Service intervals are agreed per site. Equipment supplied by others can be
        included in a Kadala maintenance schedule following an initial inspection.</p>
    </div>
  </section>

  ${ctaFinal('Book your system check',
    'Tell us what is installed and roughly when it was last serviced. We will schedule an inspection and quote the work before we do it.',
    [{label:'Book maintenance',href:'#/quote?intent=service',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.servicing)}
  `
};

/* ------------------------------ PRODUCTS ------------------------------ */
const CATS = [
  ['all','All equipment'],
  ['protection','Fire protection'],
  ['detection','Fire detection'],
  ['emergency','Emergency systems'],
  ['security','Security systems'],
  ['safety','Safety equipment'],
  ['firstaid','First aid']
];

const CATALOGUE = [
  {cat:'protection', img:IMG.range4, h:'ABC Dry Powder Extinguishers', p:'General purpose cover for mixed risks, and the default choice for corridors, classrooms and vehicles.', chips:['KEBS certified','Refillable','Bracket included'], app:'Offices, schools, corridors, vehicles', over:'Class A, B and C risks'},
  {cat:'protection', img:IMG.co2, h:'CO\u2082 Extinguishers', p:'Non residue media for live electrical risk, leaving equipment intact after discharge.', chips:['KEBS certified','Non residue'], app:'Server rooms, switch rooms, laboratories', over:'Safe on live electrical equipment'},
  {cat:'protection', img:IMG.foam, h:'Foam Extinguishers', p:'Blankets flammable liquids and prevents re ignition at the surface.', chips:['KEBS certified','Refillable'], app:'Fuel stores, workshops, generator rooms', over:'Class A and B risks'},
  {cat:'protection', img:IMG.extMist, h:'Water and Water Mist', p:'Cools burning solids, with reduced electrical risk in the mist variants.', chips:['KEBS certified'], app:'Stores, dormitories, paper and textile risks', over:'Class A risks'},
  {cat:'protection', img:IMG.trolley, h:'Mobile Trolley Units', p:'High capacity wheeled units for large open risks where a portable will not cover the area.', chips:['KEBS certified','Wheeled'], app:'Factories, yards, fuel bays', over:'For large open risk areas'},
  {cat:'protection', img:IMG.blanket, h:'Fire Blankets', p:'Wall mounted and fire resistant, sized from 1m x 1m up to 1.8m x 1.8m.', chips:['Wall mounted'], app:'Kitchens, laboratories, restaurants, offices, homes', over:'Smothers at the source'},
  {cat:'protection', img:IMG.hoseCabinet, fill:true, h:'Fire Hose Reels and Cabinets', p:'30m systems with stainless or powder coated cabinets, manual or automatic.', chips:['30 m','Installed on request'], app:'Corridors, factories, apartment blocks', over:'Supply, install, inspect, maintain'},

  {cat:'detection', img:IMG.smokeDetector, fill:true, h:'Smoke Detectors', p:'Early stage detection with audible warning, in wired and wireless configurations.', chips:['Wired / wireless'], app:'Residential, commercial, institutional', over:'Integrates with alarm systems'},
  {cat:'detection', art:()=>G.svgDetector('heat'), h:'Heat Detectors', p:'For kitchens, plant rooms and dusty areas where smoke detection would false alarm.', app:'Kitchens, plant rooms, workshops', over:'Avoids nuisance alarms'},
  {cat:'detection', art:()=>G.svgPanel('conventional'), h:'Conventional Alarm Panels', p:'Zoned control panels for smaller and simpler buildings.', chips:['BS 5839'], app:'Small offices, clinics, apartments', over:'Zone level identification'},
  {cat:'detection', art:()=>G.svgPanel('addressable'), h:'Addressable Alarm Panels', p:'Device level identification and event logging for larger sites and campuses.', chips:['BS 5839','BAFE SP203'], app:'Schools, hospitals, campuses', over:'Names the exact device in alarm'},
  {cat:'detection', img:IMG.callPoint, fill:true, h:'Manual Call Points', p:'Resettable break glass units for exit routes, stairwells and corridors.', chips:['BS 5839'], app:'Corridors, stairwells, exits', over:'Resettable element'},
  {cat:'detection', img:IMG.sounder, h:'Sounders and Backup Batteries', p:'Sirens, strobes and standby batteries for fire alarm systems.', chips:['BS 5839'], app:'All system types', over:'Keeps the system alive on mains failure'},

  {cat:'emergency', img:IMG.emgLight,fill:true, h:'Emergency Lighting', p:'LED emergency luminaires and exit lights that illuminate escape routes on mains failure.', chips:['OSHA / NEMA','LED'], app:'Stairwells, corridors, exits', over:'Tested and maintained'},
  {cat:'emergency', img:IMG.exitCorridor,fill:true, h:'Exit and Directional Signs', p:'Photoluminescent and LED signage for emergency routes and final exits.', chips:['Photoluminescent','NEMA / OSHA'], app:'All building types', over:'Readable without power'},
  {cat:'emergency', img:IMG.firepoint,fill:true, h:'Fire Point Signs', p:'Marks extinguisher and fire point locations so they can be found by someone who has never looked before.', chips:['Photoluminescent'], app:'Corridors, workshops, kitchens', over:'Makes equipment findable'},
  {cat:'emergency', img:IMG.assemblySign, h:'Assembly Point Signs', p:'Defines where people gather after evacuation, which is what turns a drill into a roll call.', app:'Car parks, fields, courtyards', over:'Supports the roll call'},

  {cat:'security', img:IMG.cctvBullet, h:'CCTV Cameras', p:'HD indoor and outdoor cameras with night vision and remote mobile viewing.', chips:['HD','Night vision'], app:'Perimeters, entrances, yards', over:'Remote mobile viewing'},
  {cat:'security', img:IMG.cctvDome, h:'Dome Cameras', p:'Discreet internal coverage for receptions, classrooms and shop floors.', chips:['HD','Indoor'], app:'Receptions, classrooms, shop floors', over:'Vandal resistant housing'},
  {cat:'security', img:IMG.accessCard,fill:true, h:'Access Control Devices', p:'Card and PIN readers for single door and networked multi door systems.', chips:['Card','PIN','Network ready'], app:'Offices, stores, server rooms', over:'Tracks staff entry'},
  {cat:'security', img:IMG.accessBio,fill:true, h:'Biometric Readers', p:'Fingerprint credentials for restricted areas where a card is not enough.', chips:['Biometric'], app:'Server rooms, cash offices', over:'Fingerprint enrolment'},
  {cat:'security', img:IMG.intruder,fill:true, h:'Intruder Alarm Devices', p:'PIR motion sensors, door and window contacts and alarm panels.', chips:['PIR'], app:'Offices, warehouses, homes', over:'Works alongside CCTV'},
  {cat:'security', img:IMG.sounderWall,fill:true, h:'External Sirens and Strobes', p:'Boundary alerting with sounder, strobe and tamper protection.', app:'Building perimeters', over:'Tamper protected'},

  {cat:'safety', img:IMG.wallSign, fill:true, h:'Safety and Warning Signage', p:'Warning, prohibition and mandatory signage to complete a marked and legible building.', chips:['Photoluminescent'], app:'All building types', over:'Completes the marking scheme'},
  {cat:'safety', art:()=>G.svgPpe(), h:'Personal Protective Equipment', p:'Protective equipment to accompany safety provision on site.', app:'Workshops, factories, plant rooms', over:'Specification confirmed on enquiry'},

  {cat:'firstaid', img:IMG.firstaidKit, h:'First Aid Kits', p:'Workplace first aid kits to accompany First Aid training and provision.', app:'Workplaces, schools, clinics', over:'Pairs with First Aid training'}
];

PAGES['products'] = {
  title:`Fire Safety Equipment Kenya: Order Extinguishers and Systems | ${CO.shortName}`,
  desc:'Order fire extinguishers, fire blankets, smoke detectors, alarm panels, manual call points, emergency lighting, hose reels, safety signs, CCTV cameras, access control and intruder alarm devices in Kenya.',
  h1:'Equipment store',
  sub:'A digital showroom of everything we supply. Filter by category, then request a price or place an order on any item.',
  bannerImg:IMG.rangeGroup,
  body:() => `
  <section class="section section--sm">
    <div class="wrap">
      <div class="notice reveal">
        <b>How ordering works</b>
        Every enquiry is answered with an itemised quotation. Where an item needs installation, mounting or a site check, we say so in
        the quote rather than after delivery. Prices are not published here because they depend on quantity, specification and site
        conditions, so request a price list for your requirement.
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="filters reveal" role="group" aria-label="Filter equipment by category">
        ${CATS.map(([k,l],i)=>`<button class="filter" type="button" data-filter="${k}" aria-pressed="${i===0}">${l}</button>`).join('')}
      </div>
      <div class="grid g4 tilt-wrap" id="catalogue">
        ${CATALOGUE.map(p=>product({
          cat:p.cat, img:p.img, fill:p.fill, art:p.art?p.art():undefined,
          h:p.h, p:p.p, chips:p.chips, app:p.app, order:p.h, over:p.over
        })).join('')}
      </div>
      <p class="dim small reveal" id="cat-count" style="margin-top:22px"></p>
    </div>
  </section>

  <section class="section section--sm section--mist">
    <div class="wrap">
      <div class="notice notice--red reveal">
        <b>About the imagery on this page</b>
        Photographs supplied by the client are used to represent equipment categories. Some of them carry another manufacturer's
        markings, and Kadala is not claiming those products as its own. Where no photograph was supplied, the item is shown as an
        original Kadala technical illustration. Supply your own product photography and it will replace both.
      </div>
    </div>
  </section>

  ${ctaFinal('Request a price list',
    'Tell us the items and quantities, or describe the building and let us specify it for you.',
    [{label:'Request a price list',href:'#/quote?intent=order',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.industrialWide)}
  `
};
})();
