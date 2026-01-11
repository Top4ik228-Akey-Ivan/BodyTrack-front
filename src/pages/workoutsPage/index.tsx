import WorkoutCard from '../../components/workoutCard';
import styles from './workoutPage.module.css';

const WorkoutPage: React.FC = () => {
    const fakeArray: number[] = [0, 1, 2, 3];
    return (
        <div className={styles.workoutsList}>
            {fakeArray.map((el) => (
                <WorkoutCard key={el} />
            ))}
        </div>
    );
};

export default WorkoutPage;
