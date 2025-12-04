import React from "react";
import Navbar from "../components/Navbar.jsx";
import Newsletter from "../components/Newsletter.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="Navbar">
        <Navbar />
      </div>
      
      <Newsletter />
      <div className="container-meio-home">
        <h1>Nossos 3 pilares de Sucesso</h1>
        <div className="container-cards-home">
          <div className="card-meio-home">
            <div className="title-sucesso">
              <h3 className="icone">💪</h3>
            </div>
            <div className="texto"> <h3 className="buio-2">Força e Resistência</h3></div>
            <div className="explica">Exercícios de fortalecimento muscular adaptados para idosos.</div>
          </div>
          <div className="card-meio-home">
            <div className="title-sucesso">
              <h3 className="icone">🧘</h3>
            </div>
            <div className="texto">
              <h3 className="buio">Flexibilidade e Mobilidade</h3>
            </div>
            <div className="explica">
              Alongamentos e exercícios de mobilidade para manter a flexibilidade articular ereduzir rigidez muscular.
            </div>

          </div>
          <div className="card-meio-home">
            <div className="title-sucesso">
              <h3 className="icone">❤️</h3>
            </div>
            <div className="texto"><h3 className="buio">Saúde Cardiovascular</h3></div>
            <div className="explica">Atividades aeróbicas de baixo impacto que fortalecem o coração, melhoram a circulação e aumentam a resistência cardiovascular.</div>

          </div>
        </div>
      </div>

      <div className="container-dados-home">
        <h1>resultados que inspiram</h1>
        <div className="dados-home">
          <div className="card-dados-meio-home">
            <h1 className="titles-dados">15.000+</h1>
            <p>Usuarios Ativos</p>
          </div>
          <div className="card-dados-meio-home">
            <h1>2M+</h1>
            <p>Treinos Concluídos</p>
          </div>
          <div className="card-dados-meio-home">
            <h1>95%</h1>
            <p>Satisfação do usuário</p>
          </div>
        </div>
      </div>

      <div className="container-fim-home">
        <h1>O que os nosso usuarios dizem</h1>
        <div className="container-cards-fim-home">
          <div className="card-fim-home">
            <div className="divsegunda">
               <div className="comentario">
                <p className="comentario2">"O Impulso Ativo mudou minha vida! Consegui recuperar minha força e agora consigo fazer coisas que pensava que nunca mais faria."</p>                
              </div>
              <div className="nomeEstrelas">
                <h3 className="nomeida">-Maria S. 68 anos</h3>
              </div>
            </div>
          </div>
          <div className="card-fim-home">
            <div className="divsegunda">
              <div className="comentario">
                <p className="comentario2">"Excelente app! Os exercícios são seguros e bem explicados. Recomendo para todos os meus amigos idosos."</p>                
              </div>
              <div className="nomeEstrelas">
                <h3 className="nomeida">-João S. 72 anos</h3>
              </div>
              
            </div>
          </div>
          <div className="card-fim-home">
            <div className="divsegunda">
               <div className="comentario">
                <p className="comentario2">"Finalmente encontrei um app que respeita as minhas limitações. Muito bom mesmo!."</p>                
              </div>
              <div className="nomeEstrelas">
                <h3 className="nomeida1">-Fernanda C. 65 anos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
