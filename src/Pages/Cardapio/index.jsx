import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import italianaImg from "../../assets/italiana.svg"
import "./style.css"

const cardapios = [
  {
    name: "Marmita Executiva",
    descricao: "Deliciosos pratos prontos para o seu almoço ou jantar.",
    image:"https://i.pinimg.com/736x/64/60/6d/64606d6d1eb8e3f468fd34107788ce99.jpg",
    price: "R$ 24,90",
    oldPrice: "R$ 34,90",
    badge: "40% OFF",
    alimentos: ["Arroz", "Feijão", "Frango grelhado", "Salada colorida"],
  },
  {
    name: "Marmita Verde",
    descricao: "Frescas e saudáveis saladas para complementar o seu prato.",
    image: "https://i.pinimg.com/736x/78/e3/c6/78e3c695504381024904209349125260.jpg",
    price: "R$ 19,90",
    oldPrice: "R$ 29,90",
    badge: "35% OFF",
    alimentos: ["Alface", "Couve", "Tomate", "Grão-de-bico"],
  },
  {
    name: "Marmita Italiana",
    descricao: "Massas feitas à mão com ingredientes selecionados.",
    image: "https://i.pinimg.com/736x/16/7c/ff/167cffc38557062b1d3465bcb018ec7c.jpg",
    price: "R$ 22,90",
    oldPrice: "R$ 32,90",
    badge: "30% OFF",
    alimentos: ["Massa", "Molho de tomate", "Manjericão", "Parmesão"],
  },
  {
    name: "Marmita Gourmet",
    descricao: "Sanduíches elaborados com ingredientes de alta qualidade.",
    image: "https://i.pinimg.com/736x/cd/73/fa/cd73faa3fa8e685d9601e71e4179732a.jpg",
    price: "R$ 18,90",
    oldPrice: "R$ 27,90",
    badge: "32% OFF",
    alimentos: ["Pão artesanal", "Carne suculenta", "Queijo gratinado", "Molho especial"],
  },
  {
    name: "Marmita Doce",
    descricao: "Sobremesas irresistíveis para adoçar o seu dia.",
    image: "https://i.pinimg.com/736x/1e/cc/0e/1ecc0e59ffaac380e97b30215bc181b4.jpg",
    price: "R$ 15,90",
    oldPrice: "R$ 23,90",
    badge: "33% OFF",
    alimentos: ["Creme de baunilha", "Morango", "Blueberry", "Sementes de chia"],
  },
  {
    name: "Marmita Japonesa",
    descricao: "Sushi fresco e saboroso, preparado na hora.",
    image: "https://i.pinimg.com/736x/13/72/eb/1372eb9af73cb62cf46360d37d1c9e62.jpg",
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
  const [paymentMethod, setPaymentMethod] = useState("Cartão")
  const [showEmptyCheckout, setShowEmptyCheckout] = useState(false)

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
          onClick={() => {
            if (selectedDish) {
              setPaymentMethod("Cartão")
              setCheckoutDish(selectedDish)
            } else {
              setShowEmptyCheckout(true)
            }
          }}
        >
          {selectedDish ? "Pagar agora" : "Escolher prato"}
        </button>
      </div>

      {(checkoutDish || showEmptyCheckout) && (
        <div className="cardapio-modal">
          <div className="cardapio-modal__box">
            {showEmptyCheckout ? (
              <>
                <h3>Nenhuma marmita escolhida</h3>
                <p>
                  Você ainda não selecionou nenhuma marmita. Escolha mais pratos no cardápio para pagar todas juntas.
                </p>
                <button
                  className="cardapio-pay-btn"
                  onClick={() => setShowEmptyCheckout(false)}
                >
                  Escolher mais marmitas
                </button>
              </>
            ) : (
              <>
                <h3>Pagamento do prato</h3>
                <p>
                  Você escolheu <strong>{checkoutDish.title || checkoutDish.name}</strong> por <strong>{checkoutDish.price}</strong>.
                </p>
                <div className="cardapio-modal__info">
                  <p className="cardapio-modal__shipping">Frete grátis</p>
                </div>
                <div className="cardapio-payment-methods">
                  <span>Método de pagamento:</span>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cartão"
                      checked={paymentMethod === "Cartão"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Cartão
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Dinheiro"
                      checked={paymentMethod === "Dinheiro"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Dinheiro
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Pix"
                      checked={paymentMethod === "Pix"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Pix
                  </label>
                </div>
                <button
                  className="cardapio-pay-btn"
                  onClick={() => {
                    alert(`Pedido confirmado: ${checkoutDish.title || checkoutDish.name} - ${paymentMethod}`)
                    setCheckoutDish(null)
                  }}
                >
                  Confirmar pagamento
                </button>
              </>
            )}
            <button
              className="cardapio-cancel-btn"
              onClick={() => {
                setCheckoutDish(null)
                setShowEmptyCheckout(false)
              }}
            >
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