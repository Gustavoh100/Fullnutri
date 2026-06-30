
import "./style.css";

const sections = [
  {
    title: "Privacidade",
    text: "A FullNutri coleta apenas as informações necessárias para oferecer um atendimento melhor, como nome, e-mail e dados de entrega.",
  },
  {
    title: "Uso das informações",
    text: "Os dados fornecidos são usados para criar seu cadastro, processar pedidos, melhorar sua experiência e enviar atualizações importantes.",
  },
  {
    title:"Segurança",
    text: "Tomamos cuidados para proteger suas informações com medidas de segurança adequadas e manter seus dados em ambiente confiável.",
  },
  {
    title: "Seus direitos",
    text: "Você pode entrar em contato conosco a qualquer momento para revisar, corrigir ou solicitar a exclusão de seus dados pessoais.",
  },
];

function Terms() {
  return (
    <main className="terms-page">
      <section className="terms-card">
        <p className="terms-eyebrow">Política de Privacidade</p>
        <h1>Seu cuidado é importante para nós</h1>
        <p className="terms-description">
          Aqui você encontra informações simples e claras sobre como tratamos seus dados.
        </p>

        <div className="terms-list">
          {sections.map((item) => (
            <article key={item.title} className="terms-item">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Terms;
