import { test, expect } from 'vitest';
import fs from 'node:fs';
const tokenSource = fs.readFileSync(new URL('../styles/tokens.css', import.meta.url),'utf8');
import { tokenCatalogue } from './catalogue';
test('catalogue resolves light/dark semantic aliases from real token definitions', () => {
 const {tokens,typeRoles}=tokenCatalogue(tokenSource);
 const text=tokens.find(t=>t.name==='--color-text');
 expect(text.light.toLowerCase()).toBe('#000000');
 expect(text.dark.toLowerCase()).toBe('#f5f5f5');
 expect(typeRoles).toContain('body');
 expect(()=>tokenCatalogue(':root { --a: var(--b); --b: var(--a); }')).toThrow(/Circular/);
});
