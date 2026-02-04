import styles from './workouts.module.css';

interface WorkoutDescProps {
    title: string;
    desc?: string;
}

const WorkoutDesc: React.FC<WorkoutDescProps> = ({ title, desc }) => {
    return (
        <div>
            <p className={styles.workoutName}>{title}</p>
            <p className={styles.workoutInfo}>{desc || ''}</p>
        </div>
    );
};

export default WorkoutDesc;
