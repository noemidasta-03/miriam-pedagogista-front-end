import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 MyCompany. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/miriamvassallo8/photos_by?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/miriaamvaassallo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a href="mailto:contact@mycompany.com">Contact Us</a>
            </li>
            <li>
              <a href="/faq" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
          </ul>
          <div className="footer-contact">
            <p>
              Contact us:{" "}
              <a href="miriamvassallo98@gmail.com">
                miriamvassallo98@gmail.com
              </a>
            </p>
            <p>Via venero,18,Monreale(PA)</p>
          </div>
        </div>
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
