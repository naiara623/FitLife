import React, { useState } from 'react';
import './Perfil.css';

function Perfil() {
      // Dados do usuário
  const [userData] = useState({
    name: 'Naiara Rodrigues',
    email: 'naiara04rodrigues@gmail.com',
    phone: '(48) 99205-9253',
    birthDate: '01/01/1990',
    avatar: 'https://via.placeholder.com/120/8CDA58/FFFFFF?text=NR',
  });

  // Estatísticas de exercícios
  const [stats] = useState({
    exercisesCompleted: 45,
    trainingMinutes: '1-230',
    achievementsUnlocked: 5,
  });

  // Exercícios recentes
  const [recentExercises] = useState([
    {
      id: 1,
      name: 'Caminhada',
      duration: '30 Min',
      calories: '120 Kcal',
      intensity: 'Leve',
      color: '#8CDA58',
    },
    {
      id: 2,
      name: 'Alongamento',
      duration: '15 Min',
      calories: '70 Kcal',
      intensity: 'Leve',
      color: '#7C3C90',
    },
  ]);
  return (
    <div className='perfilUser'>

        <div className="navbar">n</div>

       <main className="main-content">
        <div className="perfil-wrapper">
          <aside className="profile-card">
<div className="profile-header">
              <div className="profile-banner"></div>
              <img src={userData.avatar} className="profile-avatar" />
            </div>

            <div className='form-infor'>
                <h1 className="profile-name">{userData.name}</h1>

            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  value={userData.name}
                  readOnly
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  readOnly
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  value={userData.phone}
                  readOnly
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input
                  type="text"
                  id="birthDate"
                  value={userData.birthDate}
                  readOnly
                  className="form-input"
                />
              </div>
              </form>
         
            </div>
 </aside>
            
            
         
         <div className='exercise1-history'>

     {/* Right Side - Exercise History */}
          <section className="exercise-history">
            <div className="text-perfil">
               <h2 className="section-title">Historico de Exercicios</h2> 
            </div>
            

            {/* Statistics Cards */}
            <div className="container-contes">

                              <div className="stat-card1">
                {/* <div className="stat-icon">
                  <i className="fas fa-check-circle"></i>
                </div> */}
                <div className="stat-content">
                  <div className="stat-number1">{stats.exercisesCompleted}</div>
                  <div className="stat-label1">Exercicios ✓</div>
                </div>
              </div>

              <div className="stat-card2">
               
                <div className="stat-content2">
                  <div className="stat-number2">{stats.trainingMinutes}</div>
                  <div className="stat-labe2">Minutos de Treino</div>
                </div>
              </div> 
              
             <div className="stats-container"><div/>
              <div className="stat-card3">
               
                <div className="stat-content3">
                  <div className="stat-number3">{stats.achievementsUnlocked}</div>
                  <div className="stat-labe3">Conquistas Desbloqueadas</div>
                </div>
              </div>
            </div> 

            </div>

            <div className="exercises-list1">

            <div className="buuu">
                <h3 className="subsection-title">Exercicios Recentes</h3>
            </div>
                 


            <div className="exercises-list">
              {recentExercises.map((exercise) => (
                <div key={exercise.id} className="exercise-item">
                  <div className="exercise-icon" style={{ backgroundColor: exercise.color }}>
                    <i className="fas fa-dumbbell"></i>
                  </div>
                  <div className="exercise-info">
                    <h4 className="exercise-name">{exercise.name}</h4>
                  </div>
                  <div className="exercise-details">
                    <span className="detail">{exercise.duration}</span>
                    <span className="detail">{exercise.calories}</span>
                    <span className="intensity">{exercise.intensity}</span>
                  </div>
                </div>
              ))}
            </div>

            </div>
            


            
           
          </section> 

         </div>

     
        </div>
      </main>
    </div>
  )
}

export default Perfil
