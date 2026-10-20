import { test, expect } from 'vitest';
import { readJourney, journeyHash } from './state.js';

test('journey links restore a case and step and reject malformed or unknown states', () => {
 expect(readJourney('#/quality/2')).toEqual({caseId:'quality',step:2});
 expect(readJourney(journeyHash({caseId:'local',step:0}))).toEqual({caseId:'local',step:0});
 for(const hash of ['#/%ZZ/2','#/other/1','#/scoring/8','#/scoring/1extra']) {
  expect(readJourney(hash)).toEqual({caseId:'scoring',step:0});
 }
});
