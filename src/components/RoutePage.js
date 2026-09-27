import React from 'react';
import SiteFooter from './SiteFooter';
import { capturePostHogEvent } from '../posthog';

function RouteAction({ action, className, onClick }) {
  if (!action) return null;

  const isExternal = action.href.startsWith('http');
  return (
    <a
      className={className}
      href={action.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {action.label}
    </a>
  );
}

function RoutePage({ command, heading, content, presentation, onBack, isHelp = false }) {
  const title = presentation?.title || heading;
  const bodyHtml = typeof content === 'string'
    ? content.replace(/^\s*<p><strong>[\s\S]*?<\/strong><\/p>/, '')
    : content;
  const captureContactCta = (action) => {
    if (!action?.href.startsWith('/contact')) return;

    const enquiryType = new URL(action.href, window.location.origin).searchParams.get('about') || 'general';
    capturePostHogEvent('contact_cta_clicked', {
      source_page: command,
      enquiry_type: enquiryType
    });
  };

  return (
    <main className={`route-page ${presentation?.bodyClassName || ''}`}>
      <button onClick={onBack} className="route-page__back">← Back</button>
      <header className="route-page__hero">
        {presentation?.pathLabel && <p className="route-page__path">{presentation.pathLabel}</p>}
        <h1>{title}</h1>
        {presentation?.lede && <p className="route-page__lede">{presentation.lede}</p>}
        {presentation?.facts?.length > 0 && (
          <ul className="route-page__facts" aria-label="Offer details">
            {presentation.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        )}
        {(presentation?.primaryAction || presentation?.secondaryAction) && (
          <div className="route-page__actions">
            <RouteAction action={presentation.primaryAction} className="route-page__primary" onClick={() => captureContactCta(presentation.primaryAction)} />
            <RouteAction action={presentation.secondaryAction} className="route-page__secondary" onClick={() => captureContactCta(presentation.secondaryAction)} />
          </div>
        )}
      </header>
      <div className={`route-page__body ${isHelp ? 'help-output' : ''}`}>
        {typeof bodyHtml === 'string' ? <div dangerouslySetInnerHTML={{ __html: bodyHtml }} /> : bodyHtml}
      </div>
      <SiteFooter />
    </main>
  );
}

export default RoutePage;
