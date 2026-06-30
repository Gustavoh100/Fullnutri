
import { Link } from "react-router-dom";
import italianaImg from "../../assets/italiana.svg";
import "./style.css";

const destaques = [
  {
    title: "Marmita Executiva",
    text: "Deliciosos pratos prontos para o seu almoço ou jantar.",
    price: "R$ 24,90",
    oldPrice: "R$ 34,90",
    badge: "40% OFF",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marmita Verde",
    text: "Frescas e saudáveis saladas para complementar o seu prato.",
    price: "R$ 19,90",
    oldPrice: "R$ 29,90",
    badge: "35% OFF",
    image: "https://i.pinimg.com/736x/ca/79/44/ca79444866f99d32af3828c4785652a3.jpg",
  },
  {
    title: "Marmita Italiana",
    text: "Massas feitas à mão com ingredientes selecionados.",
    price: "R$ 22,90",
    oldPrice: "R$ 32,90",
    badge: "30% OFF",
    image: italianaImg,
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="home-offers" aria-label="Ofertas em destaque">
        <div className="home-offers__track">
          <span className="home-offers__highlight">Frete grátis na primeira compra</span>
          <span>Desconto de 40% em marmitas executivas</span>
          <span>Frete grátis para assinantes semanais</span>
          <span>Promoção especial em saladas power</span>
          <span>Desconto de 30% em marmitas fitness</span>
        </div>
      </section>

      <section className="home-cardapio">
        <div className="home-cardapio__header">
          <p className="home-hero__eyebrow">Cardápio</p>
          <h2>Três pratos em destaque com desconto especial</h2>
          <p>
            Escolha uma refeição leve, nutritiva e com preço irresistível para o seu dia.
          </p>
        </div>

        <div className="home-cardapio__grid">
          {destaques.map((item) => (
            <Link
              key={item.title}
              to="/cardapio"
              state={{ dish: item }}
              className="home-cardapio__card home-cardapio__card--link"
            >
              <img className="home-cardapio__image" src={item.image} alt={item.title} />
              <span className="home-cardapio__badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="home-cardapio__price">
                <strong>{item.price}</strong>
                <span>{item.oldPrice}</span>
              </div>
              <span className="home-cardapio__cta">Ver prato e pagar</span>
            </Link>
          ))}
        </div>

        <Link to="/cardapio" className="home-btn home-btn--primary home-btn--full">
          Ver cardápio completo
        </Link>
      </section>
    </main>
  );
}

export default Home; 
