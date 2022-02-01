import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

function Footer() {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <p className="p-text">hello@micael.com</p>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p className="p-text">+1 (123) 456-7890</p>
        </div>
      </div>

      <div className="app__footer-form">
        <div>
          <input className="p-text" type="text" placeholder="Your Name" />
        </div>
        <div>
          <input className="p-text" type="email" placeholder="Your Email" />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
          />
        </div>
        <button type="button" className="p-text">Send Message</button>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);