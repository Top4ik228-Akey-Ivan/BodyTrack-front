import type { IExerciseInWeek } from '../../types/exercises';
import ExerciseCard from './exerciseCard';

interface ExercisesListProps {
    exercises: IExerciseInWeek[];
}

const ExercisesList: React.FC<ExercisesListProps> = ({ exercises }) => {
    return (
        <div>
            {exercises.map((ex) => (
                <ExerciseCard key={ex.workoutExerciseWeekId} exercise={ex} />
            ))}
        </div>
    );
};

export default ExercisesList;
