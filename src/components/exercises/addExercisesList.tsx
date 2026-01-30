import type { IExercise } from '../../types/exercises';
import AddExerciseCard from './addExerciseCard';
import styles from './exercises.module.css';

interface AddExercisesListProps {
    existingExercises: IExercise[];
}

const AddExercisesList: React.FC<AddExercisesListProps> = ({ existingExercises }) => {
    return (
        <div className={styles.addExerciseList}>
            {existingExercises.map((ex) => (
                <AddExerciseCard key={ex.id} existingExercise={ex} />
            ))}
        </div>
    );
};

export default AddExercisesList;
