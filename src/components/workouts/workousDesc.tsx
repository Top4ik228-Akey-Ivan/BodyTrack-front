import type { IWorkout } from '../../types/workouts';
import styles from './workouts.module.css';

interface WorkoutDescProps {
    workout: IWorkout;
}

const WorkoutDesc: React.FC<WorkoutDescProps> = ({ workout }) => {
    return (
        <div>
            <p className={styles.workoutName}>{workout.title}</p>
            <p className={styles.workoutInfo}>{workout.desc || ''}</p>
        </div>
    );
};

export default WorkoutDesc;
