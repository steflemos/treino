import React from 'react';
import '../Styles/WorkoutCard.css';  

function WorkoutCard({ workout, onAddToPlan }) {
  return (
    <div className="workout-card">
      <h2>{workout.name}</h2>
      <p>{workout.description2}</p>
      <p>Duração: {workout.duration}</p>
      <button onClick={() => onAddToPlan(workout)}>Adicionar ao Meu Plano</button>
    </div>
  );
}

export default WorkoutCard;
