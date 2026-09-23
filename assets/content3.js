/* ==========================================================================
   Kadala Fire & Safety EA
   Training, Fire Marshals Club, schools, industries, resources and
   conversion pages.
   ========================================================================== */
(function(){
const G = window.KFSEA_G;
const CO = window.KFSEA_CO;
const IMG = window.KFSEA_IMG;
const PAGES = window.KFSEA_PAGES;
const {secHead,eyebrow,card,checks,ctaFinal,btn,partnerMarks,industriesGrid,INDUSTRIES} = window.KFSEA_H;

/* Training detail copy, shared with the homepage switcher. */
const TRAINING = [
  {t:'Fire Safety Training',
   p:'How fires start and spread, what the alarm actually means, what to do in the first sixty seconds, and the situations in which nobody should be fighting a fire at all.',
   tags:['Prevention','Alarm response','First actions','Safe withdrawal']},
  {t:'Fire Marshal Training',
   p:'The Fire Marshal role in full: sweeping a defined area, assisting evacuation, running the roll call at the assembly point, and handing over to responders on arrival.',
   tags:['Sweep areas','Assisting evacuation','Roll call','Handover']},
  {t:'First Aid Training',
   p:'On site training for institutions and corporations covering CPR awareness, burns, bleeding, fractures, choking and emergency response.',
   tags:['CPR awareness','Burns','Bleeding','Fractures','Choking']},
  {t:'Fire Drills',
   p:'A planned, observed and timed evacuation drill on your own site, followed by a written debrief of what worked and what did not.',
   tags:['Evacuation planning','Assembly points','Timed','Written debrief']},
  {t:'Emergency Evacuation Training',
   p:'What happens when the alarm sounds: roles, communication, who calls whom, how the building is cleared and how you know it is clear.',
   tags:['Roles','Communication','Clearing the building','Accounting for people']}
];
window.KFSEA_TRAINING = TRAINING;

/* ------------------------------ TRAINING ------------------------------ */
PAGES['training'] = {
  title:`Fire Safety Training Kenya: Fire Marshal, First Aid, Drills | ${CO.shortName}`,
  desc:'On site fire safety training, Fire Marshal training, First Aid training, fire extinguisher handling, emergency response and evacuation drills for organisations across Kenya.',
  h1:'Know what to do before an emergency happens',
  sub:'Equipment only works if somebody knows how to use it, and a procedure only works if people have practised it. Our training runs on your site, with your layout and your equipment.',
  bannerImg:IMG.fireDrill,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="grid g3">
        ${card({ico:'flame',h:'Fire Safety Training',p:'How fires start and spread, what the alarm means, what to do first, and when not to fight a fire at all.',href:'#/book-training',cta:'Book training',rule:'red',d:1})}
        ${card({ico:'people',h:'Fire Marshal Training',p:'Sweeping areas, assisting evacuation, roll call at the assembly point and reporting to responders.',href:'#/book-training',cta:'Book training',rule:true,d:2})}
        ${card({ico:'firstaid',h:'First Aid Training',p:'On site training covering CPR awareness, burns, bleeding, fractures, choking and emergency response.',href:'#/first-aid',cta:'First Aid programme',rule:true,d:3})}
        ${card({ico:'alarm',h:'Emergency Response',p:'Roles, communication and how a building is cleared once the alarm has sounded.',href:'#/book-training',cta:'Book training',rule:true,d:1})}
        ${card({ico:'extinguisher',h:'Fire Extinguisher Handling',p:'Selecting the right extinguisher, the PASS technique, and recognising the moment to withdraw.',href:'#/book-training',cta:'Book training',rule:true,d:2})}
        ${card({ico:'route',h:'Evacuation Drills',p:'A timed, observed drill on your own site, followed by a written debrief.',href:'#/fire-drills',cta:'Fire drills',rule:true,d:3})}
        ${card({ico:'clipboard',h:'Workplace Safety Awareness',p:'Hazard spotting, housekeeping, safe storage and reporting for general staff.',href:'#/book-training',cta:'Book training',rule:true,d:1})}
        ${card({ico:'school',h:'Fire Marshals Club',p:'A school based student club that puts safety in the calendar rather than in a file.',href:'#/fire-marshals-club',cta:'About the club',rule:true,d:2})}
        ${card({ico:'layers',h:'School Safety Package',p:'Assessment, inspection, training, drill, First Aid, marshal training and club launch as one programme.',href:'#/schools',cta:'School package',rule:true,d:3})}
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('Practical handling')}
          <h2 class="reveal">The PASS technique</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">Every extinguisher course starts here, because under pressure
            people forget the sequence. Four steps, in order.</p>
          <div class="reveal" data-d="2" style="margin-top:24px">
            ${checks([
              '<b>P for Pull.</b> Pull the safety pin, breaking the tamper seal.',
              '<b>A for Aim.</b> Aim the nozzle or horn at the base of the fire, not at the flames.',
              '<b>S for Squeeze.</b> Squeeze the lever slowly and evenly.',
              '<b>S for Sweep.</b> Sweep side to side across the base until the fire is out.'
            ])}
          </div>
          <p class="dim small reveal" data-d="3" style="margin-top:22px">And the rule that matters more than any of them: keep your exit
            behind you, and leave if the fire does not go out quickly. A portable extinguisher is for a small fire, caught early.</p>
        </div>
        <div class="reveal" data-d="1">
          <div class="figure figure--sq"><img src="${IMG.fireDrill}" alt="A fire drill in progress notice being put up in an office" loading="lazy" decoding="async">
            <div class="figure-cap">Handling practice with the equipment people will actually reach for</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Programmes in detail','What each session covers')}
      <div class="grid g2">
        ${TRAINING.map((t,i)=>`
          <article class="card lift reveal" data-d="${(i%3)+1}">
            <h3>${t.t}</h3><p>${t.p}</p>
            <div class="chips">${t.tags.map(x=>`<span class="chip">${x}</span>`).join('')}</div>
          </article>`).join('')}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>A note on certification</b>
        Our supplied service documentation states that First Aid training is delivered by certified trainers and that certificates are
        issued. Specific accrediting body details are not confirmed in the documents provided, so they are not published here. Confirm
        the accreditation wording you want and it will appear on this page.
      </div>
      <div class="btn-row reveal" style="margin-top:28px">
        ${btn('Book training','#/book-training')}
        ${btn('Book a fire drill','#/quote?intent=drill','btn--out')}
      </div>
    </div>
  </section>

  ${ctaFinal('Train the people, not just the building',
    'On site fire safety, Fire Marshal, First Aid and evacuation training for schools, corporates and institutions across Kenya.',
    [{label:'Book training',href:'#/book-training',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.handling)}
  `
};

/* ------------------------------ FIRST AID ------------------------------ */
PAGES['first-aid'] = {
  title:`First Aid Training Kenya: CPR, Burns, Bleeding | ${CO.shortName}`,
  desc:'On site First Aid training for institutions and corporations in Kenya covering CPR awareness, burns, bleeding, fractures, choking, emergency response and workplace First Aid.',
  h1:'First Aid training',
  sub:'On site training for institutions and corporations, covering the injuries that actually occur in workplaces and schools.',
  bannerImg:IMG.handling,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('Programme content')}
          <h2 class="reveal">What the course covers</h2>
          <div class="reveal" data-d="1" style="margin-top:24px">
            ${checks([
              'Basic First Aid principles and scene safety',
              'CPR awareness',
              'Burns, including burns associated with fire, and scalds',
              'Bleeding and wound management',
              'Fractures and immobilisation',
              'Choking',
              'Emergency response and handover',
              'Workplace First Aid and kit contents'
            ])}
          </div>
          <div class="btn-row reveal" data-d="2" style="margin-top:28px">
            ${btn('Book First Aid training','#/book-training?course=First%20Aid%20Training')}
          </div>
        </div>
        <div class="art-frame reveal" data-d="1">${G.svgFirstAid()}</div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Delivery','How the session runs')}
      <div class="grid g3">
        ${card({ico:'pin',h:'On your site',p:'Delivered at your premises, using your layout, your First Aid points and your own kit.',rule:'red',d:1})}
        ${card({ico:'people',h:'Group sessions',p:'Sized to your team. Tell us the number of participants and we will confirm the session structure.',rule:true,d:2})}
        ${card({ico:'doc',h:'Certificates issued',p:'Our service documentation states that training is delivered by certified trainers and that certificates are issued.',rule:true,d:3})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Placeholder: accreditation details</b>
        Accrediting body, certificate validity period and trainer credentials are not specified in the documents supplied to us.
        Provide these and they will be published here.
      </div>
    </div>
  </section>

  ${ctaFinal('Book a team session',
    'First Aid training delivered on site for schools, corporates, clinics and institutions across Kenya.',
    [{label:'Book First Aid training',href:'#/book-training?course=First%20Aid%20Training',cls:'btn--solid-light'},{label:'Contact Kadala',href:'#/contact',cls:'btn--light'}],
    IMG.hoseInterior)}
  `
};

/* ------------------------------ FIRE DRILLS ------------------------------ */
PAGES['fire-drills'] = {
  title:`Fire Drills Kenya: Evacuation Planning and Assessment | ${CO.shortName}`,
  desc:'Fire drill planning and facilitation for schools, offices and institutions in Kenya, covering evacuation planning, assembly points, alarm response, Fire Marshal roles and post drill assessment.',
  h1:'Practice before it becomes real',
  sub:'Fire drills help students, employees and institutions understand evacuation procedures before an actual emergency occurs.',
  bannerImg:IMG.wallSign,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('What a Kadala drill involves')}
          <h2 class="reveal">Planned, observed, debriefed</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">A drill is only useful if somebody is watching it properly. We plan
            the scenario with you, observe the evacuation, time it, and give you a written debrief of what to fix.</p>
          <div class="reveal" data-d="2" style="margin-top:24px">
            ${checks([
              'Evacuation planning and route review',
              'Assembly point selection and marking',
              'Alarm response and audibility check',
              'Evacuation coordination on the day',
              'Fire Marshal roles and sweep responsibilities',
              'Post drill assessment and written debrief'
            ])}
          </div>
          <div class="btn-row reveal" data-d="3" style="margin-top:28px">
            ${btn('Book a fire drill','#/quote?intent=drill')}
          </div>
        </div>
        <div class="art-frame reveal" data-d="1">${G.svgSign('assembly')}</div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('What good looks like','The questions a drill should answer','A drill that everybody passes told you nothing. These are the things worth measuring.')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Question</th><th>Why it matters</th></tr></thead>
          <tbody>
            <tr><td><b>Was the alarm heard everywhere?</b></td><td>Stores, plant rooms, washrooms and outbuildings are where audibility usually fails.</td></tr>
            <tr><td><b>Did people move immediately?</b></td><td>Hesitation, not distance, is what makes evacuations slow.</td></tr>
            <tr><td><b>Were all routes usable?</b></td><td>Locked doors, stored goods and parked vehicles turn a planned route into a dead end.</td></tr>
            <tr><td><b>Was every area swept?</b></td><td>Marshals need defined areas, or the same room gets checked twice and another not at all.</td></tr>
            <tr><td><b>Did the roll call work?</b></td><td>An assembly point without a register cannot tell you whether anyone is still inside.</td></tr>
            <tr><td><b>How long did it take?</b></td><td>The number only means something once there is a second drill to compare it with.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small dim reveal" style="margin-top:16px">Preparedness reduces panic, confusion and unsafe behaviour during an emergency.
        It does not remove risk, and we do not claim that it does.</p>
    </div>
  </section>

  ${ctaFinal('Book a fire drill',
    'Planned, observed and debriefed evacuation drills for schools, offices and institutions.',
    [{label:'Book a fire drill',href:'#/quote?intent=drill',cls:'btn--solid-light'},{label:'Book training',href:'#/book-training',cls:'btn--light'}],
    IMG.wallSign)}
  `
};

/* ------------------------------ FIRE MARSHALS CLUB ------------------------------ */
PAGES['fire-marshals-club'] = {
  title:`The Kadala Fire Marshals Club: School Fire Safety | ${CO.shortName}`,
  desc:'A school based Fire Marshals Club initiative introducing fire safety awareness, preparedness, First Aid basics and student leadership in Kenyan schools.',
  h1:'The Kadala Fire Marshals Club',
  sub:'Building a culture of safety in schools, so that preparedness lives in the school calendar rather than in a file.',
  bannerImg:IMG.hoseInterior,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow('The initiative')}
          <h2 class="reveal">Safety as a co curricular activity</h2>
          <p class="lead reveal" data-d="1" style="margin-top:16px">Kadala Fire and Safety East Africa Limited is developing a school
            based Fire Marshals Club initiative designed to introduce fire safety awareness, preparedness and leadership among students.</p>
          <p class="dim reveal" data-d="2" style="margin-top:16px">Like Scouts, sports clubs and other school activities, the Fire
            Marshals Club gives students the opportunity to learn practical safety skills and become ambassadors for fire prevention
            and preparedness, so that safety becomes part of school culture rather than a once a year inspection.</p>
          <div class="btn-row reveal" data-d="3" style="margin-top:28px">
            ${btn('Start a club at our school','#/quote?intent=club')}
            ${btn('School safety package','#/schools','btn--out')}
          </div>
        </div>
        <div class="reveal" data-d="1">
          <div class="figure figure--sq"><img src="${IMG.hoseGarden}" alt="Fire point equipment on a school grounds" loading="lazy" decoding="async">
            <div class="figure-cap">Students learn where the equipment is before they need it</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      ${secHead('Objectives','What the club sets out to do')}
      <div class="grid g3">
        ${card({ico:'flame',h:'Awareness',p:'Promote fire safety awareness across the whole student body, not only among the club members.',d:1})}
        ${card({ico:'alarm',h:'Emergency response',p:'Teach students how to respond when an alarm sounds and what their own first actions should be.',d:2})}
        ${card({ico:'people',h:'Trained Fire Marshals',p:'Train selected students, and staff, as Fire Marshals with defined roles and areas.',d:3})}
        ${card({ico:'route',h:'Calm evacuation',p:'Encourage calm, organised evacuation rather than the rush that causes most injuries.',d:1})}
        ${card({ico:'firstaid',h:'Basic First Aid',p:'Introduce basic First Aid skills that stay useful long after the school gates.',d:2})}
        ${card({ico:'shield',h:'Equipment handling',p:'Teach the safe use of fire safety equipment, under supervision.',d:3})}
        ${card({ico:'calendar',h:'Regular drills',p:'Conduct drills on a schedule, so evacuation is rehearsed rather than improvised.',d:1})}
        ${card({ico:'star',h:'Student leadership',p:'Build leadership and responsibility through a role that genuinely matters.',d:2})}
        ${card({ico:'school',h:'School preparedness',p:'Strengthen the school overall readiness in a way the administration can evidence.',d:3})}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Being straight about it','What the club can and cannot do')}
      <div class="grid g2">
        <div class="notice reveal">
          <b>What preparedness does</b>
          A trained, rehearsed student body is less likely to panic, less likely to crowd a single exit, and more likely to follow
          instructions from a marshal they recognise. Preparedness helps reduce panic, confusion and unsafe behaviour during an emergency.
        </div>
        <div class="notice notice--red reveal" data-d="1">
          <b>What we do not claim</b>
          We make no claim that the club reduces deaths, prevents unrest or guarantees any outcome. Students are never asked to fight
          fires or to delay their own evacuation. Kadala does not provide firefighting crews.
        </div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Getting started','How a school launches a club')}
      <div class="grid g4">
        ${card({ico:'phone',h:'1. Enquiry',p:'The school contacts Kadala and we discuss size, age groups and the school calendar.',rule:'red',d:1})}
        ${card({ico:'clipboard',h:'2. Assessment',p:'We assess the site and review existing equipment, routes and assembly points.',rule:true,d:2})}
        ${card({ico:'training',h:'3. Launch',p:'Marshals are selected and trained, and the club is formally launched.',rule:true,d:3})}
        ${card({ico:'calendar',h:'4. Term rhythm',p:'Drills, refreshers and equipment checks run on an agreed termly schedule.',rule:true,d:4})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Placeholder: programme details</b>
        Club duration, fees, minimum year groups, badge or certificate structure and the termly session plan are not specified in the
        documents supplied. Confirm these and they will be published here.
      </div>
    </div>
  </section>

  ${ctaFinal('Start a Fire Marshals Club at your school',
    'Tell us your school, the number of students and the term you would like to launch in.',
    [{label:'Enquire about the club',href:'#/quote?intent=club',cls:'btn--solid-light'},{label:'School safety package',href:'#/schools',cls:'btn--light'}],
    IMG.hoseInterior)}
  `
};

/* ------------------------------ SCHOOLS ------------------------------ */
PAGES['schools'] = {
  title:`School Fire Safety Programme Kenya | ${CO.shortName}`,
  desc:'A complete school fire safety package covering assessment, equipment inspection, fire safety training, fire drills, First Aid, Fire Marshal training, the Fire Marshals Club and equipment supply.',
  h1:'The school fire safety package',
  sub:'Eight components delivered as one programme, so a school is not buying equipment from one supplier and preparedness from another.',
  bannerImg:IMG.hoseGarden,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="grid g4">
        ${card({ico:'clipboard',h:'1. Fire safety assessment',p:'A survey of the school site: risks, routes, existing provision and what is missing.',rule:'red',d:1})}
        ${card({ico:'wrench',h:'2. Fire equipment inspection',p:'Inspection of extinguishers, hose reels, alarms and signage already on site.',rule:true,d:2})}
        ${card({ico:'training',h:'3. Fire safety training',p:'Staff and student training on prevention, alarm response and first actions.',rule:true,d:3})}
        ${card({ico:'route',h:'4. Fire drill',p:'A planned, observed and timed evacuation drill with a written debrief.',rule:true,d:4})}
        ${card({ico:'firstaid',h:'5. First Aid training',p:'Basic First Aid for staff and selected students.',rule:true,d:1})}
        ${card({ico:'people',h:'6. Fire Marshal training',p:'Defined marshal roles, sweep areas and assembly point responsibilities.',rule:true,d:2})}
        ${card({ico:'school',h:'7. Fire Marshals Club',p:'The student club launched and set up to run on a termly rhythm.',rule:true,d:3})}
        ${card({ico:'extinguisher',h:'8. Safety equipment supply',p:'Certified extinguishers, blankets, signage and detection, supplied and installed.',rule:true,d:4})}
      </div>
      <div class="btn-row reveal" style="margin-top:34px">
        ${btn('Make your school safer','#/quote?intent=school')}
        ${btn('About the Fire Marshals Club','#/fire-marshals-club','btn--out')}
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Why schools are different','Boarding, scale and young occupants','A school is not a small office. The occupancy is young, the density is high, dormitories are occupied at night, and the kitchen is industrial.')}
      <div class="grid g3">
        ${card({ico:'home',h:'Dormitories',p:'Night time occupancy changes everything about detection, audibility and escape. Routes have to work in the dark, from sleep.',rule:'red',d:1})}
        ${card({ico:'flame',h:'Kitchens and laboratories',p:'Cooking oils and laboratory chemicals need specific media such as fire blankets, wet chemical and CO\u2082, not a general purpose unit.',rule:true,d:2})}
        ${card({ico:'people',h:'High density movement',p:'Large groups moving at once make assembly points, roll call and marshal coverage the decisive factors.',rule:true,d:3})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Placeholder: regulatory references</b>
        Where a school needs to evidence compliance with specific Kenyan education or occupational safety requirements, those references
        should be confirmed with the relevant authority. We have not published regulatory citations here because none were included in
        the documents supplied to us.
      </div>
    </div>
  </section>

  ${ctaFinal('Make your school safer',
    'One assessment, one programme, one supplier, covering equipment, training, drills and the Fire Marshals Club.',
    [{label:'Request the school package',href:'#/quote?intent=school',cls:'btn--solid-light'},{label:'Talk to an expert',href:'#/contact',cls:'btn--light'}],
    IMG.hoseGarden)}
  `
};

/* ------------------------------ INDUSTRIES ------------------------------ */
PAGES['industries'] = {
  title:`Industries We Serve: Schools, Offices, Hospitals, Factories | ${CO.shortName}`,
  desc:'Fire protection, safety equipment, security systems and training for schools, corporates, hospitals, hospitality, manufacturing, retail, faith centres and residential buildings in Kenya.',
  h1:'Who we work with',
  sub:'Six sectors are named in our company profile. These are the environments they occupy, and what each one typically needs first.',
  bannerImg:IMG.cabinet,
  body:() => `
  <section class="section">
    <div class="wrap">${industriesGrid()}</div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Sector by sector','What each environment typically needs first','General guidance based on how these buildings are used. The specification for your site follows a survey, not this table.')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Sector</th><th>Defining characteristic</th><th>Usually addressed first</th></tr></thead>
          <tbody>
            <tr><td><b>Schools and education</b></td><td>Young occupants, high density, dormitories and industrial kitchens</td><td>Audibility, marked routes, drills, marshal training</td></tr>
            <tr><td><b>Corporates and offices</b></td><td>Server rooms, open plan floors, visitor traffic</td><td>Addressable detection, CO\u2082 cover, access control</td></tr>
            <tr><td><b>Hospitals and healthcare</b></td><td>Occupants who cannot self evacuate quickly</td><td>Early detection, emergency lighting, staged procedure</td></tr>
            <tr><td><b>Hospitality</b></td><td>Guests unfamiliar with the building, commercial kitchens</td><td>Route lighting and signage, kitchen specific media</td></tr>
            <tr><td><b>Manufacturing</b></td><td>Process risk, large open volumes, flammable stores</td><td>Hose reels, trolley units, foam, industrial signage</td></tr>
            <tr><td><b>Retail and commercial</b></td><td>Public access, stock density, cash handling</td><td>Detection, integrated CCTV and intruder alarms</td></tr>
            <tr><td><b>Faith centres</b></td><td>Large intermittent gatherings, limited exits</td><td>Discreet detection, extinguishers, assembly marking</td></tr>
            <tr><td><b>Residential and apartments</b></td><td>Shared cores, private units, absent owners</td><td>Centralised systems, signage, access control</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small dim reveal" style="margin-top:16px">Our service documentation additionally names clinics, estates, malls and small
        factories among the facilities we serve.</p>
    </div>
  </section>

  <section class="section section--sm">
    <div class="wrap">
      ${secHead('Our reach','Trusted by leading organisations',null,true)}
      ${partnerMarks()}
    </div>
  </section>

  ${ctaFinal('Tell us about your building',
    'Building type, floor area, occupancy and what is already installed. That is enough for us to come back with a specification.',
    [{label:'Get a quote',href:'#/quote',cls:'btn--solid-light'},{label:'Request a site assessment',href:'#/quote?intent=assessment',cls:'btn--light'}],
    IMG.hoseInterior)}
  `
};

/* ------------------------------ RESOURCES ------------------------------ */
const GUIDES = [
  {t:'What to do when a fire alarm sounds', tag:'Fire safety guide', body:`
    <p><b>Move, then think.</b> The most common cause of a slow evacuation is not distance. It is the few seconds people spend deciding
    whether the alarm is real. Treat every alarm as real until somebody with authority tells you otherwise.</p>
    <ol style="margin:14px 0 0;padding-left:20px;display:grid;gap:8px">
      <li>Stop what you are doing. Leave personal belongings.</li>
      <li>If it is safe and takes no time, close the door behind you. A closed door slows fire and smoke considerably.</li>
      <li>Use the nearest safe exit route. Do not use lifts.</li>
      <li>Do not go back for anything or anyone. Tell a Fire Marshal if you believe someone is still inside.</li>
      <li>Go to the assembly point and stay there so the roll call is accurate.</li>
      <li>Re enter only when the person responsible for the building says so.</li>
    </ol>`},
  {t:'How to use a fire extinguisher safely', tag:'Fire safety guide', body:`
    <p>Before anything else: raise the alarm, and make sure somebody else knows you are attempting to tackle the fire. Keep your exit
    route behind you at all times.</p>
    <p style="margin-top:12px"><b>The PASS sequence:</b></p>
    <ol style="margin:10px 0 0;padding-left:20px;display:grid;gap:8px">
      <li><b>Pull</b> the pin, breaking the tamper seal.</li>
      <li><b>Aim</b> at the base of the fire, not at the flames, which are only the visible part.</li>
      <li><b>Squeeze</b> the lever slowly and evenly.</li>
      <li><b>Sweep</b> side to side across the base of the fire.</li>
    </ol>
    <p style="margin-top:14px"><b>When to stop:</b> if the fire does not go out quickly, if the extinguisher empties, if smoke is
    building, or if your exit is threatened, leave immediately and close the door behind you. A portable extinguisher is designed for
    a small fire caught early, and nothing more.</p>`},
  {t:'How often should fire extinguishers be serviced?', tag:'Maintenance guide', body:`
    <p>Three different intervals get confused with each other, so it helps to separate them.</p>
    <ul style="margin:12px 0 0;padding-left:20px;display:grid;gap:8px">
      <li><b>Visual checks</b> are carried out by your own staff, typically monthly. Is it there, is it accessible, is the pressure
        gauge in the green, is the seal intact, is the signage visible?</li>
      <li><b>Routine servicing</b> is carried out by a competent technician on a schedule. Kadala's standard approach is biannual
        servicing of installed fire and security systems.</li>
      <li><b>Extended service and pressure testing</b> is a deeper inspection at longer intervals, depending on the extinguisher type
        and the manufacturer requirement.</li>
    </ul>
    <p style="margin-top:14px">The interval that applies to your site depends on the equipment installed, the environment and any
    insurance or regulatory requirement you are working to. We confirm the schedule in writing after the first inspection.</p>`}
];

const PLANNED = [
  ['Fire safety checklist for schools','A termly checklist covering equipment, routes, assembly points and drill records.'],
  ['Why every workplace needs fire drills','What a drill measures, and why an untimed drill is not really a drill.'],
  ['Fire safety tips for kitchens','Oil fires, fire blankets, and the one thing never to do with a pan fire.'],
  ['Understanding different types of fire extinguishers','Matching media to fire class, and where each type belongs.'],
  ['What every Fire Marshal should know','Sweep areas, roll call, handover and the limits of the role.'],
  ['Basic First Aid preparedness','Kit contents, trained staff and what the first five minutes should look like.'],
  ['How to prepare your school for a fire emergency','From assessment through to a working termly rhythm.'],
  ['Conventional or addressable alarms','Building size, zoning and what each panel can actually tell you.']
];

PAGES['resources'] = {
  title:`Fire Safety Resources, Guides and FAQs | ${CO.shortName}`,
  desc:'Practical fire safety guides, safety tips, training resources and frequently asked questions from Kadala Fire and Safety East Africa Limited.',
  h1:'Resource centre',
  sub:'Practical guidance you can act on, written plainly. Where a point depends on regulation or on your specific site, we say so rather than stating it as universal fact.',
  bannerImg:IMG.wallSign,
  body:() => `
  <section class="section">
    <div class="wrap">
      ${secHead('Guides','Published fire safety guides','General safety guidance. It does not replace a site specific risk assessment.')}
      <div class="acc reveal">
        ${GUIDES.map((g,i)=>`
          <details${i===0?' open':''}>
            <summary>${g.t}</summary>
            <div class="acc-body"><p class="small" style="font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:12px">${g.tag}</p>${g.body}</div>
          </details>`).join('')}
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Blog','Articles in preparation','These articles are planned and not yet published. We would rather show you the editorial plan than publish filler.')}
      <div class="grid g2">
        ${PLANNED.map(([t,d],i)=>`
          <article class="post reveal" data-d="${(i%3)+1}"><p class="meta">In preparation</p><h3>${t}</h3><p>${d}</p></article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${secHead('Downloads','Documents available on request')}
      <div class="grid g3">
        ${card({ico:'doc',h:'Company profile',p:'The Kadala Fire &amp; Safety East Africa company profile, covering services, products and approach.',href:'#/contact',cta:'Request a copy',rule:'red',d:1})}
        ${card({ico:'layers',h:'Product catalogue',p:'Full equipment range with specifications. Request the catalogue relevant to your requirement.',href:'#/quote?intent=order',cta:'Request the catalogue',rule:true,d:2})}
        ${card({ico:'doc',h:'Signage catalogue',p:'Fire exit, fire point, assembly point, directional and warning signage options.',href:'#/quote?item=Fire%20Safety%20Signage',cta:'Request the catalogue',rule:true,d:3})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Placeholder: downloadable files</b>
        PDF downloads are not yet attached to this site. Supply the catalogue and profile files and they will be linked here as direct
        downloads.
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('FAQs','Frequently asked questions',null,true)}
      <div class="acc reveal" style="max-width:880px;margin-inline:auto">
        <details open><summary>Does Kadala send firefighters to put out fires?</summary><div class="acc-body">No. Kadala is a fire protection, detection, safety systems and training company. We do not operate a fire brigade and we do not provide firefighting crews. Our work is prevention, protection, detection, preparedness, training, inspection and maintenance.</div></details>
        <details><summary>What areas do you cover?</summary><div class="acc-body">We are based in Nairobi and serve organisations across Kenya, with the wider East African region as our stated vision. Tell us your location when you enquire and we will confirm coverage and any travel implications for your site.</div></details>
        <details><summary>How do I get a price?</summary><div class="acc-body">Request a quote through the form on this site or call us. We quote per site rather than publishing a fixed price list, because quantity, specification, mounting and site conditions all affect the cost. Every quotation is itemised.</div></details>
        <details><summary>Can you service equipment that somebody else supplied?</summary><div class="acc-body">Yes. Equipment supplied by others can be brought into a Kadala maintenance schedule following an initial inspection, which establishes its condition and what work it needs first.</div></details>
        <details><summary>How often should our systems be serviced?</summary><div class="acc-body">Our standard approach is biannual servicing of installed fire and security systems, alongside your own routine visual checks. The exact schedule for your site is confirmed in writing after the first inspection.</div></details>
        <details><summary>Do you train on our premises or yours?</summary><div class="acc-body">Training is delivered on your site, using your building layout, your escape routes and your equipment, which is the point of it. Tell us your group size and preferred dates when booking.</div></details>
        <details><summary>Which extinguisher do we need?</summary><div class="acc-body">It depends on what is likely to burn in each area. The fire class table on our fire safety page is a useful starting point, but final selection should follow a site assessment rather than a table.</div></details>
        <details><summary>Can a school start a Fire Marshals Club mid term?</summary><div class="acc-body">Enquire and we will discuss the school calendar with you. The launch involves a site assessment, marshal selection and training, so the timing is agreed around your term rather than fixed by us.</div></details>
        <details><summary>Do you install wireless fire alarms?</summary><div class="acc-body">Yes. Wireless systems suit older, heritage and difficult to wire buildings, and sites that cannot close for a cabling programme. They install faster and cause far less disruption and making good.</div></details>
      </div>
    </div>
  </section>

  ${ctaFinal('Still have a question?',
    'Call us, send an email, or describe your building and we will tell you what it needs.',
    [{label:'Contact Kadala',href:'#/contact',cls:'btn--solid-light'},{label:'Get a quote',href:'#/quote',cls:'btn--light'}],
    IMG.extRow)}
  `
};

/* ------------------------------ EVENTS ------------------------------ */
PAGES['events'] = {
  title:`Training Events and Safety Programmes | ${CO.shortName}`,
  desc:'Fire safety training, First Aid training, fire drills, Fire Marshals Club launches, safety awareness days and corporate training sessions from Kadala Fire and Safety East Africa.',
  h1:'Events and programmes',
  sub:'The session types we run. Scheduled dates appear here once confirmed. In the meantime every one of these can be booked for your own site.',
  bannerImg:IMG.handling,
  body:() => `
  <section class="section section--sm">
    <div class="wrap">
      <div class="notice notice--red reveal">
        <b>No scheduled public dates yet</b>
        We have not published an events calendar because no confirmed dates were supplied to us, and we will not invent them. Every
        session type below is available to book on your site now. Send us your dates and the confirmed calendar will appear here.
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      ${secHead('Session types','What we run')}
      <div class="stack gap-14">
        ${[
          ['Fire Safety Training','Half day or full day staff training on prevention, alarm response and first actions.','#/book-training?course=Fire%20Safety%20Training'],
          ['First Aid Training','CPR awareness, burns, bleeding, fractures, choking and emergency response.','#/book-training?course=First%20Aid%20Training'],
          ['Fire Drills','A planned, observed and timed evacuation drill with a written debrief.','#/quote?intent=drill'],
          ['Fire Marshal Training','Marshal roles, sweep areas, roll call and handover responsibilities.','#/book-training?course=Fire%20Marshal%20Training'],
          ['Fire Marshals Club Launch','Club set up at a school: marshal selection, training and termly rhythm.','#/quote?intent=club'],
          ['Safety Awareness Days','A site wide session combining demonstration, handling practice and questions.','#/book-training?course=Safety%20Awareness%20Day'],
          ['Corporate Training','Programmes built around a specific corporate site, shift pattern or risk profile.','#/book-training?course=Corporate%20Training'],
          ['School Safety Programmes','The full eight component school package delivered across a term.','#/quote?intent=school']
        ].map(([t,d,href],i)=>`
          <div class="event reveal" data-d="${(i%3)+1}">
            <div class="event-date"><b>TBC</b><span>Date</span></div>
            <div><h3>${t}</h3><p>${d}</p><p class="small dim" style="margin-top:6px">Location: your site, by arrangement</p></div>
            ${btn('Enquire',href,'btn--sm btn--out')}
          </div>`).join('')}
      </div>
    </div>
  </section>

  ${ctaFinal('Book a session for your team',
    'Tell us the group size, the site and the dates that suit you.',
    [{label:'Book training',href:'#/book-training',cls:'btn--solid-light'},{label:'Book a fire drill',href:'#/quote?intent=drill',cls:'btn--light'}],
    IMG.handling)}
  `
};

/* ------------------------------ PROJECTS ------------------------------ */
PAGES['projects'] = {
  title:`Projects and Case Studies | ${CO.shortName}`,
  desc:'Selected Kadala Fire and Safety East Africa installations and safety programmes. Case studies are published as client permissions are confirmed.',
  h1:'Projects and case studies',
  sub:'Our project portfolio is growing. Check back soon for selected Kadala installations and safety programmes.',
  bannerImg:IMG.hoseCabinet,
  body:() => `
  <section class="section section--sm">
    <div class="wrap">
      <div class="notice notice--red reveal">
        <b>No case studies published yet</b>
        No verified project write ups were included in the documents supplied to us, so none are published here. We will not invent
        clients, sites or outcomes. The structure below is ready, so supply the details for any completed project and it can go live.
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      ${secHead('Template','How each case study will be structured','Every published case study follows the same six part structure, so readers can compare like with like.')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Section</th><th>What it will cover</th></tr></thead>
          <tbody>
            <tr><td><b>Client</b></td><td>Organisation, sector and site type, published only with written permission.</td></tr>
            <tr><td><b>Challenge</b></td><td>The risk, gap or compliance requirement that prompted the work.</td></tr>
            <tr><td><b>Solution</b></td><td>The specification we recommended, and why that option rather than another.</td></tr>
            <tr><td><b>Implementation</b></td><td>How the work was carried out, including timeline and disruption management.</td></tr>
            <tr><td><b>Result</b></td><td>The measurable outcome: coverage achieved, drill times, compliance documentation issued.</td></tr>
            <tr><td><b>Equipment and services</b></td><td>An itemised list of everything supplied, installed, trained on or maintained.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Testimonials','Client testimonials',null,true)}
      <div class="grid g3">
        ${[1,2,3].map(i=>`
          <article class="card reveal" data-d="${i}">
            <div class="card-ico">${G.icon('star')}</div>
            <p style="font-style:italic">"Client testimonial to be added."</p>
            <p class="small dim" style="margin-top:auto">Name, role, organisation</p>
          </article>`).join('')}
      </div>
      <p class="small dim center reveal" style="margin-top:20px">Testimonial slots are ready for content. We have not written placeholder
        quotes in clients' voices.</p>
    </div>
  </section>

  <section class="section section--sm">
    <div class="wrap">
      ${secHead('Meanwhile','Organisations named in our company profile',null,true)}
      ${partnerMarks()}
    </div>
  </section>

  ${ctaFinal('Be our next project',
    'Site assessment, written specification, itemised quote. That is how every Kadala project starts.',
    [{label:'Request a site assessment',href:'#/quote?intent=assessment',cls:'btn--solid-light'},{label:'Get a quote',href:'#/quote',cls:'btn--light'}],
    IMG.hoseCabinet)}
  `
};

/* ------------------------------ CERTIFICATIONS ------------------------------ */
PAGES['certifications'] = {
  title:`Certifications and Compliance | ${CO.shortName}`,
  desc:'Standards referenced by Kadala Fire and Safety East Africa systems and products, including BS 5839, BAFE SP203, KEBS certification and OSHA or NEMA compliant signage and lighting.',
  h1:'Certifications and compliance',
  sub:'The standards our supplied documentation references, stated exactly as they appear, with nothing added.',
  bannerImg:IMG.range4,
  body:() => `
  <section class="section">
    <div class="wrap">
      ${secHead('Referenced standards','What our documentation states')}
      <div class="table-wrap reveal">
        <table>
          <thead><tr><th>Standard</th><th>Applies to</th><th>As stated in our documentation</th></tr></thead>
          <tbody>
            <tr><td><span class="chip chip--red">BS 5839</span></td><td>Fire detection and alarm systems</td><td>Fire alarm systems and accessories described as BS 5839 compliant.</td></tr>
            <tr><td><span class="chip chip--red">BAFE SP203</span></td><td>Fire detection and alarm system competency</td><td>Fire alarm systems described as BAFE SP203 compliant for all building types.</td></tr>
            <tr><td><span class="chip chip--red">KEBS</span></td><td>Fire extinguishers</td><td>Supplied extinguishers described as KEBS certified, refillable, with wall brackets included.</td></tr>
            <tr><td><span class="chip chip--red">OSHA / NEMA</span></td><td>Emergency lighting and safety signage</td><td>Emergency lighting and exit or safety signage described as OSHA and NEMA compliant.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="notice notice--red reveal" style="margin-top:30px">
        <b>Important: certificate documents are not yet published</b>
        The standards above are taken from Kadala's own company profile and service documentation. Certificates, licences, manufacturer
        authorisations and test documents were not supplied to us, so none are displayed and no further certification is claimed. Supply
        the certificate files and they will be published in this section with issue dates and reference numbers.
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Ready for content','Sections prepared for your documents')}
      <div class="grid g4">
        ${card({ico:'doc',h:'Certifications',p:'Certificate images or PDFs, with issuing body, reference number and validity dates.',rule:'red',d:1})}
        ${card({ico:'clipboard',h:'Licences',p:'Business and technical licences relevant to fire and security installation work.',rule:true,d:2})}
        ${card({ico:'people',h:'Technical qualifications',p:'Technician and trainer qualifications, listed by role rather than by individual.',rule:true,d:3})}
        ${card({ico:'handshake',h:'Manufacturer authorisations',p:'Distributor or authorised installer letters from equipment manufacturers.',rule:true,d:4})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Compliance support</b>
        Beyond our own documentation we issue compliance reports confirming that installed systems meet the standard they were installed
        to. Where you need to evidence compliance to an insurer, a regulator or a parent body, tell us what the requirement is and we
        will confirm what we can document.
      </div>
    </div>
  </section>

  ${ctaFinal('Need compliance documentation?',
    'Tell us what you have to evidence and to whom, and we will confirm what our inspection and reporting can cover.',
    [{label:'Talk to an expert',href:'#/contact',cls:'btn--solid-light'},{label:'Book a service',href:'#/quote?intent=service',cls:'btn--light'}],
    IMG.servicing)}
  `
};

/* ------------------------------ CONTACT BLOCK ------------------------------ */
const contactBlock = () => `
  <div class="stack">
    <div class="contact-line"><div class="ci">${G.icon('phone','plain')}</div><div><b>Telephone</b>
      <a href="tel:${CO.tel1Raw}">${CO.tel1}</a> &nbsp;&middot;&nbsp; <a href="tel:${CO.tel2Raw}">${CO.tel2}</a></div></div>
    <div class="contact-line"><div class="ci">${G.icon('whatsapp','plain')}</div><div><b>WhatsApp</b>
      <a href="https://wa.me/${CO.wa}" target="_blank" rel="noopener">Message us on ${CO.tel1}</a></div></div>
    <div class="contact-line"><div class="ci">${G.icon('mail','plain')}</div><div><b>Email</b>
      <a href="mailto:${CO.email}">${CO.email}</a></div></div>
    <div class="contact-line"><div class="ci">${G.icon('globe','plain')}</div><div><b>Website</b>
      <a href="https://${CO.site}" target="_blank" rel="noopener">${CO.site}</a></div></div>
    <div class="contact-line"><div class="ci">${G.icon('pin','plain')}</div><div><b>Office</b>
      <span class="v">${CO.office}</span></div></div>
    <div class="contact-line"><div class="ci">${G.icon('doc','plain')}</div><div><b>Postal address</b>
      <span class="v">${CO.box}, ${CO.city}</span></div></div>
    <div class="contact-line"><div class="ci">${G.icon('clock','plain')}</div><div><b>Opening hours</b>
      <span class="v">${CO.hours}</span></div></div>
  </div>`;
window.KFSEA_CONTACT = contactBlock;

/* ------------------------------ FORMS ------------------------------ */
function quoteForm(id){
  const opts = ['Fire Extinguishers','Fire Blankets','Fire Alarm','Smoke Detectors','Emergency Lighting','Fire Hose Reels',
    'Fire Safety Signage','CCTV','Intruder Alarm','Access Control','Fire Training','First Aid Training','Fire Drill',
    'Fire Marshal Club','School Safety Package','Inspection and Maintenance','Site Assessment','Other'];
  return `
  <form class="form" id="${id}" novalidate>
    <div class="form-ok" id="${id}-ok" role="status">
      <span style="flex:none;width:26px;color:var(--red)">${G.icon('check','plain')}</span>
      <div><b>Enquiry ready to send</b>
      <span class="small">This site is not yet connected to a mail service. Your details have been prepared, so send them to
      <a href="mailto:${CO.email}">${CO.email}</a> or call ${CO.tel1}.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-name">Name <span class="req">*</span></label>
        <input id="${id}-name" name="name" type="text" autocomplete="name" required>
        <span class="err">Please enter your name.</span></div>
      <div class="field"><label for="${id}-org">Company or institution</label>
        <input id="${id}-org" name="organisation" type="text" autocomplete="organization"></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-phone">Phone <span class="req">*</span></label>
        <input id="${id}-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required>
        <span class="err">Please enter a phone number we can reach you on.</span></div>
      <div class="field"><label for="${id}-email">Email <span class="req">*</span></label>
        <input id="${id}-email" name="email" type="email" autocomplete="email" required>
        <span class="err">Please enter a valid email address.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-location">Location</label>
        <input id="${id}-location" name="location" type="text" placeholder="Town, estate or building">
        <span class="hint">Helps us confirm coverage and travel.</span></div>
      <div class="field"><label for="${id}-need">What do you need? <span class="req">*</span></label>
        <select id="${id}-need" name="need" required>
          <option value="">Select an option</option>
          ${opts.map(o=>`<option>${o}</option>`).join('')}
        </select>
        <span class="err">Please choose what you need.</span></div>
    </div>
    <div class="field"><label for="${id}-message">Message</label>
      <textarea id="${id}-message" name="message" placeholder="Building type, floor area, quantities, what is already installed, or anything else that helps us quote accurately."></textarea></div>
    <button class="btn btn--wide" type="submit"><span>Request a quote</span></button>
    <p class="form-note">We use your details only to respond to this enquiry. Required fields are marked with an asterisk.</p>
  </form>`;
}

function trainingForm(id){
  const courses = ['Fire Safety Training','Fire Marshal Training','First Aid Training','Emergency Response','Fire Extinguisher Handling','Evacuation Drill','Workplace Safety Awareness','Fire Marshals Club Launch','Corporate Training','Safety Awareness Day'];
  return `
  <form class="form" id="${id}" novalidate>
    <div class="form-ok" id="${id}-ok" role="status">
      <span style="flex:none;width:26px;color:var(--red)">${G.icon('check','plain')}</span>
      <div><b>Training enquiry ready to send</b>
      <span class="small">This site is not yet connected to a mail service. Send your details to
      <a href="mailto:${CO.email}">${CO.email}</a> or call ${CO.tel1} to confirm the session.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-org">Organisation <span class="req">*</span></label>
        <input id="${id}-org" name="organisation" type="text" autocomplete="organization" required>
        <span class="err">Please enter your organisation.</span></div>
      <div class="field"><label for="${id}-person">Contact person <span class="req">*</span></label>
        <input id="${id}-person" name="contact" type="text" autocomplete="name" required>
        <span class="err">Please enter a contact name.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-phone">Telephone <span class="req">*</span></label>
        <input id="${id}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required>
        <span class="err">Please enter a telephone number.</span></div>
      <div class="field"><label for="${id}-email">Email <span class="req">*</span></label>
        <input id="${id}-email" name="email" type="email" autocomplete="email" required>
        <span class="err">Please enter a valid email address.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-count">Number of participants <span class="req">*</span></label>
        <input id="${id}-count" name="participants" type="number" min="1" step="1" required>
        <span class="err">Please tell us roughly how many people will attend.</span></div>
      <div class="field"><label for="${id}-course">Preferred training <span class="req">*</span></label>
        <select id="${id}-course" name="course" required>
          <option value="">Select a programme</option>
          ${courses.map(c=>`<option>${c}</option>`).join('')}
        </select>
        <span class="err">Please choose a programme.</span></div>
    </div>
    <div class="form-row">
      <div class="field"><label for="${id}-date">Preferred date</label>
        <input id="${id}-date" name="date" type="date"></div>
      <div class="field"><label for="${id}-location">Location <span class="req">*</span></label>
        <input id="${id}-location" name="location" type="text" placeholder="Site where training will be held" required>
        <span class="err">Please tell us where the training will be held.</span></div>
    </div>
    <div class="field"><label for="${id}-extra">Additional requirements</label>
      <textarea id="${id}-extra" name="requirements" placeholder="Shift patterns, age groups, accessibility needs, equipment already on site, or anything else we should plan around."></textarea></div>
    <button class="btn btn--wide" type="submit"><span>Book training</span></button>
    <p class="form-note">We use your details only to arrange this training. Required fields are marked with an asterisk.</p>
  </form>`;
}

/* ------------------------------ CONTACT ------------------------------ */
PAGES['contact'] = {
  title:`Contact Us: Fire Safety Nairobi | ${CO.shortName}`,
  desc:`Contact Kadala Fire and Safety East Africa Limited for fire protection equipment, safety systems, training and maintenance. Nairobi, Kenya. ${CO.tel1} or ${CO.tel2}, ${CO.email}.`,
  h1:'Let us make your space safer',
  sub:'Contact Kadala Fire and Safety East Africa Limited for fire protection equipment, safety systems, training and maintenance.',
  bannerImg:IMG.hoseGarden,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split" style="align-items:flex-start">
        <div>
          ${eyebrow('Talk to us today')}
          <h2 class="reveal">Contact details</h2>
          <div class="reveal" data-d="1" style="margin-top:22px">${contactBlock()}</div>
          <div class="btn-row reveal" data-d="2" style="margin-top:26px">
            ${btn('Call Kadala',`tel:${CO.tel1Raw}`,'btn--dark')}
            <a class="btn btn--out" href="https://wa.me/${CO.wa}" target="_blank" rel="noopener"><span>WhatsApp us</span>${G.ARROW}</a>
          </div>
          <div class="figure figure--wide reveal" data-d="3" style="margin-top:30px">
            <img src="${IMG.hoseGarden}" alt="Fire point equipment installed on a landscaped site" loading="lazy" decoding="async">
            <div class="figure-cap">Nairobi based, serving organisations across Kenya</div>
          </div>
        </div>
        <div class="form-panel reveal" data-d="1">
          <h2 style="font-size:1.6rem">Request a quote</h2>
          <p class="dim small" style="margin:10px 0 22px">Tell us what you need and where. We reply with an itemised quotation.</p>
          ${quoteForm('contact-form')}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--mist">
    <div class="wrap">
      ${secHead('Where to send what','Three ways in',null,true)}
      <div class="grid g3">
        ${card({ico:'layers',h:'Sales and equipment orders',p:'Extinguishers, blankets, signage, detection and security devices. Request a price list or place an order.',href:'#/quote?intent=order',cta:'Order equipment',rule:'red',d:1})}
        ${card({ico:'wrench',h:'Service and support',p:'Servicing, refills, fault repair, inspection and compliance reporting for installed systems.',href:'#/quote?intent=service',cta:'Book a service',rule:true,d:2})}
        ${card({ico:'training',h:'Training bookings',p:'Fire safety, Fire Marshal, First Aid, drills and the Fire Marshals Club.',href:'#/book-training',cta:'Book training',rule:true,d:3})}
      </div>
      <div class="notice reveal" style="margin-top:30px">
        <b>Placeholder: map and street address</b>
        Our documentation gives the office as "${CO.office}". A full street address, building floor and a map pin are not specified and
        have not been invented. Supply them and a map will be embedded here.
      </div>
    </div>
  </section>
  `
};

/* ------------------------------ QUOTE ------------------------------ */
PAGES['quote'] = {
  title:`Get a Quote | ${CO.shortName}`,
  desc:'Request an itemised quotation for fire protection equipment, safety systems, installation, inspection, maintenance or training in Kenya.',
  h1:'Request a quote',
  sub:'Tell us about the building and what it needs. Every quotation is itemised, with installation and site requirements stated up front.',
  bannerImg:IMG.rangeGroup,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split" style="align-items:flex-start">
        <div class="form-panel reveal">${quoteForm('quote-form')}</div>
        <div class="stack gap-24">
          <div>
            ${eyebrow('What happens next')}
            <h2 class="reveal" style="font-size:1.7rem">Three steps, no surprises</h2>
            <div class="reveal" data-d="1" style="margin-top:20px">
              ${checks([
                '<b>We respond</b> with questions if the requirement needs clarifying, or straight to quotation if it does not.',
                '<b>We survey</b> the site where installation, quantities or compliance are involved.',
                '<b>We quote</b> in itemised form, with equipment, installation, training and maintenance shown separately.'
              ])}
            </div>
          </div>
          <div class="reveal" data-d="2" style="background:var(--mist);border-radius:var(--r-lg);padding:26px">${contactBlock()}</div>
        </div>
      </div>
    </div>
  </section>`
};

/* ------------------------------ BOOK TRAINING ------------------------------ */
PAGES['book-training'] = {
  title:`Book Fire Safety and First Aid Training | ${CO.shortName}`,
  desc:'Book on site fire safety training, Fire Marshal training, First Aid training, extinguisher handling or an evacuation drill for your organisation in Kenya.',
  h1:'Book a training session',
  sub:'On site training for schools, corporates and institutions. Tell us the group, the site and the dates that work for you.',
  bannerImg:IMG.handling,
  body:() => `
  <section class="section">
    <div class="wrap">
      <div class="split" style="align-items:flex-start">
        <div class="form-panel reveal">${trainingForm('training-form')}</div>
        <div class="stack gap-24">
          <div>
            ${eyebrow('Before you book')}
            <h2 class="reveal" style="font-size:1.7rem">What helps us plan</h2>
            <div class="reveal" data-d="1" style="margin-top:20px">
              ${checks([
                '<b>Group size and make up.</b> Staff, students, mixed, or organised by shift.',
                '<b>The site itself.</b> We train using your layout, routes and assembly points.',
                '<b>Equipment on site.</b> Handling practice works best with the equipment your people will actually reach for.',
                '<b>Your calendar.</b> Term dates, shift patterns and quiet periods.'
              ])}
            </div>
          </div>
          <div class="notice reveal" data-d="2">
            <b>Placeholder: session duration and pricing</b>
            Course durations, participant limits and fees are not specified in the documents supplied to us and have not been invented.
            Confirm them and they will be published on this page.
          </div>
          <div class="reveal" data-d="3" style="background:var(--mist);border-radius:var(--r-lg);padding:26px">${contactBlock()}</div>
        </div>
      </div>
    </div>
  </section>`
};
})();
