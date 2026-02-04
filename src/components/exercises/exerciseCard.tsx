import type { IExerciseInWorkout } from '../../types/exercises';
import styles from './exercises.module.css';

type exerciseCardProps = {
    exercise: IExerciseInWorkout;
};

const ExerciseCard: React.FC<exerciseCardProps> = ({ exercise }) => {
    return (
        <div className={styles.exerciseCard}>
            <p className={styles.exerciseOrder}>{exercise.orderIndex}</p>
            <div className={styles.exerciseInfo}>
                <p className={styles.exerciseTitle}>{exercise.title}</p>
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
