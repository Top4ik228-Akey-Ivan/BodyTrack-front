import styles from './workoutsDetailpage.module.css';

import ExercisesList from '../../components/exercises/exercisesList';
import WorkoutDesc from '../../components/workouts/workousDesc';

const WorkoutDetailPage: React.FC = () => {
    return (
        <div className={styles.page}>
            <WorkoutDesc />
            <ExercisesList />
        </div>
    );
};

export default WorkoutDetailPage;
