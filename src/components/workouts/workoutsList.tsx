import type { IWorkout } from '../../types/workouts';
import WorkoutCard from './workoutCard';
import styles from './workouts.module.css';

type workoutsListProps = {
    workouts: IWorkout[];
};

const WorkoutsList: React.FC<workoutsListProps> = ({ workouts }) => {
    return (
        <div className={styles.workoutsList}>
            {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
            ))}
        </div>
    );
};

export default WorkoutsList;
