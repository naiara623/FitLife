import React, { useState } from "react";
import "./FormularioIdoso.css";

import user from "../img/user.png";
import setaParaBaixo from "../img/setaParaBaixo.png";
import okay from "../img/okay.png";

const aptidoes = [
  "cardiorrespiratória",
  "força e resistência muscular",
  "flexibilidade",
  "agilidade",
  "equilíbrio",
  "Coordenação Motora",
  "Velocidade",
];

function FormularioPerfil() {
  const [doenca, setDoenca] = useState("Sim");
  const [aptidaoSelecionada, setAptidaoSelecionada] = useState("flexibilidade");
  const [quaisDoencas, setQuaisDoencas] = useState("Artrite/Osteoartrose");
  const [isListExpanded, setIsListExpanded] = useState(true);

  const toggleListExpansion = () => {
    setIsListExpanded((prev) => !prev);
  };

  const handleAptidaoClick = (aptidao) => {
    setAptidaoSelecionada(aptidao);
    setIsListExpanded(false);
  };

  const remainingAptidoes = aptidoes.filter((a) => a !== aptidaoSelecionada);

  return (
    <div className="container-form">
      <div className="cardContainer">
        <div className="profileIcon">
          <img src={user} alt="Ícone de Usuário" className="userIconImage" />
        </div>
        <div className="profileName">Maria Fátima Fernandes</div>

        <div className="questionGroup">
          <label>Possui alguma doença não transmissível?</label>
          <div className="radioGroup">
            {["Não", "Sim"].map((option) => (
              <div
                key={option}
                className="radioOption"
                onClick={() => setDoenca(option)}
              >
                <input
                  type="radio"
                  name="doenca"
                  value={option}
                  checked={doenca === option}
                  onChange={() => setDoenca(option)}
                  className="hiddenInput"
                />

                {option === "Sim" ? (
                  <span
                    className={`${"customCheckbox"} ${
                      doenca === "Sim" ? "customCheckboxChecked" : ""
                    }`}
                  >
                    {doenca === "Sim" && (
                      <img src={okay} alt="Check" className={"checkIcon"} />
                    )}
                  </span>
                ) : (
                  <span
                    className={`${"customRadio"} ${
                      doenca === "Não" ? "customRadioChecked" : ""
                    }`}
                  ></span>
                )}

                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="questionGroup">
          <label>Se sim, quais?</label>
          <input
            type="text"
            className="textInput"
            placeholder="Ex: Artrite/Osteoartrose"
            value={quaisDoencas}
            onChange={(e) => setQuaisDoencas(e.target.value)}
          />
        </div>

        <div className="questionGroup">
          <label>Escolha uma aptidão física que deseja realizar</label>
          <div className="aptitudeList">
            <div
              className={`${"aptitudeOption"} ${"aptitudeDropdown"} ${"selected"}`}
              onClick={toggleListExpansion}
            >
              {aptidaoSelecionada}
              <img
                src={setaParaBaixo}
                alt="Dropdown"
                className={`${"dropdownIcon"} ${
                  !isListExpanded ? "rotatedIcon" : ""
                }`}
              />
            </div>

            {isListExpanded && (
              <>
                {remainingAptidoes.map((aptidao, index) => (
                  <div
                    key={index}
                    className="aptitudeOption"
                    onClick={() => handleAptidaoClick(aptidao)}
                  >
                    {aptidao}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioPerfil;
