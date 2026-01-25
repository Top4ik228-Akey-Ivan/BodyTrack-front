import styles from './workouts.module.css';

const WorkoutDesc: React.FC = () => {
    return (
        <div>
            <div className={styles.workoutHeader}>
                <p className={styles.workoutName}>Грудь - трицепс</p>
                <p className={styles.workoutInfo}>5 упражнений</p>
            </div>
            <p className={styles.workoutInfo}>Тренировка по понедельникам, сплит система</p>
        </div>
    );
};

export default WorkoutDesc;
