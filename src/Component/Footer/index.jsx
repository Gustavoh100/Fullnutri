
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer-site">
      <p className="footer-site__text">FullNutri © 2026</p>
      <div className="footer-site__links">
        <a href="https://wa.me/5511999999999?text=Olá%20FullNutri,%20quero%20saber%20mais" target="_blank" rel="noreferrer">Contatos</a>
        <Link to="/Terms">Termos e Privacidade</Link>
      </div>
    </footer>
  );
}

export default Footer
