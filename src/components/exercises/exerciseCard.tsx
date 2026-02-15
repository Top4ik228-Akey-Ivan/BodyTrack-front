import { useNavigate } from 'react-router-dom';
import type { IExerciseInWorkout } from '../../types/exercises';
import styles from './exercises.module.css';

type exerciseCardProps = {
    exercise: IExerciseInWorkout;
};

const ExerciseCard: React.FC<exerciseCardProps> = ({ exercise }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`exercises/${exercise.workoutExerciseId}`);
    };
    return (
        <div className={styles.exerciseCard} onClick={handleCardClick}>
            <p className={styles.exerciseOrder}>{exercise.orderIndex}</p>
            <div className={styles.exerciseInfo}>
                <p className={styles.exerciseTitle}>{exercise.title}</p>
                <div className={styles.exerciseStats}>
                    <p>{exercise.muscleGroup}</p>
                    <p>Подходы 4</p>
                    <p>Вес: 100кг</p>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;
