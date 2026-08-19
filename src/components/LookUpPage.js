import React, { useEffect, useRef, useState } from 'react';
import '../LookUp.css';

export const APP_STORE_URL = null; // set to the App Store listing URL at release

export const AppStoreBadge = ({ url = APP_STORE_URL }) => {
  if (url) {
    return (
      <a className="lookup-badge" href={url} target="_blank" rel="noopener noreferrer">
        <span className="lookup-badge-eyebrow">Download on the</span>
        <span className="lookup-badge-label">App Store</span>
      </a>
    );
  }

  return (
    <>
      <span className="lookup-badge lookup-badge-disabled" aria-disabled="true">
        <span className="lookup-badge-eyebrow">Download on the</span>
        <span className="lookup-badge-label">App Store</span>
      </span>
      <p className="lookup-badge-note">Coming soon on the App Store.</p>
    </>
  );
};

const LookUpPage = () => {
  const pauseTrackRef = useRef(null);
  const [pauseStage, setPauseStage] = useState(0);

  useEffect(() => {
    const track = pauseTrackRef.current;
    if (!track) return undefined;
    if (typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const sentinels = Array.from(track.querySelectorAll('[data-sentinel]'));
    const update = () => {
      const middle = window.innerHeight / 2;
      setPauseStage(sentinels.filter((s) => s.getBoundingClientRect().top < middle).length);
    };
    const observer = new IntersectionObserver(update, { rootMargin: '-50% 0px -50% 0px' });
    sentinels.forEach((sentinel) => observer.observe(sentinel));
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <main className="lookup-page">
      <header className="lookup-topbar">
        <a className="lookup-wordmark" href="/app/lookup">
          <img src="/lookup/lookup-mark.svg" alt="Look Up" width="28" height="28" />
          Look Up
        </a>
        <nav className="lookup-nav" aria-label="Look Up">
          <a href="#how-it-works">How it works</a>
          <a href="#principles">What it won’t do</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>
      <section className="lookup-hero">
        <div className="lookup-hero-copy">
          <p className="lookup-eyebrow">An app for iPhone</p>
          <h1><span>Look</span> up.</h1>
          <p className="lookup-lede">A quiet pause when an app pulls you under.</p>
          <AppStoreBadge />
        </div>
        <div className="lookup-hero-stage">
          <p className="lookup-stage-note lookup-stage-note-time">After 20 minutes</p>
          <p className="lookup-stage-note lookup-stage-note-choice">You choose.</p>
          <figure className="lookup-phone">
            <img
              src="/lookup/lookup-screen-promise.webp"
              width="473"
              height="1024"
              alt="Look Up promise screen: Look up. A quiet pause when an app pulls you under."
            />
          </figure>
        </div>
      </section>
      <div className="lookup-pause">
        <div className="lookup-pause-track" ref={pauseTrackRef}>
          <div
            className={
              `lookup-pause-panel${pauseStage >= 1 ? ' is-glass' : ''}${pauseStage >= 2 ? ' is-titled' : ''}${pauseStage >= 3 ? ' is-choice' : ''}`
            }
          >
            <div className="lookup-pause-sheen" aria-hidden="true" />
            <p className="lookup-pause-title">Look up.</p>
            <p className="lookup-pause-subtitle">Notice where you are.</p>
            <div className="lookup-pause-actions" aria-hidden="true">
              <span className="lookup-pause-putdown">I’m putting it down</span>
              <span className="lookup-pause-continue">Continue consciously</span>
            </div>
          </div>
          <span className="lookup-pause-sentinel lookup-pause-sentinel-glass" data-sentinel="glass" aria-hidden="true" />
          <span className="lookup-pause-sentinel lookup-pause-sentinel-title" data-sentinel="title" aria-hidden="true" />
          <span className="lookup-pause-sentinel lookup-pause-sentinel-choice" data-sentinel="choice" aria-hidden="true" />
        </div>
      </div>
      <section className="lookup-section lookup-coda">
        <h2>The pause</h2>
        <p className="lookup-coda-lead">After 20 minutes in one app, <span className="lookup-name">Look Up</span> turns the screen near-black. You may catch your reflection.</p>
        <p className="lookup-coda-choice">Put it down, or continue for 10 minutes. You choose.</p>
      </section>
      <section className="lookup-section lookup-how" id="how-it-works">
        <p className="lookup-section-label">Three quiet steps</p>
        <h2>How it works</h2>
        <ol className="lookup-steps">
          <li className="lookup-feature lookup-feature-blue">
            <div className="lookup-step-copy">
              <span className="lookup-step-index" aria-hidden="true">01</span>
              <strong>Choose your apps.</strong>
              <p>Pick the few specific apps and websites that pull you in. You can change them any time.</p>
            </div>
            <div className="lookup-feature-stage">
              <figure className="lookup-phone">
                <img
                  src="/lookup/lookup-screen-picker.webp"
                  width="473"
                  height="1024"
                  alt="Look Up app picker: Which apps pull you in?"
                />
              </figure>
            </div>
          </li>
          <li className="lookup-feature lookup-feature-violet">
            <div className="lookup-step-copy">
              <span className="lookup-step-index" aria-hidden="true">02</span>
              <strong>Connect Screen Time.</strong>
              <p><span className="lookup-name">Look Up</span> is built on Apple’s Screen Time frameworks. Your choices never leave your phone — no account, no servers, no tracking.</p>
            </div>
            <div className="lookup-feature-stage">
              <figure className="lookup-phone">
                <img
                  src="/lookup/lookup-screen-screentime.webp"
                  width="473"
                  height="1024"
                  alt="Look Up asking to connect to Screen Time."
                />
              </figure>
            </div>
          </li>
          <li className="lookup-feature lookup-feature-cream">
            <div className="lookup-step-copy">
              <span className="lookup-step-index" aria-hidden="true">03</span>
              <strong>The pause finds you.</strong>
              <p>There is nothing to check and nothing to maintain. When the moment comes, the pause appears.</p>
            </div>
            <div className="lookup-feature-stage">
              <figure className="lookup-phone">
                <img
                  src="/lookup/lookup-screen-found.webp"
                  width="473"
                  height="1024"
                  alt="Look Up: Look up. Notice where you are."
                />
              </figure>
            </div>
          </li>
        </ol>
      </section>
      <section className="lookup-section lookup-wont" id="principles">
        <div className="lookup-wont-copy">
          <p className="lookup-section-label">Made to interrupt, not judge</p>
          <h2>What it won’t do</h2>
          <p className="lookup-refusal-note"><span className="lookup-name">Look Up</span> interrupts; it never nags. The pause is always voluntary — you can continue any time.</p>
        </div>
        <ul className="lookup-refusals">
          <li>No accounts.</li>
          <li>No advertising.</li>
          <li>No analytics.</li>
          <li>No streaks.</li>
          <li>No coaching.</li>
          <li>No shame.</li>
        </ul>
      </section>
      <section className="lookup-section lookup-pricing" id="pricing">
        <div className="lookup-price-copy">
          <p className="lookup-section-label">One price. No subscription.</p>
          <h2>Try it for seven days.</h2>
          <p className="lookup-price-trial">Free for seven days.</p>
          <p className="lookup-price-once">Once.</p>
          <p className="lookup-price-detail">Lifetime access, with Family Sharing.</p>
          <AppStoreBadge />
        </div>
        <div className="lookup-price-stage">
          <p className="lookup-price-label">Pricing</p>
          <p className="lookup-price-figure">$19.99</p>
          <img src="/lookup/lookup-mark.svg" alt="" width="48" height="48" />
        </div>
      </section>
      <footer className="lookup-footer">
        <hr className="lookup-rule" />
        <p><span className="lookup-name">Look Up</span> is made by James Godwin — part of the work at <a href="/">jamesgodwin.me</a>.</p>
        <p>Built on Apple&rsquo;s Screen Time frameworks. Your app choices never leave your device.</p>
        <p><a href="/contact">Contact</a></p>
      </footer>
    </main>
  );
};

export default LookUpPage;
