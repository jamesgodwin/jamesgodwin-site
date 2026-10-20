import { vi, test, expect } from 'vitest';
const { exportLog } = vi.hoisted(() => ({ exportLog: vi.fn((records, callback) => callback({ code: 0 })) }));
vi.mock('./posthog', () => ({ verificationProperties: { traffic_type:'verification', verification_run:'unit-test' } }));
vi.mock('@opentelemetry/exporter-logs-otlp-http', () => ({ OTLPLogExporter: class { export = exportLog; shutdown() { return Promise.resolve(); } } }));
test('a browser interaction log reaches the exporter with its verification labels', async () => {
  vi.stubEnv('PUBLIC_POSTHOG_KEY','test-project-token');
  vi.stubEnv('PUBLIC_POSTHOG_HOST','https://example.test');
  const { capturePostHogLog } = await import('./posthog-logs');
  capturePostHogLog('Visitor selected a pressure reflection path',{pressure_path:'work'});
  await new Promise(resolve=>setTimeout(resolve,0));
  expect(exportLog).toHaveBeenCalledOnce();
  const record=exportLog.mock.calls[0][0][0];
  expect(record.body).toBe('Visitor selected a pressure reflection path');
  expect(record.attributes).toMatchObject({pressure_path:'work',traffic_type:'verification',verification_run:'unit-test'});
  vi.unstubAllEnvs();
});
