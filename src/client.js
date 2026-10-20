import { capturePostHogEvent as capture } from './posthog';
import { capturePostHogLog as log } from './posthog-logs';
import { patternAttributes } from './design-system/patterns';
import reflections from './reflections';
import metadata from './siteMetadata';
import themes from './themes';
import unlearn from './outputs/unlearn';
import { getContactIntentFromSearch, getContactIntentLabel } from './contactIntent';

const paths = { diagnostic:'/executive-state-diagnostic', 'little-panda':'/little-panda', 'workshop-enquiry':'/contact?about=workshop' };
const navigate = command => {
  if (command === 'sanctuary') { window.open('https://trueessence.space/', '_blank', 'noopener,noreferrer'); return; }
  location.assign(paths[command] || `/${command}`);
};
const nav = document.querySelector('#site-navigation');
const toggle = document.querySelector('.nav-toggle');
let invoker = toggle;
function closeNav(restore = false) { nav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); if (restore) invoker.focus(); }
function openNav(button) { invoker = button; nav.hidden = false; toggle.setAttribute('aria-expanded','true'); nav.querySelector('button').focus(); }
toggle.addEventListener('click', () => nav.hidden ? openNav(toggle) : closeNav());
document.querySelector('[data-browse]')?.addEventListener('click', event => openNav(event.currentTarget));
document.addEventListener('mousedown', event => { if (!event.target.closest('.nav-menu')) closeNav(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !nav.hidden) closeNav(true); });
document.querySelectorAll('[data-navigate]').forEach(button => button.addEventListener('click', () => { closeNav(); navigate(button.dataset.navigate); }));
document.querySelectorAll('[data-home]').forEach(button => button.addEventListener('click', () => location.assign('/')));

const initial = document.querySelector('.pressure-encounter');
if (initial) {
  let lastButton;
  const reflectionView = document.createElement('main');
  reflectionView.className = 'pressure-encounter pressure-encounter--reflection';
  reflectionView.hidden = true;
  initial.after(reflectionView);
  initial.querySelectorAll('[data-pressure-path]').forEach(button => button.addEventListener('click', () => {
    const path = button.dataset.pressurePath;
    const r = reflections[path];
    lastButton = button;
    capture('pressure_path_selected', { pressure_path: path });
    log('Visitor selected a pressure reflection path', { pressure_path:path });
    // All text comes from the authored, trusted reflection module, never visitor input.
    reflectionView.innerHTML = `<div class="pressure-reflection"><p class="pressure-reflection__label">${r.label}</p><h1 tabindex="-1">${r.title}</h1><p class="pressure-reflection__body">${r.body}</p><div class="pressure-reflection__pause"><span aria-hidden="true">01</span><p>${r.nextMove}</p></div><div class="pressure-reflection__actions"></div></div>`;
    const actions = reflectionView.querySelector('.pressure-reflection__actions');
    const choices = [[r.command,r.action], ...(r.secondaryCommand?[[r.secondaryCommand,r.secondaryAction]]:[]), ['contact','Talk to James'], [null,'Begin again']];
    choices.forEach(([destination,label],index) => {
      const action = document.createElement('button'); action.type='button'; action.textContent=label;
      const attrs = patternAttributes('action', index === 0 ? 'outline' : 'text');
      for (const [name,value] of Object.entries(attrs)) action.setAttribute(name, value);
      action.addEventListener('click', () => {
        if (!destination) { reflectionView.hidden=true; initial.hidden=false; lastButton.focus(); return; }
        const properties = {pressure_path:path,destination};
        capture('pressure_reflection_cta_clicked',properties); log('Visitor continued from a pressure reflection',properties); navigate(destination);
      });
      actions.append(action);
    });
    initial.hidden=true; reflectionView.hidden=false; reflectionView.querySelector('h1').focus();
  }));
}

