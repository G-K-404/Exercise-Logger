const ExerciseCard = ({ exercise, onSelect }) => (
	<div className="bg-dark p-3 border border-fluorescent rounded mb-2">
		<div className="flex justify-between items-center">
			<div>
				<h5 className="font-bold">{exercise.exercise_name || exercise.name}</h5>
				<p className="text-sm text-gray-400">{exercise.description}</p>
				{exercise.weights !== undefined && exercise.weights !== null && (
					<p className="text-sm text-fluorescent">Weight: {exercise.weights} kg</p>
				)}
			</div>
			<button
				onClick={() => onSelect(exercise)}
				className="bg-fluorescent text-black px-2 py-1 rounded"
			>
				Log Reps
			</button>
		</div>
	</div>
);

export default ExerciseCard;