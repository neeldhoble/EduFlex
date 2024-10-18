import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="container">
        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: support@lms.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: 1234 Learning St, Knowledge City</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Eduflex. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}
