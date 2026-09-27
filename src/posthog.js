import posthog from 'posthog-js';

const posthogKey = process.env.REACT_APP_POSTHOG_KEY;
const posthogHost = process.env.REACT_APP_POSTHOG_HOST;
const isPostHogConfigured = Boolean(posthogKey && posthogHost);

if (!isPostHogConfigured) {
  if (process.env.NODE_ENV === 'development') {
    const missingVariable = posthogKey ? 'REACT_APP_POSTHOG_HOST' : 'REACT_APP_POSTHOG_KEY';
    throw new Error(`${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`);
  }
} else {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    capture_pageview: 'history_change',
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false
    }
  });
}

export function capturePostHogEvent(event, properties) {
  if (isPostHogConfigured) {
    posthog.capture(event, properties);
  }
}
