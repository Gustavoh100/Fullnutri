
import "./style.css"

const cardapios = [
  {
    name: "Pratos Executivos",
    descricao: "Deliciosos pratos prontos para o seu almoço ou jantar.",
    image: "",
  },
  {
    name: "Saladas Frescas",
    descricao: "Frescas e saudáveis saladas para complementar o seu prato.",
    image: "",
  },
  {
    name: "Massas Artesanais",
    descricao: "Massas feitas à mão com ingredientes selecionados.",
    image: "",
  },
  {
    name: "Sanduíches Gourmet",
    descricao: "Sanduíches elaborados com ingredientes de alta qualidade.",
    image: "",
  },
  {
    name: "Sobremesas Doces",
    descricao: "Sobremesas irresistíveis para adoçar o seu dia.",
    image: "",
  },
  {
    name: "Sushi Variados",
    descricao: "Sushi fresco e saboroso, preparado na hora.",
    image: "",
  },  
]
function Cardapio() {
  return (
    <section className="cardapio-page">
      <h1>Cardápio</h1>
      <div className="cardapio-grid">
        {cardapios.map((item) => (
          <article
            key={item.name}
            className="cardapio-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="cardapio-overlay" />
            <div className="cardapio-label">
              <span>{item.name}</span>
              <p>{item.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cardapio
