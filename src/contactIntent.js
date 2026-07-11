const ALLOWED_CONTACT_INTENTS = {
  diagnostic: 'Executive State Diagnostic',
  workshop: 'Stillness Under Pressure Workshop',
  'workflow-system': 'Workflow System',
  general: 'General Enquiry'
};

export function getContactIntentFromValue(value) {
  const normalizedValue = String(value || '').trim().toLowerCase();
  return ALLOWED_CONTACT_INTENTS[normalizedValue] ? normalizedValue : 'general';
}

export function getContactIntentFromSearch(search) {
  const params = new URLSearchParams(search);
  return getContactIntentFromValue(params.get('about'));
}

export function getContactIntentLabel(intent) {
  return ALLOWED_CONTACT_INTENTS[getContactIntentFromValue(intent)];
}

export function getContactPath(intent = 'general') {
  const safeIntent = getContactIntentFromValue(intent);
  return safeIntent === 'general' ? '/contact' : `/contact?about=${safeIntent}`;
}
