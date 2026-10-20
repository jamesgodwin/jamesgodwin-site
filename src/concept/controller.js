import { readJourney, journeyHash } from './state.js';
const app = document.querySelector('[data-case-app]');
if(app) {
 const shelf = app.querySelector('[data-shelf]');
 const reader = app.querySelector('[data-reader]');
 let state = readJourney(location.hash);
 const render = (focus=false) => {
  const reading = state.step > 0;
  shelf.hidden = reading;
  reader.hidden = !reading;
  if(reading) {
   const template = app.querySelector(`[data-story-template="${state.caseId}-${state.step}"]`);
   reader.replaceChildren(template.content.cloneNode(true));
   if(focus)reader.querySelector('[data-reader-heading]').focus();
  } else {
   app.querySelectorAll('[data-feature]').forEach(el=>el.hidden=el.dataset.feature!==state.caseId);
   shelf.querySelectorAll('[data-case]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.case===state.caseId)));
   if(focus)shelf.querySelector(`[data-case="${state.caseId}"]`).focus();
  }
 };
 const go = next => {state=next;history.pushState(null,'',journeyHash(state));render(true);};
 const restore = () => {
  if(location.hash==='#main')return;
  state=readJourney(location.hash);render(true);
 };
 window.addEventListener('popstate',restore);
 window.addEventListener('hashchange',restore);
 app.addEventListener('click',event=>{
  const target=event.target.closest('button');
  if(!target)return;
  if(target.hasAttribute('data-case'))go({caseId:target.dataset.case,step:target.hasAttribute('data-open-story')?1:0});
  if(target.hasAttribute('data-look-closer'))go({caseId:target.dataset.lookCloser,step:1});
  if(target.hasAttribute('data-all-stories'))go({...state,step:0});
  if(target.hasAttribute('data-step'))go({...state,step:Number(target.dataset.step)});
  if(target.hasAttribute('data-next'))go({...state,step:Math.min(3,state.step+1)});
  if(target.hasAttribute('data-previous'))go({...state,step:Math.max(1,state.step-1)});
 });
 render();
}
