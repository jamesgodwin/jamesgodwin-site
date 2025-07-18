// src/components/Showcase.js
import React from 'react';

const Showcase = () => {
  return (
    <div className="showcase-section">
      <div className="showcase-card">
        <h2>AIChing</h2>
        <p>A clean, modern gateway to the Taoist I Ching, offering daily reflections and intuitive guidance.</p>
        <a href="https://aiching.app" target="_blank" rel="noopener noreferrer">Visit App</a>
      </div>
      <div className="showcase-card">
        <h2>GratefulFor</h2>
        <p>A global gratitude map and private journaling app that shifts attention toward what matters.</p>
        <a href="https://gratefulfor.com" target="_blank" rel="noopener noreferrer">Visit App</a>
      </div>
    </div>
  );
};

export default Showcase;
