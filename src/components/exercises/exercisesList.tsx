import type { IExerciseInWorkout } from '../../types/exercises';
import ExerciseCard from './exerciseCard';

interface ExercisesListProps {
    exercises: IExerciseInWorkout[];
}

const ExercisesList: React.FC<ExercisesListProps> = ({ exercises }) => {
    return (
        <div>
            {exercises.map((ex) => (
                <ExerciseCard key={ex.exerciseId} exercise={ex} />
            ))}
        </div>
    );
};

export default ExercisesList;
