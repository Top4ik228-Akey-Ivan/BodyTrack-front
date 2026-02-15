import type { ISet } from '../../types/sets';
import styles from './sets.module.css';
import SetsCard from './setsCard';

interface SetsCardListProps {
    addSetClick: (workoutExerciseId: number) => void;
    deleteSetClick: (setId: number) => void;
    workoutExerciseId: number;
    sets: ISet[];
}

const SetsCardsList: React.FC<SetsCardListProps> = ({
    addSetClick,
    workoutExerciseId,
    sets,
    deleteSetClick,
}) => {
    return (
        <div className={styles.setsCardsList}>
            {sets.map((set) => (
                <SetsCard key={set.id} set={set} deleteSetClick={deleteSetClick} />
            ))}
            <button
                type="button"
                className={styles.addBtn}
                onClick={() => addSetClick(workoutExerciseId)}
                aria-label="Удалить подход"
            >
                +
            </button>
        </div>
    );
};

export default SetsCardsList;
