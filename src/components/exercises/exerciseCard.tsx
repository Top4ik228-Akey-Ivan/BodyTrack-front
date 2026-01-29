import styles from './exercises.module.css';

type exerciseCardProps = {
    num: number;
};

const ExerciseCard: React.FC<exerciseCardProps> = ({ num }) => {
    return (
        <div className={styles.exerciseCard}>
            <p className={styles.exerciseOrder}>{num}</p>
            <div className={styles.exerciseInfo}>
                <p className={styles.exerciseTitle}>Жим от груди</p>
                <div className={styles.exerciseStats}>
                    <p>Подходы: 4</p>
                    <p>Повторения: 8</p>
                    <p>Вес: 100кг</p>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;
