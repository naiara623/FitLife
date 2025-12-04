// PersonalTrainerProfile.jsx - VERSÃO COMPACTA
import React from "react";
import "./PersonalTrainerProfile.css";
import Navbar from "../components/Navbar";

const PerfilTreinador = () => {
  const trainerInfo = {
    name: "Carlos Silva",
    specialization: "Personal Trainer Sênior",
    experience: "8 anos",
    clients: 120,
    rating: 4.9,
    email: "carlos.silva@fitnesspro.com",
    phone: "(11) 98765-4321",
    bio: "Especialista em emagrecimento e hipertrofia. Formado em Educação Física com pós-graduação em Fisiologia do Exercício.",
  };

  const certifications = [
    "CREF 012345-G/SP",
    "Certificação Internacional em Nutrição Esportiva",
    "Certificação em Treinamento Funcional Avançado",
    "Primeiros Socorros - Cruz Vermelha",
  ];

  const specialties = [
    { name: "Emagrecimento", clients: 45 },
    { name: "Hipertrofia", clients: 38 },
    { name: "Condicionamento", clients: 22 },
    { name: "Reabilitação", clients: 15 },
  ];

  const upcomingSessions = [
    { client: "Ana Paula", time: "08:00", type: "Musculação" },
    { client: "Roberto Santos", time: "10:30", type: "Funcional" },
    { client: "Mariana Lima", time: "15:00", type: "Personal" },
    { client: "João Mendes", time: "17:30", type: "Musculação" },
  ];

  return (
    <div className="trainer-profile-container">
      <Navbar />

      <div className="profile-content">
        <div className="left-column">
          {/* Card do Treinador - mais compacto */}
          <div className="trainer-card">
            <div className="trainer-avatar">
              <div className="avatar-placeholder">
                <span>CS</span>
              </div>
              <div className="trainer-status">
                <span className="status-indicator"></span>
                Online
              </div>
            </div>

            <div className="trainer-info">
              <h2>{trainerInfo.name}</h2>
              <p className="specialization">{trainerInfo.specialization}</p>

              {/* Estatísticas em linha compacta */}
              <div className="trainer-stats">
                <div className="stat">
                  <span className="stat-number">{trainerInfo.experience}</span>
                  <span className="stat-label">Exp.</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{trainerInfo.clients}</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{trainerInfo.rating}</span>
                  <span className="stat-label">Aval.</span>
                </div>
              </div>

              {/* Contato compacto */}
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">E-mail:</span>
                  <span className="contact-value">{trainerInfo.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Tel:</span>
                  <span className="contact-value">{trainerInfo.phone}</span>
                </div>
              </div>

              {/* Biografia resumida */}
              <div className="bio-section">
                <h3>Sobre</h3>
                <p>{trainerInfo.bio}</p>
              </div>
            </div>
          </div>

          {/* Certificações compactas */}
          <div className="certifications-section">
            <h3>Certificações</h3>
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right-column">
          {/* Especialidades compactas */}
          <div className="specialties-section">
            <h3>Especialidades</h3>
            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <div className="specialty-card" key={index}>
                  <div className="specialty-name">{specialty.name}</div>
                  <div className="specialty-clients">
                    {specialty.clients} clientes
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Próximas sessões em cards compactos */}
          <div className="upcoming-sessions">
            <h3>Próximas Sessões</h3>
            <div className="sessions-list">
              {upcomingSessions.map((session, index) => (
                <div className="session-item" key={index}>
                  <div className="session-time">{session.time}</div>
                  <div className="session-details">
                    <div className="session-client">{session.client}</div>
                    <div className="session-type">{session.type}</div>
                  </div>
                  <button className="session-action">Iniciar</button>
                </div>
              ))}
            </div>
          </div>

          {/* Métricas em grid compacto */}
          <div className="performance-metrics">
            <h3>Desempenho</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="metric-number">98%</span>
                <span className="metric-label">Satisfação</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">45</span>
                <span className="metric-label">Sessões/sem</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">12</span>
                <span className="metric-label">Novos/mês</span>
              </div>
              <div className="metric-card">
                <span className="metric-number">92%</span>
                <span className="metric-label">Metas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PerfilTreinador;