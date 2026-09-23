/* ==========================================================================
   Kadala Fire & Safety EA
   Shell, routing, navigation, media and interaction layer.
   ========================================================================== */
(function(){
const PAGES = window.KFSEA_PAGES;
const CO = window.KFSEA_CO;
const G = window.KFSEA_G;
const TRAINING = window.KFSEA_TRAINING;
const A = G.ARROW;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let observers = [];

/* ---------------- Navigation model ---------------- */
const NAV = [
  {label:'About', href:'#/about'},
  {label:'Solutions', href:'#/solutions', mega:2, children:[
    ['Fire Protection','#/fire-protection','Extinguishers, blankets, hose reels','extinguisher'],
    ['Fire Detection','#/fire-detection','Alarms, detectors, call points','detector'],
    ['Emergency Systems','#/emergency-systems','Lighting, exit and safety signage','light'],
    ['Security Systems','#/security-systems','CCTV, intruder alarms, access control','camera'],
    ['Inspection &amp; Maintenance','#/service-maintenance','Servicing, refilling, compliance','wrench'],
    ['Safety Training','#/training','Fire safety, marshal, First Aid, drills','training']
  ]},
  {label:'Products', href:'#/products', mega:3, children:[
    ['Fire Extinguishers','#/fire-extinguishers','','extinguisher'],
    ['Fire Alarms','#/fire-alarms','','alarm'],
    ['Smoke Detectors','#/smoke-detectors','','detector'],
    ['Emergency Lighting','#/emergency-lighting','','light'],
    ['Fire Blankets','#/fire-blankets','','flame'],
    ['Fire Hose Reels','#/fire-hose-reels','','drill'],
    ['Safety Signage','#/safety-signage','','route'],
    ['CCTV','#/cctv','','camera'],
    ['Intruder Alarms','#/intruder-alarms','','motion'],
    ['Access Control','#/access-control','','lock'],
    ['PPE','#/ppe','','shield'],
    ['First Aid','#/first-aid-equipment','','firstaid'],
    ['All equipment','#/products','','layers']
  ]},
  {label:'Training', href:'#/training', children:[
    ['Training programmes','#/training','Fire safety, marshal, response, awareness'],
    ['First Aid','#/first-aid','CPR, burns, bleeding, emergency response'],
    ['Fire Drills','#/fire-drills','Planned, observed and debriefed'],
    ['School Safety Programme','#/schools','Eight components, one programme']
  ]},
  {label:'Fire Marshals Club', href:'#/fire-marshals-club'},
  {label:'Industries', href:'#/industries'},
  {label:'Resources', href:'#/resources', children:[
    ['Resource centre','#/resources','Guides, downloads and FAQs'],
    ['Events &amp; Programmes','#/events','Session types and bookings'],
    ['Projects &amp; Case Studies','#/projects','Portfolio structure'],
    ['Certifications','#/certifications','Standards and compliance']
  ]},
  {label:'Contact', href:'#/contact'}
];

const SOL = ['Solutions','#/solutions'], PRD = ['Products','#/products'],
      TRN = ['Training','#/training'],   RES = ['Resources','#/resources'];
const CRUMB_PARENT = {
  'fire-safety':SOL, 'fire-protection':SOL, 'fire-detection':SOL, 'emergency-systems':SOL,
  'security-systems':SOL, 'service-maintenance':SOL, 'inspection-maintenance':SOL, 'products':SOL,
  'fire-extinguishers':PRD, 'fire-alarms':PRD, 'smoke-detectors':PRD, 'emergency-lighting':PRD,
  'fire-blankets':PRD, 'fire-hose-reels':PRD, 'safety-signage':PRD, 'cctv':PRD,
  'intruder-alarms':PRD, 'access-control':PRD, 'ppe':PRD, 'first-aid-equipment':PRD,
  'first-aid':TRN, 'fire-drills':TRN, 'schools':TRN, 'safety-training':TRN,
  'events':RES, 'projects':RES, 'certifications':RES
};

const PAGE_TITLE = {
  'home':'Home','about':'About','solutions':'Solutions',
  'fire-safety':'Fire Protection','fire-protection':'Fire Protection','fire-detection':'Fire Detection',
  'emergency-systems':'Emergency Systems','security-systems':'Security Systems',
  'service-maintenance':'Inspection &amp; Maintenance','inspection-maintenance':'Inspection &amp; Maintenance',
  'products':'Equipment Store',
  'fire-extinguishers':'Fire Extinguishers','fire-alarms':'Fire Alarms','smoke-detectors':'Smoke Detectors',
  'emergency-lighting':'Emergency Lighting','fire-blankets':'Fire Blankets','fire-hose-reels':'Fire Hose Reels',
  'safety-signage':'Safety Signage','cctv':'CCTV','intruder-alarms':'Intruder Alarms',
  'access-control':'Access Control','ppe':'PPE','first-aid-equipment':'First Aid Equipment',
  'training':'Training','safety-training':'Training','first-aid':'First Aid','fire-drills':'Fire Drills',
  'fire-marshals-club':'Fire Marshals Club','schools':'School Safety Programme','industries':'Industries',
  'resources':'Resources','events':'Events','projects':'Projects','certifications':'Certifications',
  'contact':'Contact','quote':'Get a Quote','book-training':'Book Training'
};

const caret = '<svg class="caret" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------------- Header and footer ---------------- */
function buildHeader(){
  const navHtml = NAV.map((n,i)=>{
    if(!n.children) return `<div class="nav-item" data-idx="${i}"><a class="nav-link" href="${n.href}">${n.label}</a></div>`;
    const mega = n.mega ? ` submenu--mega${n.mega===3?' cols3':''}` : '';
    const links = n.children.map(([t,h,d,ic])=>
      ic ? `<a href="${h}" role="menuitem"><span class="mi">${G.icon(ic)}</span><span>${t}${d?`<small>${d}</small>`:''}</span></a>`
         : `<a href="${h}" role="menuitem">${t}${d?`<small>${d}</small>`:''}</a>`).join('');
    return `<div class="nav-item" data-idx="${i}" data-open="false">
      <button class="nav-link" type="button" aria-expanded="false" aria-haspopup="true">${n.label}${caret}</button>
      <div class="submenu${mega}" role="menu">
        ${n.mega?`<span class="submenu-head">${n.label}</span>`:''}${links}
      </div></div>`;
  }).join('');

  const drawerHtml = NAV.map(n=>{
    if(!n.children) return `<div class="drawer-group"><a class="drawer-top" href="${n.href}">${n.label}</a></div>`;
    return `<div class="drawer-group" data-open="false"><button class="drawer-top" type="button" aria-expanded="false">${n.label}${caret}</button>
      <div class="drawer-sub">${n.children.map(([t,h])=>`<a href="${h}">${t}</a>`).join('')}</div></div>`;
  }).join('');

  return `
  <div class="utility">
    <div class="wrap">
      <div class="utility-l">
        <a href="tel:${CO.tel1Raw}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>${CO.tel1} &middot; ${CO.tel2}</a>
        <a href="mailto:${CO.email}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>${CO.email}</a>
      </div>
      <div class="utility-r"><span>${CO.hours}</span><span>${CO.box}, ${CO.city}</span></div>
    </div>
  </div>

  <header class="site-head" id="site-head">
    <div class="wrap">
      <div class="navbar">
        <a class="brand" href="#/home" aria-label="Kadala Fire and Safety East Africa, home">
          <img class="logo-on-light" src="assets/kadala-logo.png" alt="Kadala Fire and Safety East Africa" width="581" height="327">
          <img class="logo-on-dark" src="assets/kadala-logo-light.png" alt="" aria-hidden="true" width="581" height="327">
        </a>
        <nav class="nav" aria-label="Main">${navHtml}</nav>
        <div class="nav-cta">
          <a class="btn btn--out btn--sm" href="#/book-training"><span>Book training</span></a>
          <a class="btn btn--sm keep" href="#/quote"><span>Get a quote</span></a>
          <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="drawer" id="drawer">
      <div class="wrap">
        ${drawerHtml}
        <div class="drawer-cta">
          <a class="btn" href="#/quote"><span>Get a quote</span></a>
          <a class="btn btn--out" href="#/book-training"><span>Book training</span></a>
          <a class="btn btn--out" href="#/products"><span>Order equipment</span></a>
        </div>
      </div>
    </div>
  </header>`;
}

function buildFooter(){
  const col = (h,items) => `<div class="foot-col"><h4>${h}</h4><ul class="foot-list">${
    items.map(([t,u])=>`<li><a href="${u}">${t}</a></li>`).join('')}</ul></div>`;

  /* The four ways to reach Kadala, given the weight they deserve. On most
     pages this strip is the last thing a visitor sees. */
  const reach = (href,ic,label,value,ext) => `
    <a class="reach" href="${href}"${ext?' target="_blank" rel="noopener"':''}>
      <span class="reach-ic">${G.icon(ic)}</span>
      <span class="reach-t"><b>${label}</b><span>${value}</span></span>
      <span class="reach-go">${A}</span>
    </a>`;

  return `
  <footer class="site-foot">
    <div class="foot-reach">
      <div class="wrap">
        <div class="reach-grid">
          ${reach('tel:'+CO.tel1Raw,'phone','Phone',CO.tel1)}
          ${reach('https://wa.me/'+CO.wa,'whatsapp','WhatsApp',CO.tel1,true)}
          ${reach('mailto:'+CO.email,'mail','Email',CO.email)}
          <div class="reach reach--flat">
            <span class="reach-ic">${G.icon('clock')}</span>
            <span class="reach-t"><b>Hours</b><span>${CO.hours}</span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="foot-grid">
        <div class="footbrand">
          <img src="assets/kadala-logo-light.png" alt="Kadala Fire and Safety East Africa" width="581" height="327">
          <p class="foot-tag">${CO.tagline}</p>
          <p>Integrated fire protection, safety systems and training for schools, workplaces
             and institutions across East Africa.</p>
          <div class="chips">
            <span class="chip">BS 5839</span><span class="chip">BAFE SP203</span>
            <span class="chip">KEBS</span><span class="chip">OSHA / NEMA</span>
          </div>
        </div>
        ${col('Solutions',[
          ['Fire Protection','#/fire-protection'],['Fire Detection','#/fire-detection'],
          ['Emergency Systems','#/emergency-systems'],['Security Systems','#/security-systems'],
          ['Inspection &amp; Maintenance','#/service-maintenance']])}
        ${col('Equipment',[
          ['Fire Extinguishers','#/fire-extinguishers'],['Fire Alarms','#/fire-alarms'],
          ['Emergency Lighting','#/emergency-lighting'],['Safety Signage','#/safety-signage'],
          ['All equipment','#/products']])}
        ${col('Training',[
          ['Training Programmes','#/training'],['First Aid','#/first-aid'],
          ['Fire Drills','#/fire-drills'],['Fire Marshals Club','#/fire-marshals-club'],
          ['School Programme','#/schools']])}
        ${col('Company',[
          ['About Kadala','#/about'],['Industries','#/industries'],
          ['Projects','#/projects'],['Certifications','#/certifications'],
          ['Resources','#/resources'],['Contact','#/contact']])}
      </div>

      <div class="foot-addr">
        <p><span>${G.icon('pin')}</span><span class="fa-t"><b>Office</b>${CO.office}</span></p>
        <p><span>${G.icon('doc')}</span><span class="fa-t"><b>Postal</b>${CO.box}, ${CO.city}</span></p>
        <p><span>${G.icon('globe')}</span><span class="fa-t"><b>Web</b><a href="https://${CO.site}" target="_blank" rel="noopener">${CO.site}</a></span></p>
      </div>

      <div class="disclaimer">
        <b>Kadala does not provide firefighting crews.</b> We are a fire prevention, protection, detection, safety systems and training
        company. Our role is to help organisations prevent fires, prepare people, maintain equipment and evacuate safely, not to attend
        active fires.
      </div>

      <div class="foot-bottom">
        <p>&copy; ${new Date().getFullYear()} ${CO.name}. All rights reserved.</p>
        <div class="foot-end">
          <span>${CO.city}</span>
          <button class="to-top" type="button" id="to-top">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5"/></svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  </footer>

  <div class="float-bar" id="float-bar">
    <a class="fb-quote" href="#/quote" aria-label="Get a quote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 4h7l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14 4v5h5M9 14h6M9 17h4"/></svg><span>Get a quote</span></a>
    <a class="fb-min" href="tel:${CO.tel1Raw}" aria-label="Call Kadala"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></a>
    <a class="fb-min" href="https://wa.me/${CO.wa}" target="_blank" rel="noopener" aria-label="WhatsApp Kadala"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 19z"/></svg></a>
  </div>

  <nav class="mobile-bar" aria-label="Quick actions">
    <a href="tel:${CO.tel1Raw}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>Call</a>
    <a href="https://wa.me/${CO.wa}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 19z"/></svg>WhatsApp</a>
    <a class="is-primary" href="#/quote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 4h7l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14 4v5h5M9 14h6M9 17h4"/></svg>Quote</a>
  </nav>`;
}

/* ---------------- Routing ---------------- */
function parseHash(){
  const raw = (location.hash || '#/home').replace(/^#\/?/, '');
  const [path, qs] = raw.split('?');
  return { route:(path || 'home').replace(/\/$/,''), params:new URLSearchParams(qs || '') };
}

function banner(page, route){
  const parent = CRUMB_PARENT[route];
  const crumbs = ['<a href="#/home">Home</a>','<span class="sep">/</span>']
    .concat(parent ? [`<a href="${parent[1]}">${parent[0]}</a>`,'<span class="sep">/</span>'] : [])
    .concat([`<span class="here">${PAGE_TITLE[route] || page.h1}</span>`]).join(' ');
  return `<section class="banner">
      ${page.bannerImg?`<div class="banner-bg"><img src="${page.bannerImg}" alt="" loading="eager" decoding="async"></div>`:''}
      <div class="wrap">
        <div class="crumbs">${crumbs}</div>
        <h1>${page.h1}</h1>${page.sub?`<p>${page.sub}</p>`:''}
      </div>
    </section>`;
}

function setMeta(page, route){
  document.title = page.title.replace(/&amp;/g,'&');
  let m = document.querySelector('meta[name="description"]');
  if(!m){ m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
  m.setAttribute('content', page.desc.replace(/&amp;/g,'&'));
  let c = document.querySelector('link[rel="canonical"]');
  if(!c){ c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); }
  c.href = 'https://' + CO.site + '/' + (route === 'home' ? '' : route);
}

function markActive(route){
  document.querySelectorAll('.nav-item').forEach(el=>{
    const n = NAV[+el.dataset.idx];
    const hrefs = [n.href].concat((n.children||[]).map(c=>c[1]));
    const active = hrefs.some(h => h === '#/' + route);
    el.classList.toggle('is-active', active);
  });
}

function render(){
  const {route, params} = parseHash();
  const key = PAGES[route] ? route : 'home';
  const page = PAGES[key];

  observers.forEach(o=>o.disconnect());
  observers = [];

  const main = document.getElementById('main');
  main.innerHTML = (page.hero ? '' : banner(page, key)) + page.body();

  setMeta(page, key);
  markActive(key);
  closeAllMenus();

  const head = document.getElementById('site-head');
  head.classList.toggle('is-plain', !page.hero);
  head.classList.remove('is-solid');
  document.body.classList.toggle('has-hero', !!page.hero);

  window.scrollTo(0,0);

  initReveal();
  initHero();
  initLazyVideos();
  initExplorer();
  initJourney();
  initChain();
  initTrainer();
  initFilters();
  initTilt();
  initCounters();
  initTables();
  prefillForms(params);
  wireForms();
  onScroll();
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal, .mask-rise');
  if(!('IntersectionObserver' in window) || reduceMotion){
    els.forEach(e=>e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
  els.forEach(e=>{
    const r = e.getBoundingClientRect();
    if(r.top < window.innerHeight * 0.95) e.classList.add('in');   /* visible at rest on first frame */
    else io.observe(e);
  });
  observers.push(io);
}

/* ---------------- Hero video ---------------- */
/* ---------------- Hero video sequence ----------------
   The hero plays two clips in turn rather than looping one. Each clip sits in
   its own layer, so moving from the first to the second is a crossfade rather
   than a black frame, and the second clip only starts downloading once the
   first is a few seconds in, which keeps the opening payload small. */
const HERO_CLIPS = [
  {lg:'assets/video/kadala-hero.mp4',   sm:'assets/video/kadala-hero-sm.mp4'},
  {lg:'assets/video/kadala-hero-2.mp4', sm:'assets/video/kadala-hero-2-sm.mp4'}
];
const HERO_FADE = 1.05;   /* seconds of overlap while one clip hands to the next */
const HERO_QUEUE = 2.5;   /* seconds into the first clip before the second loads */

function initHero(){
  const layers = [document.getElementById('hero-video'), document.getElementById('hero-video-2')];
  if(!layers[0] || !layers[1]) return;
  const poster = document.getElementById('hero-poster');
  const toggle = document.getElementById('vid-toggle');
  const conn = navigator.connection || {};
  const cheap = conn.saveData === true || /2g/.test(conn.effectiveType || '');

  if(reduceMotion || cheap){
    if(toggle) toggle.hidden = true;
    return;                                        /* poster image carries the hero */
  }

  const small = window.matchMedia('(max-width: 900px)').matches;
  const srcOf = i => small ? HERO_CLIPS[i].sm : HERO_CLIPS[i].lg;

  let active = 0;        /* the layer currently on screen */
  let handing = false;   /* a crossfade is already under way */
  let stopped = false;   /* the visitor pressed pause */
  let queued = false;    /* the second clip has been asked to download */

  layers[0].src = srcOf(0);
  layers[0].load();

  layers[0].addEventListener('playing', ()=>{
    layers[0].classList.add('is-on');
    if(poster) poster.style.opacity = '0';
  }, {once:true});

  const handover = () => {
    const from = layers[active], to = layers[1 - active];
    to.currentTime = 0;
    const done = () => {
      to.classList.add('is-on');
      from.classList.remove('is-on');
      active = 1 - active;
      window.setTimeout(()=>{
        from.pause();
        try { from.currentTime = 0; } catch(e){}
        handing = false;
      }, HERO_FADE * 1000);
    };
    const p = to.play();
    if(p && p.then) p.then(done).catch(()=>{ handing = false; }); else done();
  };

  layers.forEach(v => {
    v.addEventListener('timeupdate', ()=>{
      if(v !== layers[active] || stopped) return;
      if(!queued && v.currentTime > HERO_QUEUE){
        queued = true;
        layers[1].src = srcOf(1);
        layers[1].load();
      }
      if(handing || !v.duration || !isFinite(v.duration)) return;
      if(v.duration - v.currentTime <= HERO_FADE){ handing = true; handover(); }
    });
    /* a clip that reaches its end before the crossfade fires hands over now */
    v.addEventListener('ended', ()=>{
      if(handing || stopped || v !== layers[active]) return;
      handing = true;
      handover();
    });
  });

  const first = layers[0].play();
  if(first && first.catch) first.catch(()=>{ if(toggle) toggle.setAttribute('aria-pressed','true'); });

  if(toggle){
    toggle.addEventListener('click', ()=>{
      const v = layers[active];
      if(v.paused){
        stopped = false;
        v.play().catch(()=>{});
        toggle.setAttribute('aria-pressed','false');
        toggle.setAttribute('aria-label','Pause background video');
        toggle.innerHTML = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="2" width="4" height="12" rx="1"/><rect x="9" y="2" width="4" height="12" rx="1"/></svg>';
      } else {
        stopped = true;
        layers.forEach(l => l.pause());
        toggle.setAttribute('aria-pressed','true');
        toggle.setAttribute('aria-label','Play background video');
        toggle.innerHTML = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2.5l9 5.5-9 5.5z"/></svg>';
      }
    });
  }

  /* pause when the hero scrolls out of view */
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(es=>{
      es.forEach(e=>{
        if(stopped) return;
        if(e.isIntersecting) layers[active].play().catch(()=>{});
        else layers.forEach(l => l.pause());
      });
    }, {threshold:0.05});
    io.observe(document.getElementById('hero'));
    observers.push(io);
  }
}

/* ---------------- Lazy background video ----------------
   Story and band videos only load once they are close to the viewport, and
   not at all under reduced motion or a metered connection.              */
function initLazyVideos(){
  const vids = document.querySelectorAll('video[data-lazyvid]');
  if(!vids.length) return;
  const conn = navigator.connection || {};
  if(reduceMotion || conn.saveData === true || /2g/.test(conn.effectiveType || '')){
    return;   /* leave the element unloaded: its poster frame carries the section */
  }
  if(!('IntersectionObserver' in window)){
    vids.forEach(v=>{ v.src = v.dataset.lazyvid; v.play().catch(()=>{}); });
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      const v = e.target;
      if(e.isIntersecting){
        if(!v.src){ v.src = v.dataset.lazyvid; v.load(); }
        v.play().catch(()=>{});
      } else if(v.src){
        v.pause();
      }
    });
  }, {rootMargin:'320px 0px'});
  vids.forEach(v=>io.observe(v));
  observers.push(io);
}

/* ---------------- Category explorer ---------------- */
function initExplorer(){
  const root = document.getElementById('explorer');
  if(!root) return;
  const tabs = root.querySelectorAll('.exp-btn');
  const panes = root.querySelectorAll('.pane');
  const select = i => {
    tabs.forEach((t,n)=>t.setAttribute('aria-selected', String(n===i)));
    panes.forEach((p,n)=>p.classList.toggle('on', n===i));
  };
  tabs.forEach((t,i)=>{
    t.addEventListener('click', ()=>select(i));
    t.addEventListener('mouseenter', ()=>{ if(window.matchMedia('(min-width:981px)').matches) select(i); });
    t.addEventListener('keydown', e=>{
      if(e.key === 'ArrowDown' || e.key === 'ArrowRight'){ e.preventDefault(); tabs[(i+1)%tabs.length].focus(); select((i+1)%tabs.length); }
      if(e.key === 'ArrowUp' || e.key === 'ArrowLeft'){ e.preventDefault(); const j=(i-1+tabs.length)%tabs.length; tabs[j].focus(); select(j); }
    });
  });
}

/* ---------------- Protection journey ---------------- */
function initJourney(){
  const root = document.getElementById('journey');
  if(!root) return;
  const steps = root.querySelectorAll('.jstep');
  const vis = root.querySelectorAll('.jv');
  const bn = document.getElementById('jbadge-n');
  const bt = document.getElementById('jbadge-t');
  const names = Array.from(steps).map(s=>s.querySelector('h3').textContent);

  const setActive = i => {
    steps.forEach((s,n)=>s.classList.toggle('on', n===i));
    vis.forEach((v,n)=>v.classList.toggle('on', n===i));
    if(bn) bn.textContent = String(i+1).padStart(2,'0');
    if(bt) bt.textContent = names[i];
  };

  if(!('IntersectionObserver' in window)){ steps.forEach(s=>s.classList.add('on')); vis.forEach(v=>v.classList.add('on')); return; }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) setActive(+e.target.dataset.jstep); });
  }, {rootMargin:'-42% 0px -42% 0px', threshold:0});
  steps.forEach(s=>io.observe(s));
  observers.push(io);
}

