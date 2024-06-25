import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkoutCard from './WorkoutCard';
import '../Styles/Home.css';  

function Home({ addToPlan }) {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Treino de Força Total', 
      description: 'Fortalece todo o corpo, aumenta a confiança e melhora a postura.', 
      description2:'Agachamento, levantamento terra, supino, remada.', 
      duration: '30 min' },

    { id: 2, name: 'Yoga do Poder', 
      description: 'Melhora a flexibilidade, reduz o estresse e fortalece a conexão mente-corpo', 
      description2: 'Posturas de equilíbrio, poses de força (como a cadeira e o guerreiro), alongamentos', 
      duration: '45 min' },

    { id: 3, name: 'Treino de Core e Equilíbrio', 
      description: 'Fortalece os músculos abdominais profundos, melhorando a postura e estabilidade geral do corpo.', 
      description2: 'Prancha frontal por 1 minuto, seguida por prancha lateral (30 segundos de cada lado) e repetir por 3 séries.', 
      duration: '50 min' },

    { id: 4, name: 'Treino para Ombros ', 
      description: 'Diga adeus aos ombros estreitos e conquiste ombros largos e definidos com este treino focado!', 
      description2: 'Elevação lateral com halteres: 3 séries de 10-15 repetições', 
      duration: '50 min' },

    { id: 5, name: 'Treino HIIT para Queimar Calorias ', 
      description: 'Queime calorias rapidamente e derreta a gordura com este treino HIIT explosivo!', 
      description2: 'Agachamento com salto: 20 segundos de trabalho, 10 segundos de descanso, 3 séries', 
      duration: '90 min' },

    { id: 6, name: 'Treino para Glúteos ', 
      description: 'Diga adeus ao bumbum flácido e conquiste um bumbum empinado e definido com este treino poderoso!', 
      description2: 'Levantamento terra romeno: 3 séries de 10-15 repetições', 
      duration: '45 min' },

  ]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToPlan = (workout) => {
    addToPlan(workout);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); 
  };

  return (
    <div className="home-container">
      <h1>Treinos Recomendados</h1>
      {showPopup && <div className="popup">Treino adicionado ao plano!</div>}
      <div className="workouts-grid">
        {workouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} onAddToPlan={handleAddToPlan} />
        ))}
      </div>
    </div>
  );
}

export default Home;
