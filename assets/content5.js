/* ==========================================================================
   Kadala Fire & Safety EA
   Product catalogue: twelve category pages generated from one template.
   Nothing here states a price, and no specification appears unless it is
   supported by the supplied company documentation.
   ========================================================================== */
(function(){
const G = window.KFSEA_G;
const CO = window.KFSEA_CO;
const IMG = window.KFSEA_IMG;
const PAGES = window.KFSEA_PAGES;
const {secHead,eyebrow,card,product,checks,ctaFinal,btn} = window.KFSEA_H;
const {story,wideCta,P} = window.KFSEA_H2;

/* ---------------- Category data ---------------- */
const CATS = [
 {
  slug:'fire-extinguishers', name:'Fire Extinguishers', family:'Fire protection',
  lead:'Portable and wheeled extinguishers, specified by the fire class present in each area and supplied with wall brackets and location signage.',
  hero:{img:IMG.range4, contain:true, alt:'Powder, water, CO2 and wet chemical fire extinguishers'},
  facts:[['Certification','KEBS certified, as stated in our product documentation'],
         ['Refillable','Yes, refilling and recharging are part of our service schedule'],
         ['Mounting','Wall brackets included'],
         ['Servicing','Biannual servicing of installed equipment']],
  items:[
    {img:IMG.extPowder,h:'ABC Dry Powder',p:'General purpose cover rated for Class A, B and C risks. The default choice for corridors, classrooms and vehicles.',chips:['KEBS certified','Refillable'],app:'Offices, schools, corridors, vehicles',over:'Class A, B and C'},
    {img:IMG.co2,h:'CO\u2082',p:'Displaces oxygen and leaves no residue, so electrical equipment survives the extinguishing.',chips:['KEBS certified'],app:'Server rooms, switch rooms, laboratories',over:'Safe on live electrical equipment'},
    {img:IMG.foam,h:'Foam (AFFF)',p:'Forms a blanket over flammable liquids and stops re ignition at the surface.',chips:['KEBS certified','Refillable'],app:'Fuel stores, workshops, generator rooms',over:'Class A and B'},
    {img:IMG.extMist,h:'Water and Water Mist',p:'Cools burning solids. Mist variants reduce the risk around electrical equipment.',chips:['KEBS certified'],app:'Stores, dormitories, paper and textile risks',over:'Class A'},
    {img:IMG.trolleyCo2,h:'Mobile Trolley Units',p:'High capacity wheeled units for large open risks where a portable will not cover the area.',chips:['KEBS certified','Wheeled'],app:'Factories, yards, fuel bays',over:'Large open risks'},
    {img:IMG.gauge,fill:true,h:'Servicing and Refilling',p:'Pressure checks, refilling, recharging, replacement parts and retagging on a scheduled visit.',app:'All installed extinguishers',over:'Included in maintenance'}
  ],
  note:'Wet chemical units for commercial kitchens are supplied on request. Tell us what is cooked on site and we will specify the rating.',
  related:[['Fire class matrix','#/fire-protection'],['Fire blankets','#/fire-blankets'],['Inspection and maintenance','#/service-maintenance']]
 },
 {
  slug:'fire-alarms', name:'Fire Alarms', family:'Fire detection',
  lead:'Conventional, addressable and wireless fire alarm systems, supplied and commissioned as BS 5839 and BAFE SP203 compliant systems.',
  hero:{img:IMG.alarmWall, alt:'Fire alarm sounders and a manual call point installed along a wall'},
  facts:[['Standards','BS 5839 and BAFE SP203, as stated in our documentation'],
         ['Configurations','Conventional, addressable and wireless'],
         ['Standby','Backup batteries included in the system design'],
         ['Servicing','Biannual servicing, fault diagnosis and event log review']],
  items:[
    {art:()=>G.svgPanel('conventional'),h:'Conventional Panels',p:'Zoned control panels for smaller and simpler buildings, where a zone identifies the area in alarm.',chips:['BS 5839'],app:'Small offices, clinics, apartments',over:'Zone level identification'},
    {art:()=>G.svgPanel('addressable'),h:'Addressable Panels',p:'Device level identification and event logging, so the panel names the exact device in alarm.',chips:['BS 5839','BAFE SP203'],app:'Schools, hospitals, campuses',over:'Names the exact device'},
    {art:()=>G.svgSounder(),h:'Wireless Systems',p:'Quick to install with no wiring damage, for heritage buildings and sites that cannot close for cabling.',chips:['BS 5839'],app:'Occupied and heritage buildings',over:'No chasing walls'},
    {img:IMG.callPoint,fill:true,h:'Manual Call Points',p:'Resettable break glass units so a person can raise the alarm the moment they see a fire.',chips:['BS 5839'],app:'Exit routes, stairwells, corridors',over:'Resettable element'},
    {img:IMG.sounder,h:'Sounders and Strobes',p:'Audible and visual warning devices sized to the building so the warning reaches every occupied space.',chips:['BS 5839'],app:'All system types',over:'Audibility matters'},
    {art:()=>G.svgPanel('conventional'),h:'Backup Batteries',p:'Standby power so the system keeps working through the mains failure that a fire often causes.',chips:['BS 5839'],app:'All panels',over:'Replaced on service'}
  ],
  note:'System category and detector coverage are set by a survey of the building. We confirm both in writing before installation.',
  related:[['Fire detection','#/fire-detection'],['Smoke detectors','#/smoke-detectors'],['Emergency lighting','#/emergency-lighting']]
 },
 {
  slug:'smoke-detectors', name:'Smoke Detectors', family:'Fire detection',
  lead:'Early stage smoke and heat detection with audible warning, in wired and wireless configurations.',
  hero:{img:IMG.smokeDetector, alt:'A ceiling mounted smoke detector responding to smoke from a fire below'},
  facts:[['Configurations','Wired and wireless'],
         ['Warning','Audible warning at the device'],
         ['Integration','Integrates with conventional and addressable alarm systems'],
         ['Applications','Residential, commercial and institutional']],
  items:[
    {img:IMG.smokeDetector,fill:true,h:'Optical Smoke Detectors',p:'Early stage smoke detection for corridors, offices, classrooms and sleeping areas.',chips:['Wired / wireless'],app:'Residential, commercial, institutional',over:'Early stage detection'},
    {art:()=>G.svgDetector('heat'),h:'Heat Detectors',p:'For kitchens, plant rooms and dusty stores where smoke detection would false alarm.',app:'Kitchens, plant rooms, workshops',over:'Avoids nuisance alarms'},
    {art:()=>G.svgDetector('smoke'),h:'Wireless Detectors',p:'Detection for buildings that cannot be cabled, expandable as the occupancy changes.',chips:['Wireless'],app:'Heritage and occupied buildings',over:'Fast to install'}
  ],
  note:'Detector type is chosen by what each room does, not by what is cheapest per unit. A smoke detector above a fryer is a false alarm generator.',
  related:[['Fire alarms','#/fire-alarms'],['Fire detection','#/fire-detection'],['Inspection and maintenance','#/service-maintenance']]
 },
 {
  slug:'emergency-lighting', name:'Emergency Lighting', family:'Emergency systems',
  lead:'Maintained and non maintained luminaires that illuminate escape routes when the mains supply fails.',
  hero:{img:IMG.emgLight, alt:'A twin spot emergency luminaire mounted on a brick wall'},
  facts:[['Standards','OSHA and NEMA compliant, as stated in our documentation'],
         ['Lamp type','LED'],
         ['Coverage','Exit lights, luminaires and directional signage'],
         ['Servicing','Discharge testing as part of scheduled maintenance']],
  items:[
    {img:IMG.emgLight,fill:true,h:'Emergency Luminaires',p:'Twin spot and bulkhead luminaires that light the escape route on mains failure.',chips:['OSHA / NEMA','LED'],app:'Stairwells, corridors, plant rooms',over:'Tested on a schedule'},
    {img:IMG.emgLightTest,fill:true,h:'Maintained Exit Lights',p:'Illuminated exit signage that stays lit in normal use and continues on battery.',chips:['LED'],app:'Final exits, lobbies',over:'Lit at all times'},
    {img:IMG.exitSign,fill:true,h:'Directional Signage',p:'Route marking that keeps people moving in the right direction when visibility drops.',chips:['Photoluminescent'],app:'Corridors, stairwells',over:'Readable without power'}
  ],
  note:'Emergency lighting is only compliant while it still discharges for its rated duration. Testing and documentation are part of the maintenance visit.',
  related:[['Emergency systems','#/emergency-systems'],['Safety signage','#/safety-signage'],['Inspection and maintenance','#/service-maintenance']]
 },
 {
  slug:'fire-blankets', name:'Fire Blankets', family:'Fire protection',
  lead:'Wall mounted, fire resistant blankets that smother a small fire at its source, sized from 1m x 1m up to 1.8m x 1.8m.',
  hero:{img:IMG.blanket, contain:true, alt:'Two wall mounted fire blanket pouches with the blanket unfolded'},
  facts:[['Sizes','1m x 1m up to 1.8m x 1.8m'],
         ['Mounting','Wall mounted pouch with pull tabs'],
         ['Primary use','Class F cooking oil and fat fires'],
         ['Secondary use','Clothing fires, where a person has caught alight']],
  items:[
    {img:IMG.blanket,h:'Kitchen Fire Blanket',p:'Mounted within reach of the range so it can be used in the first seconds of a pan fire.',chips:['1m x 1m'],app:'Kitchens, canteens, restaurants',over:'Class F risks'},
    {img:IMG.blanket,h:'Laboratory Fire Blanket',p:'Larger format for laboratories and workshops where clothing ignition is a credible risk.',chips:['1.8m x 1.8m'],app:'Laboratories, workshops, schools',over:'Clothing fires'},
    {img:IMG.wallSign,fill:true,h:'Location Signage',p:'A blanket nobody can find is not protection. Location signage is supplied with the unit.',chips:['Photoluminescent'],app:'All installations',over:'Makes it findable'}
  ],
  note:'A fire blanket is for a small fire caught early. If the fire is not smothered immediately, leave and close the door behind you.',
  related:[['Fire protection','#/fire-protection'],['Fire extinguishers','#/fire-extinguishers'],['Fire safety training','#/training']]
 },
 {
  slug:'fire-hose-reels', name:'Fire Hose Reels', family:'Fire protection',
  lead:'30m hose reel systems with stainless or powder coated cabinets, in manual and automatic configurations, supplied and installed.',
  hero:{img:IMG.hoseCabinet, alt:'A red fire hose reel cabinet mounted on a concrete wall'},
  facts:[['Hose length','30 m'],
         ['Cabinets','Stainless or powder coated'],
         ['Operation','Manual or automatic reels'],
         ['Service','Supply, installation, inspection and maintenance']],
  items:[
    {img:IMG.hoseCabinet,fill:true,h:'Cabinet Mounted Reels',p:'Enclosed reels that stay clean and protected in public corridors and lobbies.',chips:['30 m'],app:'Corridors, lobbies, apartment blocks',over:'Stainless or powder coated'},
    {img:IMG.hoseInterior,fill:true,h:'Open Wall Mounted Reels',p:'Direct wall mounting for plant rooms, warehouses and back of house areas.',chips:['30 m'],app:'Factories, warehouses, plant rooms',over:'Fast to deploy'},
    {img:IMG.hoseGarden,fill:true,h:'External Fire Points',p:'Hose reel and cabinet combinations sited outdoors, where the risk is away from the building.',app:'Yards, grounds, fuel bays',over:'Weather rated housing'}
  ],
  note:'Hose reels depend on a water supply at the right pressure. We check supply and reel operation as part of every maintenance visit.',
  related:[['Fire protection','#/fire-protection'],['Inspection and maintenance','#/service-maintenance'],['Manufacturing','#/industries']]
 },
 {
  slug:'safety-signage', name:'Safety Signage', family:'Emergency systems',
  lead:'Photoluminescent and LED fire exit, fire point, assembly point, directional and warning signage.',
  hero:{img:IMG.exitCorridor, alt:'Illuminated escape route signage marking the exit along a dark corridor'},
  facts:[['Standards','NEMA and OSHA compliant, as stated in our documentation'],
         ['Types','Photoluminescent and LED'],
         ['Range','Exit, directional, fire point, assembly point and warning'],
         ['Applications','All building types']],
  items:[
    {img:IMG.exitCorridor,fill:true,h:'Fire Exit Signs',p:'Final exit and route signage that stays readable when the lights are out.',chips:['Photoluminescent'],app:'All building types',over:'Readable without power'},
    {img:IMG.firepoint,fill:true,h:'Fire Point Signs',p:'Marks extinguisher and fire point locations so they can be found by someone who has never looked before.',chips:['Photoluminescent'],app:'Corridors, workshops, kitchens',over:'Makes equipment findable'},
    {img:IMG.assemblySign,h:'Assembly Point Signs',p:'Defines where people gather after evacuation, which is what turns a drill into a roll call.',app:'Car parks, fields, courtyards',over:'Supports the roll call'},
    {img:IMG.wallSign,fill:true,h:'Warning and Mandatory Signs',p:'Prohibition, warning and mandatory signage to complete a marked and legible building.',chips:['NEMA / OSHA'],app:'All building types',over:'Completes the scheme'}
  ],
  note:'Faded photoluminescent signage stops charging and stops working. Replacing it is part of the maintenance visit, not a separate project.',
  related:[['Emergency systems','#/emergency-systems'],['Emergency lighting','#/emergency-lighting'],['Fire drills','#/fire-drills']]
 },
 {
  slug:'cctv', name:'CCTV Systems', family:'Security systems',
  lead:'HD video surveillance for monitoring, deterrence and evidence, with night vision and remote mobile viewing.',
  hero:{img:IMG.cctvBullet, contain:true, alt:'A wall mounted bullet CCTV camera'},
  facts:[['Resolution','HD'],['Night vision','Yes'],
         ['Remote access','Mobile app viewing'],
         ['Coverage','Indoor and outdoor cameras']],
  items:[
    {img:IMG.cctvBullet,h:'Bullet Cameras',p:'Directional outdoor coverage for perimeters, entrances, yards and car parks.',chips:['HD','Night vision'],app:'Perimeters, entrances, yards',over:'Weather rated'},
    {img:IMG.cctvDome,h:'Dome Cameras',p:'Discreet internal coverage for receptions, corridors and retail floors.',chips:['HD','Indoor'],app:'Receptions, classrooms, shop floors',over:'Vandal resistant'},
    {img:P.corporate,fill:true,h:'Recording and Monitoring',p:'Recording, retention and remote viewing configured to what you actually need to review.',chips:['Mobile viewing'],app:'All installations',over:'Motion detection'}
  ],
  note:'Camera positions follow a security assessment. Coverage that looks complete on a plan often is not once doors, glare and vegetation are considered.',
  related:[['Security systems','#/security-systems'],['Access control','#/access-control'],['Intruder alarms','#/intruder-alarms']]
 },
 {
  slug:'intruder-alarms', name:'Intruder Alarms', family:'Security systems',
  lead:'Infrared and motion triggered detection for entry points and internal spaces, integrating with CCTV.',
  hero:{img:IMG.intruder, alt:'An intruder alarm keypad panel mounted beside a doorway'},
  facts:[['Detection','PIR motion, door and window contacts'],
         ['Alerting','Sirens and silent alerts'],
         ['Integration','Works alongside CCTV'],
         ['Applications','Offices, warehouses, schools, homes']],
  items:[
    {art:()=>G.svgIntruder('pir'),h:'PIR Motion Sensors',p:'Internal detection for circulation space, storerooms and cash handling areas.',chips:['PIR'],app:'Offices, warehouses, homes',over:'Works with CCTV'},
    {img:IMG.sounderWall,fill:true,h:'External Sirens and Strobes',p:'Boundary alerting with sounder, strobe and tamper protection.',app:'Building perimeters',over:'Tamper protected'},
    {art:()=>G.svgAccess('keypad'),h:'Alarm Panels',p:'Arming, disarming, zone configuration and event history for the whole system.',chips:['Network ready'],app:'All installations',over:'Zoned control'}
  ],
  note:'Detection zones are set so that normal out of hours activity does not generate alarms nobody will respond to.',
  related:[['Security systems','#/security-systems'],['CCTV','#/cctv'],['Access control','#/access-control']]
 },
 {
  slug:'access-control', name:'Access Control', family:'Security systems',
  lead:'Card, PIN and biometric systems to manage who goes where, from single door installations through to networked multi door systems.',
  hero:{img:IMG.accessBio, alt:'A fingerprint and keypad access control reader being used at a door'},
  facts:[['Credentials','Card, PIN and biometric'],
         ['Scale','Single door through to networked multi door'],
         ['Reporting','Staff entry tracking'],
         ['Integration','Releases on a fire alarm condition']],
  items:[
    {art:()=>G.svgAccess('keypad'),h:'Card and PIN Readers',p:'Everyday access control for offices, stores and server rooms, with an entry record.',chips:['Card','PIN','Network ready'],app:'Offices, stores, server rooms',over:'Tracks staff entry'},
    {img:IMG.accessBio,fill:true,h:'Biometric Readers',p:'Fingerprint credentials for areas where a card that can be lent or lost is not good enough.',chips:['Biometric'],app:'Server rooms, cash offices',over:'Fingerprint enrolment'},
    {img:P.corporateCard,fill:true,h:'Networked Multi Door Systems',p:'Central management of many doors, with permissions by role rather than by key.',chips:['Network ready'],app:'Campuses, multi storey offices',over:'Role based permissions'}
  ],
  note:'Access controlled doors have to release on a fire alarm condition. This is the single most important reason to specify access control and fire detection together.',
  related:[['Security systems','#/security-systems'],['Fire detection','#/fire-detection'],['CCTV','#/cctv']]
 },
 {
  slug:'ppe', name:'Personal Protective Equipment', family:'Safety equipment',
  lead:'Protective equipment to accompany fire and safety provision on site.',
  hero:{art:()=>G.svgPpe()},
  facts:[['Availability','Supplied on request'],
         ['Specification','Confirmed at enquiry against the task and the site'],
         ['Applications','Workshops, factories, plant rooms'],
         ['Published detail','No PPE specifications are published, see the note below']],
  items:[
    {art:()=>G.svgPpe(),h:'Head and Eye Protection',p:'Supplied on request. Specification confirmed against the task at enquiry.',app:'Workshops, factories, plant rooms',over:'Specified on enquiry'},
    {art:()=>G.svgPpe(),h:'Hand and Body Protection',p:'Supplied on request. Specification confirmed against the task at enquiry.',app:'Workshops, factories, plant rooms',over:'Specified on enquiry'},
    {art:()=>G.svgFirstAid(),h:'Site Safety Provision',p:'PPE supplied alongside first aid provision so a site is equipped as a whole.',app:'Workplaces, industrial sites',over:'Pairs with first aid'}
  ],
  note:'Placeholder: our supplied documentation does not list PPE types, standards or ratings. Nothing has been invented here. Confirm the range you stock and it will be published on this page.',
  related:[['First aid equipment','#/first-aid-equipment'],['Manufacturing','#/industries'],['Get a quote','#/quote']]
 },
 {
  slug:'first-aid-equipment', name:'First Aid Equipment', family:'Safety equipment',
  lead:'Workplace first aid kits and provision, supplied alongside the First Aid training that makes them useful.',
  hero:{img:IMG.firstaidKit, contain:true, alt:'A hard shell workplace first aid kit'},
  facts:[['Availability','Workplace kits supplied on request'],
         ['Pairs with','On site First Aid training'],
         ['Applications','Workplaces, schools, clinics'],
         ['Published detail','Kit contents lists are not published, see the note below']],
  items:[
    {art:()=>G.svgFirstAid(),h:'Workplace First Aid Kits',p:'Kits sized to the workplace, supplied with the training that makes them useful.',app:'Workplaces, schools, clinics',over:'Pairs with training'},
    {img:P.healthcareCard,fill:true,h:'First Aid Points',p:'Marked and accessible first aid points so the kit can be found in the first minute.',app:'Corridors, workshops, receptions',over:'Signed and accessible'},
    {img:P.trainingCard,fill:true,h:'First Aid Training',p:'CPR awareness, burns, bleeding, fractures, choking and emergency response, delivered on your site.',app:'Institutions and corporations',over:'Certificates issued'}
  ],
  note:'Placeholder: kit contents and any regulatory kit standard are not specified in the documents supplied to us, so none are published. Confirm them and they will appear here.',
  related:[['First Aid training','#/first-aid'],['PPE','#/ppe'],['Book training','#/book-training']]
 }
];

/* ---------------- Page template ---------------- */
CATS.forEach(c => {
  PAGES[c.slug] = {
    title:`${c.name} Kenya | ${CO.shortName}`,
    desc:`${c.lead} Supplied, installed and maintained by Kadala Fire and Safety East Africa Limited in Nairobi and across Kenya.`,
    h1:c.name,
    sub:c.lead,
    bannerImg:c.hero.img,
    body:() => `
    <section class="section">
      <div class="wrap">
        <div class="pd-hero">
          <div class="reveal">
            ${eyebrow(c.family)}
            <h2>${c.name}</h2>
            <p class="lead" style="margin-top:16px">${c.lead}</p>
            <div class="speclist reveal" data-d="1" style="margin-top:26px">
              ${c.facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
            </div>
            <div class="btn-row" style="margin-top:26px">
              ${btn('Request price',`#/quote?item=${encodeURIComponent(c.name)}`)}
              ${btn('Order equipment',`#/quote?item=${encodeURIComponent(c.name)}&amp;intent=order`,'btn--out')}
            </div>
          </div>
          <div class="pd-fig reveal" data-d="1">${
            c.hero.art ? c.hero.art()
              : `<img src="${c.hero.img}"${c.hero.contain?' class="contain"':''} alt="${c.hero.alt||c.name}" loading="lazy" decoding="async">`
          }</div>
        </div>
      </div>
    </section>

    <section class="section section--mist">
      <div class="wrap">
        ${secHead('The range','What we supply in this category')}
        <div class="grid g3 tilt-wrap">
          ${c.items.map(i=>product({
            img:i.img, fill:i.fill, art:i.art?i.art():undefined,
            h:i.h, p:i.p, chips:i.chips, app:i.app, order:i.h, over:i.over
          })).join('')}
        </div>
        <div class="notice reveal" style="margin-top:30px"><b>Worth knowing</b>${c.note}</div>
      </div>
    </section>

    <section class="section section--sm">
      <div class="wrap">
        ${secHead('Related','Where this fits')}
        <div class="grid g3">
          ${c.related.map(([t,h],i)=>card({ico:i===0?'layers':i===1?'route':'wrench',h:t,p:'Continue through the Kadala catalogue.',href:h,cta:'Open',rule:i===0?'red':true,d:i+1})).join('')}
        </div>
        <div style="margin-top:30px">${wideCta('Every item on this page can be quoted or ordered today.','Get a quote','#/quote?item='+encodeURIComponent(c.name))}</div>
      </div>
    </section>

    ${ctaFinal(`Need ${c.name.toLowerCase()} specified for your site?`,
      'Tell us the building, the area and the risk. We come back with an itemised quotation, with installation and site requirements stated up front.',
      [{label:'Request a price list',href:'#/quote?intent=order',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
      IMG.extRow)}
    `
  };
});

window.KFSEA_CATS = CATS;
})();
