// src/outputs/portfolio.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PortfolioOutput = () => (
  <div>
    <p>
      My journey began with a foundation in both <strong>Mechanical Engineering</strong> and <strong>Graphic Design</strong> — two seemingly distinct disciplines that have shaped my unique approach to design and innovation. Engineering has provided me with a robust technical framework to navigate the complexities of technology, while my passion for art and design has deepened my empathy for users, enabling me to create intuitive, human-centered experiences. By merging these two worlds, I've developed a unique perspective that drives the businesses and products I build, ensuring they are both technically sound and deeply connected to the needs and desires of their users.
    </p>

    <p><strong>Portfolio & Work History</strong></p>
    <ul>
    <li>
  Work History - 
  <a href="https://www.linkedin.com/in/jamiegodwin/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon" />
  </a>
</li>
      <li>
        Portfolio - <a href="james-godwin-portfolio.pdf" target="_blank">Download</a>
      </li>
    </ul>

    <hr />
    <p className="commands-text">
      Available commands: - help - about - now - apps - books - portfolio - paintings - uiux - contact - taoism
      <br />
      themes (default, snow, mist, zen, tao, mountain) - clear
    </p>
  </div>
);

export default PortfolioOutput;