import type { IExercise } from '../../types/exercises';
import styles from './exercises.module.css';

interface AddExerciseCardProps {
    existingExercise: IExercise;
    addExercise: (exerciseId: number, orderIndex: number) => void;
    exercisesLen: number;
}

const AddExerciseCard: React.FC<AddExerciseCardProps> = ({
    existingExercise,
    addExercise,
    exercisesLen,
}) => {
    return (
        <div
            className={styles.addExerciseCard}
            onClick={() => addExercise(existingExercise.id, exercisesLen + 1)}
        >
            <div className={styles.addExerciseHeader}>
                <h2>{existingExercise.title}</h2>
                <p>{existingExercise.muscleGroup}</p>
            </div>
            <p className={styles.addExerciseDesc}>{existingExercise.desc}</p>
        </div>
    );
};

export default AddExerciseCard;
