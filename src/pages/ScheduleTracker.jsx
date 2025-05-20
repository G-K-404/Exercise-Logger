import React, { useEffect, useState } from 'react';

const ScheduleManager = () => {
  const [schedule, setSchedule] = useState({});
  const [allExercises, setAllExercises] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Monday');

  useEffect(() => {
    setSchedule({ Monday: [1], Tuesday: [] });
    setAllExercises([
      { id: 1, name: 'Push Ups' },
      { id: 2, name: 'Sit Ups' },
    ]);
  }, []);

  const toggleExercise = (exerciseId) => {
    const current = schedule[selectedDay] || [];
    const updated = current.includes(exerciseId)
      ? current.filter(id => id !== exerciseId)
      : [...current, exerciseId];

    setSchedule({ ...schedule, [selectedDay]: updated });
  };

  return (
    <div className="p-6 bg-black text-fluorescent min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Modify Schedule</h2>
      <select className="p-2 mb-4 bg-dark" onChange={e => setSelectedDay(e.target.value)}>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
          <option key={day}>{day}</option>
        ))}
      </select>
      <div className="space-y-2">
        {allExercises.map(ex => (
          <label key={ex.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={schedule[selectedDay]?.includes(ex.id)}
              onChange={() => toggleExercise(ex.id)}
            />
            <span>{ex.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManager;