import type { ISet } from '../../types/sets';
import styles from './sets.module.css';

interface SetsCardProps {
    set: ISet;
    deleteSetClick: (setId: number) => void;
}

const SetsCard: React.FC<SetsCardProps> = ({ set, deleteSetClick }) => {
    return (
        <div className={styles.valueRow}>
            <div className={styles.valueBox}>
                <input
                    type="number"
                    min={0}
                    defaultValue={set.weight || 0}
                    className={styles.valueInput}
                />
                <span className={styles.meas}>кг</span>
            </div>

            <span className={styles.multiply}>×</span>

            <div className={styles.valueBox}>
                <input
                    type="number"
                    min={1}
                    defaultValue={set.reps || 1}
                    className={styles.valueInput}
                />
                <span className={styles.meas}>раз</span>
            </div>

            <button
                type="button"
                onClick={() => deleteSetClick(set.id)}
                className={`${styles.removeBtn} ${styles.valueBox}`}
                aria-label="Удалить подход"
            >
                —
            </button>
        </div>
    );
};

export default SetsCard;
