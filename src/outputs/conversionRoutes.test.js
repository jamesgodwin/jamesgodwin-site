import diagnosticOutput from './diagnostic';
import systemsOutput from './systems';
import workshopsOutput from './workshops';
import pagePresentation from '../pagePresentation';

describe('conversion route outputs', () => {
  test('diagnostic routes to the shared contact path with intent', () => {
    expect(diagnosticOutput).toContain('/contact?about=diagnostic');
    expect(pagePresentation.diagnostic.facts).toContain('$350 USD');
    expect(diagnosticOutput).toContain('Request a diagnostic through the contact page');
    expect(diagnosticOutput).not.toContain('contact form');
    expect(diagnosticOutput).not.toContain('form-name" value="executive-state-diagnostic"');
  });

  test('workshops routes to the shared contact path with workshop intent', () => {
    expect(workshopsOutput).toContain('/contact?about=workshop');
    expect(workshopsOutput).not.toContain('/workshop-enquiry');
  });

  test('systems routes workflow enquiries through the shared contact path', () => {
    expect(systemsOutput).not.toContain('https://wa.me/27686038834');
    expect(systemsOutput).toContain('/contact?about=workflow-system');
    expect(pagePresentation.systems.facts).toContain('R7,500 ZAR audit');
    expect(systemsOutput).toContain('R7,500 ZAR');
    expect(systemsOutput).toContain('R1,500 ZAR per month');
  });
});
