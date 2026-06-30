import { useState } from 'react';

function FormularioCadastro({ title, subtitle, accent = 'verde' }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.nome || !form.email || !form.senha) {
      setMensagem('Preencha nome, e-mail e senha para continuar.');
      return;
    }

    setMensagem(`Conta criada com sucesso para ${form.nome}!`);
    setForm({ nome: '', email: '', senha: '' });
  };

  return (
    <section className={`cadastro-form-wrapper cadastro-form-wrapper--${accent}`}>
      <div className="cadastro-form-card">
        <div className="cadastro-form-intro">
          <p className="cadastro-form-tag">FullNutri</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <label>
            Nome completo
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={form.nome}
              onChange={handleChange}
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              name="senha"
              placeholder="Crie uma senha"
              value={form.senha}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Cadastrar</button>
        </form>

        {mensagem && <p className="cadastro-form-message">{mensagem}</p>}
      </div>
    </section>
  );
}

export default FormularioCadastro;
