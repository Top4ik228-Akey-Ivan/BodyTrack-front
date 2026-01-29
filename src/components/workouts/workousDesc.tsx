import type { IWorkout } from '../../types/workouts';
import styles from './workouts.module.css';

interface WorkoutDescProps {
    workout: IWorkout;
}

const WorkoutDesc: React.FC<WorkoutDescProps> = ({ workout }) => {
    return (
        <div>
            <div className={styles.workoutHeader}>
                <p className={styles.workoutName}>{workout.title}</p>
                <p className={styles.workoutInfo}>5 упражнений</p>
            </div>
            <p className={styles.workoutInfo}>{workout.desc || 'Описания нет'}</p>
        </div>
    );
};

export default WorkoutDesc;
