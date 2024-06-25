import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MyPlan.css';

function MyPlan({ myPlan, removeFromPlan, completeWorkout }) {
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [showCompletePopup, setShowCompletePopup] = useState(false);

  const handleRemoveFromPlan = (id) => {
    removeFromPlan(id);
    setShowRemovePopup(true);
    setTimeout(() => setShowRemovePopup(false), 3000); 
  };

  const handleCompleteWorkout = (id) => {
    completeWorkout(id);
    setShowCompletePopup(true);
    setTimeout(() => setShowCompletePopup(false), 3000); 
  };

  return (
    <div className="my-plan-container">
      <h1>Meu Plano</h1>
      {showRemovePopup && <div className="popup">Treino removido do plano!</div>}
      {showCompletePopup && <div className="popup">Treino concluído!</div>}
      <div className="my-plan-grid">
        {myPlan.length === 0 ? (
          <p>Você ainda não adicionou treinos ao seu plano.</p>
        ) : (
          myPlan.map(workout => (
            <div key={workout.id} className="my-plan-card">
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
              <p>Duração: {workout.duration}</p>
              <div className="my-plan-buttons">
                <button onClick={() => handleRemoveFromPlan(workout.id)} className='RemoveButton'>Remover</button>
                <button onClick={() => handleCompleteWorkout(workout.id)} className='CompleteButton'>Concluir Treino</button>
                <Link to={`/workout/${workout.id}`} className='DetailsButton'>Detalhes do Treino</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyPlan;
