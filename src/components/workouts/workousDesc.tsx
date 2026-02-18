import styles from './workouts.module.css';

interface WorkoutDescProps {
    title: string;
    desc?: string;
}

const WorkoutDesc: React.FC<WorkoutDescProps> = ({ title, desc }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p className={styles.workoutInfo}>{desc || ''}</p>
        </div>
    );
};

export default WorkoutDesc;
