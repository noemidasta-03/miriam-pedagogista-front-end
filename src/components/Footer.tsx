import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-text">
            <p>Miriam Vassallo - Pedagogista</p>
            <p>
              Partita IVA: <strong>numero partita IVA</strong>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <button className="contact-button">Contattami</button>

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
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
