import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/WorkoutDetails.css';


function WorkoutDetails({ workouts, myPlan, completeWorkout }) {
  const { id } = useParams();
  const workout = workouts.find(workout => workout.id === parseInt(id));
  const isInPlan = myPlan.some(workout => workout.id === parseInt(id));

  if (!workout) {
    return <p>Treino não encontrado!</p>;
  }
  return (
    <div className="workout-details-container">
      <div className="workout-details-card">
        <h1>{workout.name}</h1>
        <p>{workout.description}</p>
        <p>{workout.description2}</p>
        <p>Duração: {workout.duration}</p>
        {workout.completedDate ? (
          <p>Treino concluído em: {workout.completedDate}</p>
        ) : isInPlan ? (
          <button onClick={() => completeWorkout(workout.id)}>Concluir Treino</button>
        ) : (
          <p>Adicione o treino ao seu plano para poder concluí-lo.</p>
        )}
      </div>
    </div>
  );
}

export default WorkoutDetails;