/* ---------------- System chain ---------------- */
function initChain(){
  const root = document.getElementById('chain');
  if(!root) return;
  const nodes = root.querySelectorAll('.chain-node');
  if(!('IntersectionObserver' in window) || reduceMotion){ nodes.forEach(n=>n.classList.add('on')); return; }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        nodes.forEach((n,i)=>setTimeout(()=>n.classList.add('on'), i*180));
        io.disconnect();
      }
    });
  }, {threshold:0.25});
  io.observe(root);
  observers.push(io);
}

/* ---------------- Training switcher ---------------- */
function initTrainer(){
  const root = document.getElementById('trainer');
  if(!root || !TRAINING) return;
  const tabs = root.querySelectorAll('.ttab');
  const media = root.querySelectorAll('.tm');
  const detail = document.getElementById('trainer-detail');

  const show = i => {
    tabs.forEach((t,n)=>t.setAttribute('aria-selected', String(n===i)));
    media.forEach((m,n)=>m.classList.toggle('on', n===i));
    const d = TRAINING[i];
    detail.innerHTML = `<p>${d.p}</p>
      <div class="chips">${d.tags.map(x=>`<span class="chip">${x}</span>`).join('')}</div>
      <div class="btn-row" style="margin-top:24px">
        <a class="btn" href="#/book-training?course=${encodeURIComponent(d.t)}"><span>Book training</span>${A}</a>
      </div>`;
  };
  tabs.forEach((t,i)=>{
    t.addEventListener('click', ()=>show(i));
    t.addEventListener('mouseenter', ()=>{ if(window.matchMedia('(min-width:981px)').matches) show(i); });
  });
  show(0);
}

