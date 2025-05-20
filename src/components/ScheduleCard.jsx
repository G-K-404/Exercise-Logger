import React from 'react';

const ScheduleCard = ({ day, exercises, onSelect }) => {
return (
<div className="bg-dark border border-fluorescent p-4 rounded space-y-2">
<h4 className="font-semibold text-xl text-fluorescent mb-3">{day}</h4>
{exercises.map((ex) => (
<div
key={ex.id || ex.name}
className="flex justify-between items-center bg-black border border-fluorescent px-3 py-2 rounded"
>
<span className="text-fluorescent font-medium">{ex.name}</span>
<button
onClick={() => onSelect(ex)}
className="bg-fluorescent text-black px-2 py-1 rounded hover:bg-blue-300"
>
Log Reps
</button>
</div>
))}
</div>
);
};

export default ScheduleCard;