const contact = document.querySelector('[data-contact]');
let intent='general';
if (contact) {
  intent = contact.dataset.workshop === 'true' ? 'workshop' : getContactIntentFromSearch(location.search);
  const copy = {
    diagnostic:'If you want to request an Executive State Diagnostic, reach out directly using the options below. I respond personally within 24 hours.',
    workshop:'If you want to explore a Stillness Under Pressure workshop for your team, reach out directly using the options below. I respond personally within 24 hours.',
    'workflow-system':'If you want to ask about a workflow system, start with one of the direct contact options below.',
    'product-clarity':'Tell me what your product does, where people get stuck and what you want to improve. I respond personally.'
  };
  if (copy[intent]) contact.querySelector('[data-contact-intro]').textContent=copy[intent];
  contact.querySelector('[data-contact-label]').textContent=getContactIntentLabel(intent);
  contact.querySelector('[data-workshop-note]').hidden=intent!=='workshop';
  if (contact.dataset.workshop === 'true') {
    const meta = metadata.getMetadataForCommand('contact');
    document.title=meta.title;
    document.querySelector('meta[name=description]').content=meta.description;
    for (const name of ['title','description','url']) {
      document.querySelector(`meta[property="og:${name}"]`)?.setAttribute('content',meta[name]);
      document.querySelector(`meta[name="twitter:${name}"]`)?.setAttribute('content',meta[name]);
    }
    document.querySelector('link[rel=canonical]').href=meta.url;
    document.querySelector('main').classList.add('route-page--contact');
  }
}
document.querySelectorAll('[data-contact-method]').forEach(link => link.addEventListener('click', () => {
  const props={contact_method:link.dataset.contactMethod,enquiry_type:intent};
  capture('contact_method_selected',props); log('Visitor selected a contact method',props);
}));
document.querySelectorAll('[data-contact-cta]').forEach(link => link.addEventListener('click', () => capture('contact_cta_clicked',{source_page:link.dataset.contactCta,enquiry_type:new URL(link.href).searchParams.get('about') || 'general'})));

let theme='default'; let timer; let transitionTimer;
function applyTheme(name) {
  if (name!=='dark' && !themes[name]) return;
  theme=name;
  sessionStorage.setItem('site_theme', name);
  clearTimeout(transitionTimer);
  const image=themes[name]?.backgroundImage;
  document.body.className=`${name==='dark'?'dark':'default'}${image?` image-theme theme-${name}`:' content-visible'}`;
  const background=document.querySelector('.background-container');
  background.classList.toggle('stillness-bg',name==='stillness');
  background.style.backgroundImage=image?`url(/${innerWidth<=768 ? themes[name].mobileBackgroundImage : image})`:'';
  background.style.opacity=image?'1':'0';
  document.querySelector('.App').style.opacity=image?'0':'1';
  transitionTimer=setTimeout(()=>{document.body.classList.add('content-visible');document.querySelector('.App').style.opacity='1';},image?3000:0);
}
addEventListener('resize',()=>{if(themes[theme]?.backgroundImage) applyTheme(theme);});
function breathe() {
  if(document.querySelector('.breathe-overlay'))return;
  const overlay=document.createElement('div');overlay.className='breathe-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Breathing practice');overlay.tabIndex=-1;
  overlay.innerHTML='<div class="breathe-circle"></div><div class="breathe-text" aria-live="polite"></div>';
  const phases=[['in','Breathe In',4000],['hold1','Hold',4000],['out','Breathe Out',6000],['hold2','Hold',2000]];
  let index=0; const previous=document.activeElement;
  function phase(){const [name,text,duration]=phases[index];overlay.querySelector('.breathe-circle').className=`breathe-circle ${name}`;overlay.querySelector('.breathe-text').textContent=text;index=(index+1)%phases.length;timer=setTimeout(phase,duration);}
  function close(){clearTimeout(timer);overlay.remove();document.removeEventListener('keydown',onKey);previous?.focus();}
  function onKey(event){if(event.key==='Escape')close();}
  overlay.addEventListener('click',close);document.addEventListener('keydown',onKey);document.body.append(overlay);overlay.focus();requestAnimationFrame(phase);
}
// Preserve the existing command handlers without restoring a terminal or adding a public input.
document.addEventListener('site:command', event => {
  const command=String(event.detail || '').toLowerCase();
  if(command==='breathe')breathe();
  else if(command==='dark' || themes[command])applyTheme(command);
  else if(command==='return' || command==='unlearn') {
    let output=document.querySelector('[data-easter-egg]');
    if(!output){output=document.createElement('p');output.dataset.easterEgg='';document.querySelector('main').append(output);}
    output.textContent=command==='return'?"You've never left.":unlearn();
  }
});
if (location.pathname.replace(/\/$/,'')==='/sanctuary') {
  window.open('https://trueessence.space/', '_blank','noopener,noreferrer');
  location.replace('/');
}

applyTheme(sessionStorage.getItem('site_theme') || 'default');