/* ---------------- Tables on small screens ----------------
   A wide table cannot be read on a phone. Each cell is given the text of its
   column heading so the stylesheet can restate the row as a labelled card
   below 640px. The fire class matrix is deliberately left alone, because
   reading across the columns is the whole purpose of that grid, so it keeps
   its table shape and is given a short sideways scroll hint instead. */
function initTables(){
  document.querySelectorAll('.table-wrap table').forEach(t => {
    if(t.dataset.labelled) return;
    const heads = [...t.querySelectorAll('thead th')].map(th => th.textContent.trim());
    if(!heads.length) return;
    t.querySelectorAll('tbody tr').forEach(tr => {
      [...tr.children].forEach((cell, i) => {
        if(heads[i]) cell.setAttribute('data-l', heads[i]);
      });
    });
    t.dataset.labelled = '1';
  });

  document.querySelectorAll('.matrix').forEach(m => {
    if(m.querySelector('.matrix-hint')) return;
    const scroll = m.querySelector('.matrix-scroll');
    if(!scroll) return;
    const hint = document.createElement('p');
    hint.className = 'matrix-hint';
    hint.textContent = 'Scroll sideways to see every medium';
    scroll.parentNode.insertBefore(hint, scroll);
  });
}

/* ---------------- Catalogue filters ---------------- */
function initFilters(){
  const bar = document.querySelector('.filters');
  const grid = document.getElementById('catalogue');
  if(!bar || !grid) return;
  const items = grid.querySelectorAll('.prod');
  const count = document.getElementById('cat-count');
  const apply = key => {
    let shown = 0;
    items.forEach(it=>{
      const ok = key === 'all' || it.dataset.cat === key;
      it.hidden = !ok;
      if(ok) shown++;
    });
    if(count) count.textContent = `Showing ${shown} of ${items.length} items. Every item can be quoted or ordered.`;
  };
  bar.querySelectorAll('.filter').forEach(b=>{
    b.addEventListener('click', ()=>{
      bar.querySelectorAll('.filter').forEach(x=>x.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true');
      apply(b.dataset.filter);
    });
  });
  apply('all');
}

/* ---------------- Subtle 3D tilt ---------------- */
function initTilt(){
  if(reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.tilt').forEach(el=>{
    let raf = null;
    el.addEventListener('pointermove', e=>{
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if(raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(()=>{
        el.style.transform = `perspective(1000px) rotateX(${(-py*4.5).toFixed(2)}deg) rotateY(${(px*4.5).toFixed(2)}deg) translateY(-6px)`;
      });
    });
    el.addEventListener('pointerleave', ()=>{ if(raf) cancelAnimationFrame(raf); el.style.transform = ''; });
  });
}

/* ---------------- Verified stat counters ---------------- */
function initCounters(){
  const box = document.getElementById('stats');
  if(!box) return;
  const nums = box.querySelectorAll('[data-count]');
  if(reduceMotion || !('IntersectionObserver' in window)){
    nums.forEach(n=>n.textContent = n.dataset.count); return;
  }
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      nums.forEach(n=>{
        const target = +n.dataset.count;
        let v = 0;
        const t0 = performance.now();
        const step = now => {
          const k = Math.min(1, (now - t0) / 900);
          v = Math.round(target * (1 - Math.pow(1 - k, 3)));
          n.textContent = v;
          if(k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      io.disconnect();
    });
  }, {threshold:0.4});
  io.observe(box);
  observers.push(io);
}

/* ---------------- Header, parallax, scroll ---------------- */
let ticking = false;
function onScroll(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(()=>{
    const y = window.scrollY || 0;
    const head = document.getElementById('site-head');
    if(head && !head.classList.contains('is-plain')) head.classList.toggle('is-solid', y > 90);

    const media = document.getElementById('hero-media');
    if(media && !reduceMotion && y < window.innerHeight){
      const k = y * 0.22;
      media.style.transform = `translate3d(0, ${k.toFixed(1)}px, 0)`;
      const hero = document.getElementById('hero');
      if(hero) hero.style.setProperty('--hero-fade', String(Math.max(0, 1 - y / 700)));
    }
    ticking = false;
  });
}

/* ---------------- Menus ---------------- */
function closeAllMenus(){
  document.querySelectorAll('.nav-item[data-open]').forEach(el=>{
    el.dataset.open = 'false';
    const b = el.querySelector('button.nav-link'); if(b) b.setAttribute('aria-expanded','false');
  });
  const d = document.getElementById('drawer');
  if(d){
    d.classList.remove('open');
    const b = document.getElementById('burger');
    if(b){ b.setAttribute('aria-expanded','false'); b.setAttribute('aria-label','Open menu'); }
  }
  const h = document.getElementById('site-head');
  if(h) h.classList.remove('is-menu');
  document.body.classList.remove('menu-open');
}

function wireChrome(){
  document.querySelectorAll('.nav-item[data-open]').forEach(item=>{
    const btn = item.querySelector('button.nav-link');
    let closeTimer = null;
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const open = item.dataset.open === 'true';
      closeAllMenus();
      item.dataset.open = open ? 'false' : 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    item.addEventListener('mouseenter', ()=>{
      if(!window.matchMedia('(min-width:1181px)').matches) return;
      clearTimeout(closeTimer);
      closeAllMenus();
      item.dataset.open = 'true';
      btn.setAttribute('aria-expanded','true');
    });
    item.addEventListener('mouseleave', ()=>{
      if(!window.matchMedia('(min-width:1181px)').matches) return;
      closeTimer = setTimeout(()=>{
        item.dataset.open = 'false';
        btn.setAttribute('aria-expanded','false');
      }, 160);
    });
  });

  /* Clicking away closes any open menu. The burger and the drawer itself are
     excluded, otherwise this listener would catch the same click that opened
     the mobile menu and shut it again before it was ever seen. Links inside
     the drawer close it through their own handler further down. */
  document.addEventListener('click', e=>{
    if(e.target.closest('.nav-item') || e.target.closest('#burger') || e.target.closest('#drawer')) return;
    closeAllMenus();
  });
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeAllMenus(); });

  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  burger.addEventListener('click', ()=>{
    const open = drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    /* The menu needs a solid ground to sit on, which the header does not have
       while it is floating over a hero video, and the page behind it should
       stay where it is while the menu is open. */
    document.getElementById('site-head').classList.toggle('is-menu', open);
    document.body.classList.toggle('menu-open', open);
  });
  drawer.querySelectorAll('.drawer-group[data-open] .drawer-top').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const grp = btn.parentElement;
      const open = grp.dataset.open === 'true';
      grp.dataset.open = open ? 'false' : 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeAllMenus));

  const toTop = document.getElementById('to-top');
  if(toTop) toTop.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
  });

  window.addEventListener('scroll', onScroll, {passive:true});
}

