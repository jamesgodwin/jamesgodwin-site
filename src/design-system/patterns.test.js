import { test, expect } from 'vitest';
import { patternAttributes } from './patterns';
test('pattern callers cannot override owned appearance or request undefined treatments', () => {
 expect(()=>patternAttributes('action','outline',{style:'color:red'})).toThrow(/appearance/);
 expect(()=>patternAttributes('action','unknown')).toThrow(/Unknown/);
 expect(patternAttributes('action','outline',{'data-contact-cta':'uxui'})).toMatchObject({'data-contact-cta':'uxui','data-ui':'action','data-recipe':'outline'});
});
