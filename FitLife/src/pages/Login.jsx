import React, { useState } from 'react'
import "./Login.css"
import HeroSection from '../components/HeroSection';

function Login() {

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login com:', { email, password });
  };

  return (
    <div className="login-section">

        <div className='conteine-inglobatudo-lado2-LG' >
            <HeroSection />
        </div>


         <div className='conteine-inglobatudo-lado1-LG'>    
            <div className="login-content">
                <h1 className="logo-title">Impulso Ativo</h1>
                <p className="subtitle">Bem-vindo(a) de volta! Acesse sua conta para continuar.</p>

                <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                <a href="#" className="forgot-password">Esqueceu a senha?</a>

                <button type="submit" className="btn-login">Entrar</button>
                </form>

                <div className="divider">
                <span>ou</span>
                </div>

                <button className="btn-google">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
                Entrar com Google
                </button>

                <p className="signup-link">
                Não tem uma conta? <a href="#">Cadastre-se agora</a>
                </p>
            </div>
        </div> 









      
    </div>
  );
};

export default Login