/* ---------------- Forms ---------------- */
const INTENT_MAP = {
  order:'', assessment:'Site Assessment', service:'Inspection and Maintenance',
  drill:'Fire Drill', club:'Fire Marshal Club', school:'School Safety Package'
};

function prefillForms(params){
  const item = params.get('item');
  const intent = params.get('intent');
  const course = params.get('course');

  const sel = document.querySelector('#quote-form select[name="need"], #contact-form select[name="need"]');
  if(sel){
    const opts = Array.from(sel.options);
    let target = null;
    if(item){
      const needle = item.toLowerCase();
      target = opts.find(o => o.textContent && (needle.includes(o.textContent.toLowerCase()) || o.textContent.toLowerCase().includes(needle)));
    }
    if(!target && intent && INTENT_MAP[intent]) target = opts.find(o => o.textContent === INTENT_MAP[intent]);
    if(!target && item) target = opts.find(o => o.textContent === 'Other');
    if(target) sel.value = target.value || target.textContent;
  }

  const msg = document.querySelector('#quote-form textarea[name="message"], #contact-form textarea[name="message"]');
  if(msg && item && !msg.value){
    msg.value = intent === 'order' ? `I would like to order: ${item}. Quantity: ` : `Enquiry regarding: ${item}. `;
  }

  const cs = document.querySelector('#training-form select[name="course"]');
  if(cs && course){
    const t = Array.from(cs.options).find(o => o.textContent.toLowerCase() === course.toLowerCase());
    if(t) cs.value = t.value || t.textContent;
  }
}

