
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer-site">
      <p className="footer-site__text">FullNutri © 2026</p>
      <div className="footer-site__links">
        <Link to="/Contatos">Contatos</Link>
        <Link to="/Terms">Termos e Privacidade</Link>
      </div>
    </footer>
  );
}

export default Footer
