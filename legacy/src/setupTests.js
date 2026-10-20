jest.mock('./posthog', () => ({
  capturePostHogEvent: jest.fn()
}));

jest.mock('./posthog-logs', () => ({
  capturePostHogLog: jest.fn()
}));
