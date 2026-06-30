import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import italianaImg from "../../assets/italiana.svg"
import "./style.css"

const cardapios = [
  {
    name: "Marmita Executiva",
    descricao: "Deliciosos pratos prontos para o seu almoço ou jantar.",
    image: italianaImg,
    price: "R$ 24,90",
    oldPrice: "R$ 34,90",
    badge: "40% OFF",
    alimentos: ["Arroz", "Feijão", "Frango grelhado", "Salada colorida"],
  },
  {
    name: "Marmita Verde",
    descricao: "Frescas e saudáveis saladas para complementar o seu prato.",
    image: italianaImg,
    price: "R$ 19,90",
    oldPrice: "R$ 29,90",
    badge: "35% OFF",
    alimentos: ["Alface", "Couve", "Tomate", "Grão-de-bico"],
  },
  {
    name: "Marmita Italiana",
    descricao: "Massas feitas à mão com ingredientes selecionados.",
    image: italianaImg,
    price: "R$ 22,90",
    oldPrice: "R$ 32,90",
    badge: "30% OFF",
    alimentos: ["Massa", "Molho de tomate", "Manjericão", "Parmesão"],
  },
  {
    name: "Marmita Gourmet",
    descricao: "Sanduíches elaborados com ingredientes de alta qualidade.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    price: "R$ 18,90",
    oldPrice: "R$ 27,90",
    badge: "32% OFF",
    alimentos: ["Pão artesanal", "Carne suculenta", "Queijo gratinado", "Molho especial"],
  },
  {
    name: "Marmita Doce",
    descricao: "Sobremesas irresistíveis para adoçar o seu dia.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    price: "R$ 15,90",
    oldPrice: "R$ 23,90",
    badge: "33% OFF",
    alimentos: ["Creme de baunilha", "Morango", "Blueberry", "Sementes de chia"],
  },
  {
    name: "Marmita Japonesa",
    descricao: "Sushi fresco e saboroso, preparado na hora.",
    image: italianaImg,
    price: "R$ 26,90",
    oldPrice: "R$ 36,90",
    badge: "27% OFF",
    alimentos: ["Sushi", "Shoyu", "Gengibre", "Wasabi"],
  },
]

function Cardapio() {
  const location = useLocation()
  const selectedDish = location.state?.dish ?? null
  const [checkoutDish, setCheckoutDish] = useState(null)

  return (
    <section className="cardapio-page">
      <div className="cardapio-highlight">
        <div>
          <p className="cardapio-highlight__label">Oferta em destaque</p>
          <h2>{selectedDish ? selectedDish.title : "Escolha seu prato e pague com desconto"}</h2>
          <p>
            {selectedDish
              ? selectedDish.text
              : "Os melhores pratos do cardápio já aparecem aqui com desconto especial para você."}
          </p>
          {selectedDish && (
            <div className="cardapio-highlight__price">
              <strong>{selectedDish.price}</strong>
              <span>{selectedDish.oldPrice}</span>
            </div>
          )}
        </div>
        <button
          className="cardapio-pay-btn"
          onClick={() => setCheckoutDish(selectedDish ?? cardapios[0])}
        >
          {selectedDish ? "Pagar agora" : "Escolher prato"}
        </button>
      </div>

      {checkoutDish && (
        <div className="cardapio-modal">
          <div className="cardapio-modal__box">
            <h3>Pagamento do prato</h3>
            <p>
              Você escolheu <strong>{checkoutDish.title || checkoutDish.name}</strong> por <strong>{checkoutDish.price}</strong>.
            </p>
            <button
              className="cardapio-pay-btn"
              onClick={() => {
                alert(`Pedido confirmado: ${checkoutDish.title || checkoutDish.name}`)
                setCheckoutDish(null)
              }}
            >
              Confirmar pagamento
            </button>
            <button className="cardapio-cancel-btn" onClick={() => setCheckoutDish(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <h1>Marmitas</h1>
      <div className="cardapio-grid">
        {cardapios.map((item) => (
          <Link
            key={item.name}
            to="/cardapio"
            state={{ dish: { title: item.name, text: item.descricao, price: item.price, oldPrice: item.oldPrice, badge: item.badge } }}
            className="cardapio-card-link"
          >
            <article
              className="cardapio-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="cardapio-overlay" />
              <div className="cardapio-label">
                <span>{item.name}</span>
                <p>{item.descricao}</p>
                <div className="cardapio-label__foods">
                  {item.alimentos.map((alimento) => (
                    <span key={alimento}>{alimento}</span>
                  ))}
                </div>
                <div className="cardapio-label__price">
                  <strong>{item.price}</strong>
                  <span>{item.oldPrice}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Cardapio