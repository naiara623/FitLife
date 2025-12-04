
import React, { useState } from 'react';
import './FormularioIdoso.css';

import userIcon from './img/circle-user.png'; 
import angleDownIcon from './img/angle-small-down.png'; 
import checkIcon from './img/check.png'; 

const aptidoes = [
    'cardiorrespiratória',
    'força e resistência muscular',
    'flexibilidade',
    'agilidade',
    'equilíbrio',
    'Coordenação Motora',
    'Velocidade'
];

function FormularioPerfil() {
    const [doenca, setDoenca] = useState('Sim'); 
    const [aptidaoSelecionada, setAptidaoSelecionada] = useState('flexibilidade');
    const [quaisDoencas, setQuaisDoencas] = useState('Artrite/Osteoartrose'); 

    const handleAptidaoClick = (aptidao) => {
        setAptidaoSelecionada(aptidao);
    };

    return (
        <div className='container-form'>
        <div className={styles.cardContainer}>
            
            
            <div className={styles.profileIcon}>
                <img src={userIcon} alt="Ícone de Usuário" className={styles.userIconImage} /> 
            </div>
            <div className={styles.profileName}>
                Maria Fátima Fernandes
            </div>

           
            <div className={styles.questionGroup}>
                <label>Possui alguma doença não transmissível?</label>
                <div className={styles.radioGroup}>
                    {['Não', 'Sim'].map(option => (
                        <div 
                            key={option} 
                            className={styles.radioOption} 
                            onClick={() => setDoenca(option)}
                        >
                            <input 
                                type="radio" 
                                name="doenca" 
                                value={option} 
                                checked={doenca === option} 
                                onChange={() => setDoenca(option)} 
                                className={styles.hiddenInput}
                            />
                            
                            {option === 'Sim' ? (
                                <span className={`${styles.customCheckbox} ${doenca === 'Sim' ? styles.customCheckboxChecked : ''}`}>
                                    {doenca === 'Sim' && <img src={checkIcon} alt="Check" className={styles.checkIcon} />}
                                </span>
                            ) : (
                                <span className={`${styles.customRadio} ${doenca === 'Não' ? styles.customRadioChecked : ''}`}></span>
                            )}
                            
                            {option}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.questionGroup}>
                <label>Se sim, quais?</label>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    placeholder="Ex: Artrite/Osteoartrose" 
                    value={quaisDoencas}
                    onChange={(e) => setQuaisDoencas(e.target.value)}
                />
            </div>

            <div className={styles.questionGroup}>
                <label>Escolha uma aptidão física que deseja realizar</label>
                <div className={styles.aptitudeList}>
                    {aptidoes.map((aptidao, index) => (
                        <div 
                            key={index}
                            className={`${styles.aptitudeOption} ${aptidao === 'cardiorrespiratória' ? styles.aptitudeDropdown : ''} ${aptidao === aptidaoSelecionada ? styles.selected : ''}`}
                            onClick={() => handleAptidaoClick(aptidao)}
                        >
                            {aptidao}
                            {aptidao === 'cardiorrespiratória' && (
                                <img src={angleDownIcon} alt="Dropdown" className={styles.dropdownIcon} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default FormularioPerfil;