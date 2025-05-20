import React, { useEffect, useState } from 'react';

const ScheduleManager = () => {
  const [schedule, setSchedule] = useState({});
  const [allExercises, setAllExercises] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Monday');

  useEffect(() => {
    fetchExercises();
    fetchSchedule(selectedDay);
  }, []);

  useEffect(() => {
    fetchSchedule(selectedDay);
  }, [selectedDay]);

  const fetchExercises = async () => {
    const res = await fetch('https://exercise-requests.onrender.com/exercises');
    const data = await res.json();
    setAllExercises(data);
  };

  const fetchSchedule = async (day) => {
    const res = await fetch(`https://exercise-requests.onrender.com/schedule?day=${day}`);
    const data = await res.json();
    const exerciseIds = data.map(item => item.exercise_id);
    setSchedule(prev => ({ ...prev, [day]: exerciseIds }));
  };

  const updateSchedule = async (updated) => {
    setSchedule(prev => ({ ...prev, [selectedDay]: updated }));
    await fetch('https://exercise-requests.onrender.com/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day: selectedDay, exercise_ids: updated })
    });
  };

  const toggleExercise = (exerciseId) => {
    const current = schedule[selectedDay] || [];
    const updated = current.includes(exerciseId)
      ? current.filter(id => id !== exerciseId)
      : [...current, exerciseId];
    updateSchedule(updated);
  };

  return (
    <div className="p-6 bg-black text-fluorescent min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Modify Schedule</h2>
      <select className="p-2 mb-4 bg-dark" onChange={e => setSelectedDay(e.target.value)} value={selectedDay}>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
          <option key={day}>{day}</option>
        ))}
      </select>
      <div className="space-y-2">
        {allExercises.map(ex => (
          <label key={ex.exercise_id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={(schedule[selectedDay] || []).includes(ex.exercise_id)}
              onChange={() => toggleExercise(ex.exercise_id)}
            />
            <span>{ex.exercise_name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManager;