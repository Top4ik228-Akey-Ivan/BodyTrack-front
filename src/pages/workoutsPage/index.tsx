import WorkoutsList from '../../components/workouts/workoutsList';
import { useGetMyWorkoutsQuery } from '../../features/workouts/api/workoutsApi';

const WorkoutPage: React.FC = () => {
    console.log('WorkoutPage rendered');
    const { data: workouts = [], isLoading, error } = useGetMyWorkoutsQuery();

    return workouts && !isLoading && !error && <WorkoutsList workouts={workouts} />;
};

export default WorkoutPage;
