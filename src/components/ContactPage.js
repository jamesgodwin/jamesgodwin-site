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
      <hr />
      <p>Choose the easiest way to reach me. I respond personally.</p>
      <p className="app-item"><img src="/images/email.svg" alt="" className="app-icon" /><span><strong>Email</strong><br /><a href="mailto:james@jamesgodwin.me">james@jamesgodwin.me</a></span></p>
      <p className="app-item"><img src="/images/phone.svg" alt="" className="app-icon" /><span><strong>WhatsApp</strong><br /><a href="https://wa.me/27686038834" target="_blank" rel="noopener noreferrer">WhatsApp James</a></span></p>
      <p><strong>Other ways to connect</strong></p>
      <p className="app-item"><img src="/images/phone.svg" alt="" className="app-icon" /><span><strong>Telephone</strong><br /><a href="tel:+27686038834">+27 68 603 8834</a></span></p>
      <p className="app-item"><img src="/images/linkedin.svg" alt="" className="app-icon" /><span><strong>Professional profile</strong><br /><a href="https://www.linkedin.com/in/jamiegodwin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span></p>

      {safeIntent === 'workflow-system' && (
        <>
          <hr />
          <p><a href="https://wa.me/27686038834" target="_blank" rel="noopener noreferrer">WhatsApp me about a Workflow Audit →</a></p>
        </>
      )}

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
