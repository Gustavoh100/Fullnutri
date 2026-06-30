
import { useEffect } from "react";
import "./style.css";

function Contato() {
  useEffect(() => {
    window.location.href = "https://wa.me/5511999999999?text=Olá%20FullNutri,%20quero%20saber%20mais";
  }, []);

  return (
    <main className="contato-page">
      <section className="contato-message">
        <h1>Redirecionando para o WhatsApp...</h1>
        <p>Se não for redirecionado automaticamente, clique no botão abaixo.</p>
        <a
          className="contato-link"
          href="https://wa.me/5511999999999?text=Olá%20FullNutri,%20quero%20saber%20mais"
          target="_blank"
          rel="noreferrer"
        >
          Abrir WhatsApp
        </a>
      </section>
    </main>
  );
}

export default Contato
