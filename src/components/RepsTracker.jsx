import React, { useState } from 'react';

const RepsTracker = ({ exercise, date }) => {
  const [sets, setSets] = useState({ set_1: '', set_2: '', set_3: '' });
  const [weights, setWeights] = useState({ weight_1: '', weight_2: '', weight_3: '' });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setSets({ ...sets, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleWeightChange = (e) => {
    setWeights({ ...weights, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('https://exercise-requests.onrender.com/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exercise_id: exercise.exercise_id,
          exercise_date: date,
          set_1: Number(sets.set_1),
          set_2: Number(sets.set_2),
          set_3: Number(sets.set_3),
          weight_1: weights.weight_1 ? Number(weights.weight_1) : null,
          weight_2: weights.weight_2 ? Number(weights.weight_2) : null,
          weight_3: weights.weight_3 ? Number(weights.weight_3) : null,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSaved(true);
      } else {
        console.error('Failed to save reps:', data.error);
      }
    } catch (error) {
      console.error('Failed to save reps:', error);
    }
  };

  return (
    <div className="bg-dark border border-fluorescent p-4 rounded">
      <h3 className="text-lg font-bold text-fluorescent mb-2">{exercise.exercise_name}</h3>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block mb-1">Set {i} reps:</label>
              <input
                type="number"
                name={`set_${i}`}
                value={sets[`set_${i}`]}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black text-white border border-fluorescent rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Weight (kg):</label>
              <input
                type="number"
                name={`weight_${i}`}
                value={weights[`weight_${i}`]}
                onChange={handleWeightChange}
                className="w-full px-3 py-2 bg-black text-white border border-fluorescent rounded"
              />
            </div>
          </div>
        ))}
        <button
          onClick={handleSave}
          className="bg-fluorescent text-black px-4 py-2 mt-3 rounded hover:bg-blue-400"
        >
          Save Reps
        </button>
        {saved && <p className="text-green-400 mt-2">Saved!</p>}
      </div>
    </div>
  );
};

export default RepsTracker;
