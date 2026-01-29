import styles from './workoutsDetailpage.module.css';

import ExercisesList from '../../components/exercises/exercisesList';
import WorkoutDesc from '../../components/workouts/workousDesc';
import { useGetMyWorkoutByIdQuery } from '../../features/workouts/api/workoutsApi';
import { useParams } from 'react-router-dom';

const WorkoutDetailPage: React.FC = () => {
    const { id } = useParams();
    console.log(id);
    const workoutId = Number(id);

    const { data: workout } = useGetMyWorkoutByIdQuery(
        { workoutId },
        { skip: Number.isNaN(workoutId) },
    );

    return (
        <div className={styles.page}>
            {workout && <WorkoutDesc workout={workout} />}
            <ExercisesList />
        </div>
    );
};

export default WorkoutDetailPage;
