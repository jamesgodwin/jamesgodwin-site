export const caseIds = ['scoring','quality','local','system'];
export const stepNames = ['The situation','How I helped','What changed'];
export function readJourney(hash = '') {
 const match = /^#\/(scoring|quality|local|system)\/([0-3])$/.exec(hash);
 return match ? {caseId:match[1],step:Number(match[2])} : {caseId:'scoring',step:0};
}
export function journeyHash({caseId,step}) {
 return `#/${caseIds.includes(caseId) ? caseId : 'scoring'}/${Number.isInteger(step) && step >= 0 && step <= 3 ? step : 0}`;
}
