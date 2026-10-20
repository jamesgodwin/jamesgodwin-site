import posthog from 'posthog-js';

const key = import.meta.env.PUBLIC_POSTHOG_KEY;
const host = import.meta.env.PUBLIC_POSTHOG_HOST;
const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
const preview = location.hostname.endsWith('.pages.dev');
const verification = local || preview;
const queryRun = new URLSearchParams(location.search).get('verification_run');
if (verification && queryRun) sessionStorage.setItem('site_verification_run', queryRun);
const verificationRun = queryRun || sessionStorage.getItem('site_verification_run');
// Register before SDK pageview capture, including the temporary Pages address and branch previews.
const properties = verification ? { traffic_type: 'verification', verification_run: verificationRun || (preview ? 'cloudflare-preview' : 'local'), site_runtime: 'astro' } : { site_runtime: 'astro' };
// Resolve the existing workshop alias before the first pageview.
if (location.pathname.replace(/\/$/, '') === '/workshop-enquiry') {
  history.replaceState({}, '', '/contact?about=workshop');
}
if (key && host) {
  posthog.init(key, {
    api_host: host,
    capture_pageview: true,
    capture_exceptions: { capture_unhandled_errors: true, capture_unhandled_rejections: true, capture_console_errors: false },
    loaded: client => client.register(properties),
    before_send: event => event ? { ...event, properties: { ...event.properties, ...properties } } : null
  });
} else if (import.meta.env.DEV) {
  console.warn('PostHog is not configured. Set PUBLIC_POSTHOG_KEY and PUBLIC_POSTHOG_HOST.');
}
export function capturePostHogEvent(event, properties) { if (key && host) posthog.capture(event, properties); }
export { properties as verificationProperties };
