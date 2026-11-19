import { capturePostHogEvent as capture } from './posthog';
import { capturePostHogLog as log } from './posthog-logs';
import { getContactIntentFromSearch } from './contactIntent';

const contact=document.querySelector('[data-contact]');
const intent=contact?.dataset.workshop==='true'?'workshop':getContactIntentFromSearch(location.search);
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
