import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const opcoesDeAlimentos = [
  { id: 1, nome: "Arroz", preco: 3.5, peso: 150, emoji: "🍚", imagem: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80" },
  { id: 2, nome: "Feijão", preco: 2.8, peso: 120, emoji: "🫘", imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" },
  { id: 3, nome: "Frango grelhado", preco: 6.5, peso: 180, emoji: "🍗", imagem: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80" },
  { id: 4, nome: "Salada", preco: 2.0, peso: 80, emoji: "🥗", imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
  { id: 5, nome: "Batata assada", preco: 3.2, peso: 140, emoji: "🥔", imagem: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80" },
  { id: 6, nome: "Abacaxi", preco: 2.5, peso: 100, emoji: "🍍", imagem: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
];

function Monteprato() {
  const [prato, setPrato] = useState([]);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  const adicionarItem = (item) => {
    setPrato([...prato, item]);
    setPedidoConfirmado(false);
  };

  const alterarQuantidade = (id, delta) => {
    setPrato((itensAtuais) => {
      const novoPrato = [...itensAtuais];
      const index = novoPrato.findIndex((item) => item.id === id);

      if (index === -1) return itensAtuais;

      const item = novoPrato[index];
      const novaQuantidade = item.quantidade + delta;

      if (novaQuantidade <= 0) {
        novoPrato.splice(index, 1);
      } else {
        novoPrato[index] = { ...item, quantidade: novaQuantidade };
      }

      return novoPrato;
    });
    setPedidoConfirmado(false);
  };

  const limparPrato = () => {
    setPrato([]);
    setPedidoConfirmado(false);
  };

  const pagarPedido = () => {
    if (prato.length === 0) return;
    setPedidoConfirmado(true);
  };

  const totalPreco = prato.reduce((soma, item) => soma + item.preco * item.quantidade, 0).toFixed(2);
  const totalPeso = prato.reduce((soma, item) => soma + item.peso * item.quantidade, 0);

  return (
    <main className="monteprato-page">
      <section className="monteprato-hero">
        <p className="monteprato-hero__eyebrow">FullNutri</p>
        <h1>Monte seu prato</h1>
        <p>Escolha os alimentos que você quer no seu prato e veja o preço e o peso total na hora.</p>
        <Link to="/" className="monteprato-hero__link">
          Voltar para a home
        </Link>
      </section>

      <section className="monteprato-content">
        <div className="opcoes-lista">
          {opcoesDeAlimentos.map((item) => (
            <article key={item.id} className="opcao-card">
              <img src={item.imagem} alt={item.nome} className="opcao-card__imagem" />
              <div className="opcao-card__conteudo">
                <h3>{item.emoji} {item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)} • {item.peso}g</p>
              </div>
              <button type="button" onClick={() => adicionarItem({ ...item, quantidade: 1 })}>
                Adicionar
              </button>
            </article>
          ))}
        </div>

        <aside className="resumo-prato">
          <div className="resumo-header">
            <h2>Seu prato</h2>
            <button type="button" className="resumo-limpar" onClick={limparPrato}>
              Zerar prato
            </button>
          </div>

          {prato.length === 0 ? (
            <p className="resumo-vazio">Nenhum alimento adicionado ainda.</p>
          ) : (
            <ul>
              {prato.map((item, index) => (
                <li key={`${item.id}-${index}`} className="resumo-item">
                  <span>
                    {item.nome} - R$ {(item.preco * item.quantidade).toFixed(2)} • {item.peso * item.quantidade}g
                  </span>
                  <div className="resumo-item__acoes">
                    <button type="button" onClick={() => alterarQuantidade(item.id, -1)}>
                      −
                    </button>
                    <span>{item.quantidade}</span>
                    <button type="button" onClick={() => alterarQuantidade(item.id, 1)}>
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="resumo-total">
            <p><strong>Peso total:</strong> {totalPeso}g</p>
            <p><strong>Preço total:</strong> R$ {totalPreco}</p>
            {prato.length > 0 && (
              <>
                <button type="button" className="resumo-pagar" onClick={pagarPedido}>
                  Pagar
                </button>
                {pedidoConfirmado && <p className="resumo-pagamento">Pedido pronto para pagamento!</p>}
              </>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Monteprato;
