import {
  getContactIntentFromSearch,
  getContactIntentFromValue,
  getContactIntentLabel,
  getContactPath
} from './contactIntent';

describe('contactIntent helpers', () => {
  test('allowlists recognised enquiry intents', () => {
    expect(getContactIntentFromValue('diagnostic')).toBe('diagnostic');
    expect(getContactIntentFromValue('workflow-system')).toBe('workflow-system');
  });

  test('falls back to general for unknown or missing values', () => {
    expect(getContactIntentFromValue('uxui')).toBe('general');
    expect(getContactIntentFromValue('')).toBe('general');
    expect(getContactIntentFromSearch('?about=anything-else')).toBe('general');
  });

  test('maps an allowlisted query string to a stable contact path and label', () => {
    expect(getContactIntentFromSearch('?about=workshop')).toBe('workshop');
    expect(getContactIntentLabel('workshop')).toBe('Stillness Under Pressure Workshop');
    expect(getContactPath('workshop')).toBe('/contact?about=workshop');
    expect(getContactPath('general')).toBe('/contact');
  });
});