function validate(form){
  let ok = true, first = null;
  form.querySelectorAll('[required]').forEach(el=>{
    const field = el.closest('.field');
    let bad = !el.value.trim();
    if(!bad && el.type === 'email') bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim());
    if(!bad && el.type === 'tel') bad = el.value.replace(/\D/g,'').length < 7;
    if(!bad && el.type === 'number') bad = !(Number(el.value) > 0);
    field.classList.toggle('invalid', bad);
    if(bad){ ok = false; if(!first) first = el; }
  });
  if(first) first.focus();
  return ok;
}

function wireForms(){
  document.querySelectorAll('form.form').forEach(form=>{
    if(form.dataset.wired) return;
    form.dataset.wired = '1';
    form.querySelectorAll('input,select,textarea').forEach(el=>{
      const clear = ()=> el.closest('.field').classList.remove('invalid');
      el.addEventListener('input', clear);
      el.addEventListener('change', clear);
    });
    form.addEventListener('submit', e=>{
      e.preventDefault();
      if(!validate(form)) return;
      const ok = document.getElementById(form.id + '-ok');
      const data = new FormData(form);
      const lines = [];
      data.forEach((v,k)=>{ if(String(v).trim()) lines.push(`${k[0].toUpperCase()+k.slice(1)}: ${v}`); });
      const subject = encodeURIComponent(form.id === 'training-form'
        ? 'Training booking enquiry: ' + (data.get('organisation') || 'website')
        : 'Quotation request: ' + (data.get('need') || 'website'));
      const body = encodeURIComponent(lines.join('\n'));
      if(ok){
        ok.classList.add('show');
        const link = ok.querySelector('a[href^="mailto"]');
        if(link) link.href = `mailto:${CO.email}?subject=${subject}&body=${body}`;
        ok.scrollIntoView({block:'center', behavior:reduceMotion?'auto':'smooth'});
      }
    });
  });
}

/* ---------------- Boot ---------------- */
document.body.classList.add('js');
document.getElementById('header-mount').innerHTML = buildHeader();
document.getElementById('footer-mount').innerHTML = buildFooter();
wireChrome();
window.addEventListener('hashchange', render);
if(!location.hash) location.replace('#/home');
render();
})();
