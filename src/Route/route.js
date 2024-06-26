import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import MyPlan from '../components/MyPlan';
import WorkoutDetails from '../components/WorkoutDetails';
import History from '../components/History';

function AppRoutes() {
  const [myPlan, setMyPlan] = useState(() => {
    const savedMyPlan = localStorage.getItem('myPlan');
    return savedMyPlan ? JSON.parse(savedMyPlan) : [];
  });

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('myPlan', JSON.stringify(myPlan));
  }, [myPlan]);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const addToPlan = (workout) => {
    setMyPlan([...myPlan, workout]);
  };

  const removeFromPlan = (id) => {
    setMyPlan(myPlan.filter(workout => workout.id !== id));
  };

  const completeWorkout = (id) => {
    const completedWorkout = myPlan.find(workout => workout.id === id);
    if (completedWorkout) {
      completedWorkout.completedDate = new Date().toLocaleDateString();
      setHistory([...history, completedWorkout]);
      removeFromPlan(id);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToPlan={addToPlan} />} />
        <Route path="/my-plan" element={<MyPlan myPlan={myPlan} removeFromPlan={removeFromPlan} completeWorkout={completeWorkout} />} />
        <Route path="/workout/:id" element={<WorkoutDetails workouts={myPlan} completeWorkout={completeWorkout} myPlan={myPlan} />} />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
