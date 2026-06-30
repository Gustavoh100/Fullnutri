
import { Link } from "react-router-dom";
import "./style.css";

const beneficios = [
  "Consulta semanal com nutricionista",
  "Acompanhamento de metas de saúde",
  "Cardápio semanal personalizado",
  "Descontos em marmitas especiais",
  "Suporte por WhatsApp",
];

function Planoassinatura() {
  return (
    <main className="assinatura-page">
      <section className="assinatura-card">
        <div className="assinatura-card__content">
          <p className="assinatura-eyebrow">Plano Semanal</p>
          <h1>Assine agora e tenha mais saúde com acompanhamento completo</h1>
          <p className="assinatura-description">
            O plano semanal da FullNutri oferece suporte especializado para quem quer
            melhorar a alimentação com orientação profissional e benefícios exclusivos.
          </p>

          <div className="assinatura-preco">
            <span className="assinatura-preco__valor">R$ 79,90</span>
            <span className="assinatura-preco__periodo">por semana</span>
          </div>

          <div className="assinatura-actions">
            <Link to="/cadastro" className="assinatura-btn assinatura-btn--primary">
              Assinar agora
            </Link>
            <Link to="/cardapio" className="assinatura-btn assinatura-btn--secondary">
              Ver marmitas
            </Link>
          </div>
        </div>

        <div className="assinatura-beneficios">
          <h2>O que você recebe</h2>
          <ul>
            {beneficios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Planoassinatura;
