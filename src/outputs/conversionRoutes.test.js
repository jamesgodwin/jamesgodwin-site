import diagnosticOutput from './diagnostic';
import systemsOutput from './systems';
import uxuiOutput from './uxui';
import workshopsOutput from './workshops';
import pagePresentation from '../pagePresentation';
import siteMetadata from '../siteMetadata';

const { pageMetadata } = siteMetadata;

describe('conversion route outputs', () => {
  test('diagnostic routes to the shared contact path with intent', () => {
    expect(diagnosticOutput).toContain('/contact?about=diagnostic');
    expect(pagePresentation.diagnostic.facts).not.toContain('$350 USD');
    expect(pagePresentation.diagnostic.facts).toContain('One-to-one practice');
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

  test('product page explains the work and leads to a labelled product enquiry', () => {
    expect(pagePresentation.uxui.title).toBe('Get your product working cleanly.');
    expect(pagePresentation.uxui.primaryAction).toEqual({
      label: 'Talk about your product',
      href: '/contact?about=product-clarity'
    });
    expect(uxuiOutput).toContain('When the product is almost there');
    expect(uxuiOutput).toContain('What I help resolve');
    expect(uxuiOutput).toContain('Start with one flow');
    expect(uxuiOutput).toContain('/contact?about=product-clarity');
    expect(uxuiOutput).toContain('/systems');
    expect(uxuiOutput).not.toContain('Available commands');
    expect(uxuiOutput).not.toContain('Regulated Interface Design');
  });

  test('shortens the shared contact hero without adding a response-time promise', () => {
    expect(pagePresentation.contact.title).toBe('Start a conversation.');
    expect(pagePresentation.contact.lede).toBe('Tell me what is stuck, or what you would like to explore.');
    expect(pagePresentation.contact.lede).not.toMatch(/24 hours/);
    expect(pagePresentation['thank-you'].lede).toContain('within 24 hours');
    expect(pageMetadata.uxui.title).toBe('Product Clarity | James Godwin');
    expect(pageMetadata.contact.description).toContain('email or WhatsApp');
  });

  test('connects the product page to an evidence-backed operational example', () => {
    expect(pagePresentation.uxui.secondaryAction).toEqual({
      label: 'See an example',
      href: '#work-example'
    });
    expect(uxuiOutput).toContain('id="work-example"');
    expect(uxuiOutput).toContain('client-reported feedback from June 2026');
    expect(uxuiOutput).toContain('/systems#client-example');
    expect(systemsOutput).toContain('id="client-example"');
    expect(systemsOutput).toContain('supervisors found the app very user-friendly');
    expect(systemsOutput).not.toContain('use it daily');
    expect(systemsOutput).not.toContain('Available commands');
  });
});
