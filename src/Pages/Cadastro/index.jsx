
import { Link } from 'react-router-dom';
import './style.css';
import FormularioCadastro from './FormularioCadastro';

function Cadastro() {
  return (
    <main className="cadastro-page">
      <section className="cadastro-hero">
        <p className="cadastro-hero__eyebrow">FullNutri</p>
        <h1>Cadastre-se e comece sua jornada saudável</h1>
        <p>
          Crie sua conta com nome, e-mail e senha para acessar cardápios, planos e
          conteúdos especiais.
        </p>
        <Link to="/" className="cadastro-hero__link">
          Voltar para a home
        </Link>
      </section>

      <section className="cadastro-single">
        <FormularioCadastro
          title="Cadastro de usuário"
          subtitle="Preencha os campos abaixo para criar sua conta."
          accent="verde"
        />
      </section>
    </main>
  );
}

export default Cadastro;
