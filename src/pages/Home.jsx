import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleCard from '../components/ScheduleCard';
import ExerciseCard from '../components/ExerciseCard';
import RepsTracker from '../components/RepsTracker';

const API_BASE = 'https://exercise-requests.onrender.com';

const Home = () => {
  const [scheduleToday, setScheduleToday] = useState([]);
  const [allExercises, setAllExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const day = new Date().toLocaleString('default', { weekday: 'long' });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch today's sessions with exercises joined in backend
        const sessionsRes = await fetch(`${API_BASE}/schedule?day=${day}`);
        const sessionsData = await sessionsRes.json();

        // Fetch all exercises
        const exercisesRes = await fetch(`${API_BASE}/exercises`);
        console.log(exercisesRes);
        const exercisesData = await exercisesRes.json();

        setAllExercises(exercisesData);

        // Map sessions data (which already includes exercise_name from join)
        setScheduleToday(sessionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [today]);

  return (
    <div className="flex p-6 gap-6 bg-black min-h-screen text-fluorescent">
      <div className="w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">{day} Exercises</h2>
        {scheduleToday.length > 0 ? (
          <div className="space-y-4">
            {scheduleToday.map((ex) => (
              <div
                key={ex.exercise_id}
                className="flex justify-between items-center bg-dark border border-fluorescent px-4 py-2 rounded"
              >
                <span>{ex.exercise_name} {ex.weights !== undefined && ex.weights !== null ? `| Weight: ${ex.weights} kg` : ''}</span>
                <button
                  className="bg-fluorescent text-black px-2 py-1 rounded hover:bg-blue-400"
                  onClick={() => setSelectedExercise(ex)}
                >
                  Log Reps
                </button>
              </div>
            ))}

            <button className="bg-fluorescent text-black px-2 py-1 rounded hover:bg-blue-300"><Link to="/schedule">Modify Schedule</Link></button>
          </div>
          
        ) : (
          <p className="text-gray-400">No sessions scheduled today.</p>
        )}
        <h3 className="text-2xl font-semibold mt-4">All Exercises</h3>
        {allExercises.map((ex) => (
          <div
            key={ex.exercise_id}
            className="flex justify-between items-center bg-black border border-fluorescent px-4 py-2 rounded"
          >
            <span>{ex.exercise_name} {ex.weights !== undefined && ex.weights !== null ? `| Weight: ${ex.weights} kg` : ''}</span>
            <button
              onClick={() => setSelectedExercise(ex)}
              className="bg-fluorescent text-black px-2 py-1 rounded hover:bg-blue-300"
            >
              Log Reps
            </button>
          </div>
          
        ))}
         <button className="bg-fluorescent text-black px-2 py-1 rounded hover:bg-blue-300"><Link to="/add-exercise">Add Exercise</Link></button>
      </div>
      <div className="w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Reps Tracker</h2>
        {selectedExercise ? (
          <RepsTracker exercise={selectedExercise} date={today} />
        ) : (
          <p className="text-gray-400">Click on an exercise to log reps.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
