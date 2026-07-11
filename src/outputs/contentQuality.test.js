import aboutOutput from './about';
import appsOutput from './apps';
import legalOutput from './legal';
import littlePandaOutput from './littlePanda';
import paintingsOutput from './paintings';
import taoismOutput from './taoism';

describe('public content quality', () => {
  test('keeps claims and commitments specific to what the site can support', () => {
    expect(aboutOutput).toContain('Under pressure, strategy problems often begin as state problems.');
    expect(aboutOutput).not.toContain('Most strategy problems are state problems first.');

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
