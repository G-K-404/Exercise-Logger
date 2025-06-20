import React, { useState } from 'react';

const AddExercise = () => {
  const [form, setForm] = useState({ name: '', description: '', weights: '' });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`https://exercise-requests.onrender.com/add-exercise?name=${encodeURIComponent(form.name)}&weights=${encodeURIComponent(form.weights)}`);
    const data = await response.json();

    if (data.success) {
      console.log('Exercise added:', form.name);
      setForm({ name: '', description: '', weights: '' });
    } else {
      console.error('Failed to add exercise:', data.error);
    }
  } catch (error) {
    console.error('Error adding exercise:', error);
  }
};


  return (
    <div className="p-6 bg-black text-fluorescent min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Add New Exercise</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="bg-dark p-2 w-full rounded"
          placeholder="Exercise name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          className="bg-dark p-2 w-full rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="bg-dark p-2 w-full rounded"
          placeholder="Weights (kg)"
          type="number"
          value={form.weights}
          onChange={(e) => setForm({ ...form, weights: e.target.value })}
        />
        <button className="bg-fluorescent text-black px-4 py-2 rounded">Add Exercise</button>
      </form>
    </div>
  );
};

export default AddExercise;
