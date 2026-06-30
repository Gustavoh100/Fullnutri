
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-site__brand">
        <div className="footer-logo">FN</div>
        <p className="footer-site__text">FullNutri © 2026</p>
      </div>
      <div className="footer-site__actions">
        <Link to="/Terms" className="footer-site__privacy">Termos de privacidade</Link>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="footer-contact-btn">Contato</a>
      </div>
    </footer>
  );
}

export default Footer
