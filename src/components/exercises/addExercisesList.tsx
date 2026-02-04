import type { IExercise } from '../../types/exercises';
import AddExerciseCard from './addExerciseCard';
import styles from './exercises.module.css';

interface AddExercisesListProps {
    existingExercises: IExercise[];
    addExercise: (exerciseId: number, orderIndex: number) => void;
    exercisesLen: number;
}

const AddExercisesList: React.FC<AddExercisesListProps> = ({
    existingExercises,
    addExercise,
    exercisesLen,
}) => {
    return (
        <div className={styles.addExerciseList}>
            {existingExercises.map((ex) => (
                <AddExerciseCard
                    key={ex.id}
                    existingExercise={ex}
                    exercisesLen={exercisesLen}
                    addExercise={addExercise}
                />
            ))}
        </div>
    );
};

export default AddExercisesList;
