import React from 'react';
import SiteFooter from './SiteFooter';

function RouteAction({ action, className }) {
  if (!action) return null;

  const isExternal = action.href.startsWith('http');
  return (
    <a
      className={className}
      href={action.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
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
            <RouteAction action={presentation.primaryAction} className="route-page__primary" />
            <RouteAction action={presentation.secondaryAction} className="route-page__secondary" />
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
