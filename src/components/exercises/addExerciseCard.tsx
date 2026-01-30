import type { IExercise } from '../../types/exercises';
import styles from './exercises.module.css';

interface AddExerciseCardProps {
    existingExercise: IExercise;
}

const AddExerciseCard: React.FC<AddExerciseCardProps> = ({ existingExercise }) => {
    return (
        <div className={styles.addExerciseCard}>
            <div className={styles.addExerciseHeader}>
                <h2>{existingExercise.title}</h2>
                <p>{existingExercise.muscleGroup}</p>
            </div>
            <p className={styles.addExerciseDesc}>{existingExercise.desc}</p>
        </div>
    );
};

export default AddExerciseCard;
