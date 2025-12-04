import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log('Dados do cadastro:', formData);
  };

  const handleGoogleSignup = () => {
    // Lógica de cadastro com Google aqui
    console.log('Cadastro com Google');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        <div className="cadastro-hero">
          <h1>Supere seus limites.</h1>
          <p>Um dia de cada vez.</p>
        </div>
      </div>
      
      <div className="cadastro-right">
        <div className="cadastro-form-container">
          <h1 className="cadastro-title">Impulso Ativo</h1>
          <p className="cadastro-subtitle">
            Crie sua conta e comece sua jornada de transformação.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Sua senha"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="Confirme sua senha"
                required
              />
            </div>

            <button type="submit" className="btn-cadastrar">
              Cadastrar
            </button>
          </form>

          <div className="divider">
            <span>ou</span>
          </div>

          <button onClick={handleGoogleSignup} className="btn-google">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853"/>
              <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
            </svg>
            Cadastrar com Google
          </button>

          <p className="login-link">
            Já tem uma conta? <a href="/login">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
