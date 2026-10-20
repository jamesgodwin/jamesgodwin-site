// These exports are the option source for Astro, browser-created controls and the local catalogue.
export const actionRecipes = {
 primary: { class:'ui-action--primary', label:'Look closer', description:'Filled primary action using the active theme, with a 44px minimum target.' },
 outline: { class: 'ui-action--outline', label: 'Talk about your product', description: 'One outlined button for page and reflection actions: 44px minimum height, 4px corners, shared type and states.' },
 text: { class: 'ui-action--text', label: 'Talk to James', description: 'Underlined text action for supporting choices.' },
 quiet: { class: 'ui-action--quiet', label: 'Browse without answering', description: 'Smaller auxiliary navigation; distinct from a main action.' },
 back: { class: 'route-page__back', label: '← Back', description: 'Muted return navigation without button chrome.' },
 menuToggle: { class: 'nav-toggle', label: 'Open navigation', description: 'Icon-only navigation control.' },
 menuItem: { class: 'ui-menu-item', label: 'Product Clarity', description: 'Full-width menu row with a hover surface.' }
};
export const linkRecipes = {
 body: { class: 'ui-text-link--body', label: 'james@jamesgodwin.me', description: 'Inline prose/contact link; retains browser-default link colours through tokens.' },
 proof: { class: 'ui-text-link--proof', label: 'See the example', description: 'Monochrome link in the delivery example.' }
};
export const cardRecipes = {
 primary: { class: 'ui-link-card ui-link-card--primary', label:'Product Clarity', description:'UX review and implementation' },
 secondary: { class:'ui-link-card ui-link-card--secondary', label:'Workflow Systems', description:'Operational workflow design and build' }
};
export const choiceRecipes = {
 story: {class:'ui-story-choice',label:'Daily scores. Clear totals.',description:'Image-led story selector with an explicit pressed state.'},
 step: {class:'ui-step-choice',label:'The situation',description:'Named journey step with current-step semantics.'}
};
export const patternRecipes = { action:actionRecipes, link:linkRecipes, card:cardRecipes, choice:choiceRecipes };
export const proseVariants = { body:'route-page__body', reading:'route-page__body ui-prose--reading' };
export function patternAttributes(kind, recipe, attributes = {}) {
 const definition=patternRecipes[kind]?.[recipe];
 if(!definition)throw new Error(`Unknown ${kind} recipe: ${recipe}`);
 for(const name of ['class','class:list','style','data-ui','data-recipe']) {
  if(name in attributes)throw new Error(`Pattern appearance is owned by its recipe; ${name} cannot be overridden.`);
 }
 return {...attributes,class:definition.class,'data-ui':kind,'data-recipe':recipe};
}
