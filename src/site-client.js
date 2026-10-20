import { capturePostHogEvent as capture } from './posthog';
import { capturePostHogLog as log } from './posthog-logs';
import { getContactIntentFromSearch, getContactIntentLabel } from './contactIntent';
import metadata from './siteMetadata';

const contact=document.querySelector('[data-contact]');
const intent=contact?.dataset.workshop==='true'?'workshop':getContactIntentFromSearch(location.search);
if(contact){
 if(contact.dataset.workshop==='true'){
  const meta=metadata.getMetadataForCommand('contact');document.title=meta.title;
  document.querySelector('meta[name="description"]').content=meta.description;
  document.querySelector('link[rel="canonical"]').href=meta.url;
  for(const name of ['title','description','url']){
   document.querySelector(`meta[property="og:${name}"]`)?.setAttribute('content',meta[name]);
   document.querySelector(`meta[name="twitter:${name}"]`)?.setAttribute('content',meta[name]);
  }
 }
 contact.querySelector('[data-contact-label]').textContent=getContactIntentLabel(intent);
 contact.querySelector('[data-workshop-note]').hidden=intent!=='workshop';
 const copy={
  'product-clarity':'Tell me what you’ve built, where it gets stuck and what you need it to do.',
  'workflow-system':'Tell me how work moves through your business and where keeping track has become difficult.',
  workshop:'Tell me about your team and the pressures you would like to explore in a workshop.',
  diagnostic:'Tell me what you would like to explore in a private practice session.'
 };
 if(copy[intent])contact.querySelector('[data-contact-intro]').textContent=copy[intent];
}
document.querySelectorAll('[data-contact-method]').forEach(link=>link.addEventListener('click',()=>{
 const properties={contact_method:link.dataset.contactMethod,enquiry_type:intent};
 capture('contact_method_selected',properties);log('Visitor selected a contact method',properties);
}));
document.querySelectorAll('[data-contact-cta]').forEach(link=>link.addEventListener('click',()=>{
 capture('contact_cta_clicked',{source_page:link.dataset.contactCta,enquiry_type:new URL(link.href).searchParams.get('about')||'general'});
}));

const reader=document.querySelector('[data-story-reader]');
if(reader){
 const stages=[...reader.querySelectorAll('[data-story-stage]')];
 const show=(focus=false)=>{
  const current=stages.find(stage=>`#${stage.id}`===location.hash)||stages[0];
  stages.forEach(stage=>stage.hidden=stage!==current);
  if(focus)current.querySelector('h1').focus();
 };
 reader.querySelectorAll('[data-story-link]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();history.pushState(null,'',link.getAttribute('href'));show(true);
 }));
 const restore=()=>{if(location.hash!=='#main')show(true);};
 addEventListener('popstate',restore);addEventListener('hashchange',restore);show();
}

document.querySelectorAll('[data-story-shelf]').forEach(shelf=>{
 const choices=[...shelf.querySelectorAll('[data-story-select]')];
 const panels=[...shelf.querySelectorAll('[data-story-feature]')];
 const select=id=>{
  choices.forEach(choice=>choice.setAttribute('aria-pressed',String(choice.dataset.storySelect===id)));
  panels.forEach(panel=>panel.hidden=panel.dataset.storyFeature!==id);
 };
 choices.forEach(choice=>choice.addEventListener('click',()=>select(choice.dataset.storySelect)));
 select(choices[0].dataset.storySelect);
 shelf.querySelector('[data-story-choices]').hidden=false;
});
