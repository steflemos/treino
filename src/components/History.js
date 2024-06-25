import React from 'react';
import '../Styles/History.css';


function History({ history }) {
  return (
    <div className="history-container">
    <h1>Histórico de Treinos</h1>
    <div className="history-grid">
      {history.length === 0 ? (
        <p>Você ainda não concluiu nenhum treino.</p>
      ) : (
        history.map(workout => (
          <div key={workout.id} className="history-card">
            <h2>{workout.name}</h2>
            <p>Duração: {workout.duration}</p>
            <p>Data de Conclusão: {workout.completedDate}</p>
          </div>
        ))
      )}
    </div>
  </div>
  );
}

export default History;
