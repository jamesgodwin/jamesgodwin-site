import { SeverityNumber } from '@opentelemetry/api-logs';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { LoggerProvider, SimpleLogRecordProcessor } from '@opentelemetry/sdk-logs';

const posthogKey = process.env.REACT_APP_POSTHOG_KEY;
const posthogHost = process.env.REACT_APP_POSTHOG_HOST;

let posthogLogger;

if (posthogKey && posthogHost) {
  const exporter = new OTLPLogExporter({
    url: `${posthogHost.replace(/\/$/, '')}/i/v1/logs`,
    headers: {
      Authorization: `Bearer ${posthogKey}`
    }
  });
  const provider = new LoggerProvider({
    processors: [new SimpleLogRecordProcessor(exporter)]
  });

  posthogLogger = provider.getLogger('jamesgodwin-site.posthog');
}

export function capturePostHogLog(body, attributes) {
  posthogLogger?.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: 'INFO',
    body,
    attributes
  });
}
