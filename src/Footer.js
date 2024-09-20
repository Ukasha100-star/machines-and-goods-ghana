import React from 'react';
import './Footer.css'; // Make sure to create the corresponding CSS file

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h3>About Us</h3>
        <p>Learn more about our company and our mission.</p>
      </div>
      <div className="footer__section">
        <h3>Customer Service</h3>
        <p>Contact us for any queries or support needed.</p>
      </div>
      <div className="footer__section">
        <h3>Follow Us</h3>
        <p>Connect with us on social media.</p>
      </div>
      <div className="footer__section">
        <h3>Subscribe</h3>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
