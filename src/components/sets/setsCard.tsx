import { useEffect, useState } from 'react';
import type { ISetWeek } from '../../types/sets';
import styles from './sets.module.css';

interface SetsCardProps {
    set: ISetWeek;
    updateSetClick: (setId: number, weight?: number, reps?: number) => void;
    deleteSetClick: (setId: number) => void;
}

const SetsCard: React.FC<SetsCardProps> = ({ set, updateSetClick, deleteSetClick }) => {
    const [weight, setWeight] = useState<number>(set.weight || 0);
    const [reps, setReps] = useState<number>(set.reps || 12);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (weight !== set.weight) {
                updateSetClick(set.id, weight, undefined);
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [set.id, set.weight, updateSetClick, weight]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (reps !== set.reps) {
                updateSetClick(set.id, undefined, reps);
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [reps, set.id, set.reps, updateSetClick]);

    return (
        <div className={styles.valueRow}>
            <div className={styles.valueBox}>
                <input
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    min={0}
                    className={styles.valueInput}
                />
                <span className={styles.meas}>кг</span>
            </div>

            <span className={styles.multiply}>×</span>

            <div className={styles.valueBox}>
                <input
                    value={reps}
                    onChange={(e) => setReps(Number(e.target.value))}
                    min={1}
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
