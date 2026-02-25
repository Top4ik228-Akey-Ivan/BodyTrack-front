import type { ISetWeek } from '../../types/sets';
import styles from './sets.module.css';
import SetsCard from './setsCard';

interface SetsCardListProps {
    addSetClick: () => void;
    updateSetClick: (setId: number, weight?: number, reps?: number) => void;
    deleteSetClick: (setId: number) => void;
    sets: ISetWeek[];
}

const SetsCardsList: React.FC<SetsCardListProps> = ({
    addSetClick,
    updateSetClick,
    deleteSetClick,
    sets,
}) => {
    return (
        <div className={styles.setsCardsList}>
            {sets.map((set) => (
                <SetsCard
                    key={set.id}
                    set={set}
                    updateSetClick={updateSetClick}
                    deleteSetClick={deleteSetClick}
                />
            ))}
            <button
                type="button"
                className={styles.addBtn}
                onClick={() => addSetClick()}
                aria-label="Удалить подход"
            >
                +
            </button>
        </div>
    );
};

export default SetsCardsList;
