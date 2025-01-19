import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-text">
            <p>Miriam Vassallo - Pedagogista</p>
            <p>
              Partita IVA: <strong>12345678901</strong>
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
              aria-label="Facebook"
            >
              <FaFacebook size={30} color="#3b5998" />
            </a>
            <a
              href="https://www.instagram.com/miriaamvaassallo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} color="#e4405f" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} color="#0077b5" />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
