import React from 'react';

function SiteFooter() {
  return (
    <footer className="page-footer-nav" aria-label="Site navigation">
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">Work</div>
        <ul>
          <li><a href="/uxui">Product Clarity</a></li>
          <li><a href="/systems">Workflow Systems</a></li>
          <li><a href="/apps">Apps</a></li>
        </ul>
      </div>
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">Practice &amp; Perspective</div>
        <ul>
          <li><a href="/executive-state-diagnostic">Executive State Diagnostic</a></li>
          <li><a href="/workshops">Stillness Under Pressure</a></li>
          <li><a href="https://trueessence.space/" target="_blank" rel="noopener noreferrer">True Essence</a></li>
          <li><a href="/taoism">Taoism &amp; Tai Chi</a></li>
          <li><a href="/philosophy">Philosophy</a></li>
        </ul>
      </div>
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">About &amp; More</div>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/now">Now</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/little-panda">Little Panda Tao Stories</a></li>
          <li><a href="/paintings">Paintings</a></li>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default SiteFooter;
