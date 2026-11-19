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
