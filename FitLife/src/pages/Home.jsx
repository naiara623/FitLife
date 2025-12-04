import React from "react";
import Navbar from "../components/Navbar.jsx";
import Newsletter from "../components/Newsletter.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <Newsletter />
      <div className="container-meio-home">
        <h1>Nossos 3 pilares de Sucesso</h1>
        <div className="container-cards-home">
          <div className="card-meio-home"></div>
          <div className="card-meio-home"></div>
          <div className="card-meio-home"></div>
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
          <div className="card-fim-home"></div>
          <div className="card-fim-home"></div>
          <div className="card-fim-home"></div>
        </div>
      </div>
    </div>
  );
}
