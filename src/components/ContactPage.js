import React from 'react';
import {
  getContactIntentFromValue,
  getContactIntentLabel,
  getContactPath
} from '../contactIntent';

function getIntroCopy(intent) {
  switch (intent) {
    case 'diagnostic':
      return 'If you want to request an Executive State Diagnostic, reach out directly using the options below. I respond personally within 24 hours.';
    case 'workshop':
      return 'If you want to explore a Stillness Under Pressure workshop for your team, reach out directly using the options below. I respond personally within 24 hours.';
    case 'workflow-system':
      return 'If you want to ask about a workflow system, start with one of the direct contact options below.';
    case 'product-clarity':
      return 'Tell me what your product does, where people get stuck and what you want to improve. I respond personally.';
    default:
      return 'For executive diagnostics, workshops, workflow systems, or product clarity engagements, use one of the direct contact options below.';
  }
}

function ContactPage({ initialIntent = 'general' }) {
  const safeIntent = getContactIntentFromValue(initialIntent);
  const enquiryLabel = getContactIntentLabel(safeIntent);

  return (
    <>
      <p>{getIntroCopy(safeIntent)}</p>
      <p><strong>Current enquiry:</strong> {enquiryLabel}</p>
      <p className="app-item"><img src="/images/email.svg" alt="" className="app-icon" /><span><strong>Email</strong><br /><a href="mailto:james@jamesgodwin.me">james@jamesgodwin.me</a></span></p>
      <p className="app-item"><img src="/images/phone.svg" alt="" className="app-icon" /><span><strong>WhatsApp</strong><br /><a href="https://wa.me/27686038834" target="_blank" rel="noopener noreferrer">WhatsApp James</a></span></p>
      <p><strong>Other ways to connect</strong></p>
      <p className="app-item"><img src="/images/phone.svg" alt="" className="app-icon" /><span><strong>Telephone</strong><br /><a href="tel:+27686038834">+27 68 603 8834</a></span></p>
      <p className="app-item"><img src="/images/linkedin.svg" alt="" className="app-icon" /><span><strong>Professional profile</strong><br /><a href="https://www.linkedin.com/in/jamiegodwin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span></p>

      {safeIntent === 'workshop' && (
        <>
          <hr />
          <p><a href={getContactPath('general')}>Prefer a general note instead? Use the general contact path.</a></p>
        </>
      )}
    </>
  );
}

export default ContactPage;
