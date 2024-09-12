// src/outputs/contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faInstagram, faFacebook, faMastodon, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactOutput = () => (
  <div>
    <p><strong>Personal Contact Information</strong></p>
    <div className="contact-info">
      <a href="mailto:jrsg@hey.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="font-awesome-icon" />
      </a>
      <a href="https://www.linkedin.com/in/jamiegodwin/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon" />
      </a>
      <a href="https://x.com/j_r_s_g" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} className="font-awesome-icon" />
      </a>
      <a href="https://instagram.com/j.r.s.godwin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="font-awesome-icon" />
      </a>
      <a href="https://www.facebook.com/jamiegodwinfb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="font-awesome-icon" />
      </a>
      <a href="https://mastodon.social/@j_r_s_g" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMastodon} className="font-awesome-icon" />
      </a>
    </div>
    <hr></hr>
    <p><strong>AI Ching App</strong></p>
    <div className="contact-info">
      <a href="mailto:mail@aiching.app" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.youtube.com/@AIChingApp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.linkedin.com/company/aichingapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon-small" />
      </a>
      <a href="https://x.com/aichingapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} className="font-awesome-icon-small" />
      </a>
      <a href="https://instagram.com/aichingapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.facebook.com/aichingapp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.tiktok.com/@aichingapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} className="font-awesome-icon-small" />
      </a>
    </div>
    <hr></hr>
    <p><strong>Gratefulfor App</strong></p>
    <div className="contact-info">
      <a href="mailto:mail@gratefulfor.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.youtube.com/@GratefulforApp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.linkedin.com/company/gratefulfor" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon-small" />
      </a>
      <a href="https://x.com/GratefulforApp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} className="font-awesome-icon-small" />
      </a>
      <a href="https://instagram.com/gratefulforapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.facebook.com/gratefulforapp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="font-awesome-icon-small" />
      </a>
      <a href="https://www.tiktok.com/@gratefulforapp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} className="font-awesome-icon-small" />
      </a>
    </div>
  </div>
  
);

export default ContactOutput;