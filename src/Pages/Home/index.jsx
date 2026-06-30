
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__text">
          <p className="home-hero__eyebrow">FullNutri</p>
          <h1>Comida saudável, prática e cheia de sabor</h1>
          <p>
            A FullNutri é uma empresa dedicada a oferecer refeições balanceadas,
            nutritivas e preparadas com carinho para quem busca mais qualidade de vida.
            Nosso objetivo é transformar a alimentação em uma experiência simples,
            gostosa e acessível para todos.
          </p>
          <div className="home-hero__actions">
            <Link to="/cadastro" className="home-btn home-btn--primary">
              Cadastrar
            </Link>
            <Link to="/monteprato" className="home-btn home-btn--secondary">
              Monte seu prato
            </Link>
          </div>
        </div>

        <div className="home-hero__image">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
            alt="Prato saudável da FullNutri"
          />
        </div>
      </section>
    </main>
  );
}

export default Home 
