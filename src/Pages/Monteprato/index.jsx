import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const opcoesDeAlimentos = [
  { id: 1, nome: "Arroz", preco: 3.5, peso: 150, imagem: "https://i.pinimg.com/1200x/d1/ad/87/d1ad870e03222a1628a9ce7edb07c058.jpg" },
  { id: 2, nome: "Feijão", preco: 2.8, peso: 120, imagem: "https://i.pinimg.com/736x/22/56/97/225697409ae7dbf13173a534d5fd7635.jpg" },
  { id: 3, nome: "Frango grelhado", preco: 6.5, peso: 180, imagem: "https://i.pinimg.com/1200x/0e/58/2d/0e582d7c89407ba6b6d6a50528ac38ef.jpg" },
  { id: 4, nome: "Salada", preco: 2.0, peso: 80, imagem: "https://i.pinimg.com/736x/af/0c/d8/af0cd8296b7538581beca458c372b3a3.jpg" },
  { id: 5, nome: "Batata assada", preco: 3.2, peso: 140, imagem: "https://i.pinimg.com/1200x/4a/61/1c/4a611c49bd9c0f7b716b4a918c9136af.jpg" },
  { id: 6, nome: "Abacaxi", preco: 2.5, peso: 100, imagem: "https://i.pinimg.com/1200x/c0/fe/71/c0fe71f79672c2a31c41bf7ebdce12cc.jpg" },
];

function Monteprato() {
  const [prato, setPrato] = useState([]);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  const adicionarItem = (item) => {
    setPrato((itensAtuais) => {
      const index = itensAtuais.findIndex((entrada) => entrada.id === item.id);
      if (index === -1) {
        return [...itensAtuais, { ...item, quantidade: 1 }];
      }
      const novoPrato = [...itensAtuais];
      novoPrato[index] = {
        ...novoPrato[index],
        quantidade: novoPrato[index].quantidade + 1,
      };
      return novoPrato;
    });
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
                <h3>{item.nome}</h3>
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
