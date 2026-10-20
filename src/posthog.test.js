import { vi, test, expect } from 'vitest';

const { sdk } = vi.hoisted(() => ({ sdk: { init: vi.fn(), capture: vi.fn() } }));
vi.mock('posthog-js', () => ({ default: sdk }));

test('Pages and local visits are labelled before capture while custom-domain visitors remain production traffic', async () => {
  vi.stubEnv('PUBLIC_POSTHOG_KEY', 'phc_test_project_token');
  vi.stubEnv('PUBLIC_POSTHOG_HOST', 'https://example.test');
  try {
    for (const [hostname, run] of [
      ['jamesgodwin-site.pages.dev', 'cloudflare-preview'],
      ['abc123.jamesgodwin-site.pages.dev', 'cloudflare-preview'],
      ['review.jamesgodwin-site.pages.dev', 'cloudflare-preview'],
      ['127.0.0.1', 'local'],
      ['jamesgodwin.me', undefined],
      ['www.jamesgodwin.me', undefined]
    ]) {
      vi.resetModules();
      sdk.init.mockClear();
      const stored = new Map();
      vi.stubGlobal('location', { hostname, pathname: '/', search: '' });
      vi.stubGlobal('sessionStorage', { getItem: key => stored.get(key), setItem: (key, value) => stored.set(key, value) });
      await import('./posthog');
      const config = sdk.init.mock.calls[0][1];
      const event = config.before_send({ event: '$pageview', properties: { original: 'retained' } });
      expect(event.properties.original).toBe('retained');
      expect(event.properties.site_runtime).toBe('astro');
      if (run) {
        expect(event.properties.traffic_type, hostname).toBe('verification');
        expect(event.properties.verification_run, hostname).toBe(run);
      } else {
        expect(event.properties).not.toHaveProperty('traffic_type');
        expect(event.properties).not.toHaveProperty('verification_run');
      }
    }
  } finally {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  }
});
