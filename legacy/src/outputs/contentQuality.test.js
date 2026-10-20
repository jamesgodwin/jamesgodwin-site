import aboutOutput from './about';
import appsOutput from './apps';
import legalOutput from './legal';
import littlePandaOutput from './littlePanda';
import nowOutput from './now';
import paintingsOutput from './paintings';
import philosophyOutput from './philosophy';
import taoismOutput from './taoism';
import diagnosticOutput from './diagnostic';
import workshopsOutput from './workshops';

describe('public content quality', () => {
  test('keeps claims and commitments specific to what the site can support', () => {
    expect(aboutOutput).toContain('products or workflows are almost there');
    expect(aboutOutput).toContain('href="/uxui"');
    expect(aboutOutput).toContain('href="/systems#client-example"');
    expect(aboutOutput).toContain('id="how-i-work"');
    expect(aboutOutput).toContain('Product and workflow work');
    expect(aboutOutput).toContain('Practice and workshops');
    expect(aboutOutput).toContain('href="/executive-state-diagnostic"');
    expect(aboutOutput).toContain('href="/workshops"');
    expect(aboutOutput).toContain('https://trueessence.space/');
    expect(aboutOutput).toContain('href="/books"');
    expect(aboutOutput).toContain('href="/paintings"');
    expect(aboutOutput).toContain('href="/taoism"');
    expect(aboutOutput).toContain('href="/contact"');
    expect(aboutOutput).not.toContain('Available commands:');
    expect(aboutOutput).not.toContain('strategy problems often begin as state problems');

    expect(nowOutput).toContain('Updated September 7, 2026');
    expect(nowOutput).toContain('href="/uxui"');
    expect(nowOutput).toContain('href="/systems"');
    expect(nowOutput).toContain('TapScribe');
    expect(nowOutput).toContain('private pilot');
    expect(nowOutput).toContain('AI Ching');
    expect(nowOutput).toContain('Grateful For');
    expect(nowOutput).toContain('Tai Chi and dantian breathing practice');
    expect(nowOutput).not.toContain('weekly LinkedIn leadership series');
    expect(nowOutput).not.toContain('Available commands:');

    expect(diagnosticOutput).toContain('A personal practice session');
    expect(diagnosticOutput).not.toContain('$350');
    expect(diagnosticOutput).not.toContain('Available commands:');
    expect(diagnosticOutput).not.toContain('This is not therapy');

    expect(workshopsOutput).toContain('A practice-led workshop');
    expect(workshopsOutput).not.toContain('Regulation changes the state before the decision');
    expect(workshopsOutput).not.toContain('Available commands:');
    expect(workshopsOutput).not.toContain('This is not wellness');

    expect(philosophyOutput).toContain('The practice behind my judgement');
    expect(philosophyOutput).not.toContain('Available commands:');
    expect(philosophyOutput).not.toContain('That is the foundation of all my work');

    expect(appsOutput).not.toContain('calming physiological arousal');
    expect(taoismOutput).not.toContain('Research in emotional intelligence and leadership confirms this');
    expect(littlePandaOutput).not.toContain('planned as nine new Little Panda books');

    expect(paintingsOutput).toContain('My creative outlet');
    expect(paintingsOutput).not.toContain('an awesome painting app');

    expect(legalOutput).toContain('Google Analytics');
    expect(legalOutput).toContain('Kit');
    expect(legalOutput).toContain('External products and services');
    expect(legalOutput).not.toContain('Services page');
    expect(legalOutput).not.toContain('True Essence &mdash; The Sanctuary is offered');
  });
});
