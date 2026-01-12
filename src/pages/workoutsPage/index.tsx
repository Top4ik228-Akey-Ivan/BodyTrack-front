import WorkoutsList from '../../components/workouts/workoutsList';
import { useGetMyWorkoutsQuery } from '../../features/workouts/api/workoutsApi';

const WorkoutsPage: React.FC = () => {
    const { data: workouts = [], isLoading, error } = useGetMyWorkoutsQuery();
    if (workouts.length === 0) {
        return <p>Тренировок пока нет</p>;
    }

    if (error) {
        return <p>Ошибка получения тренировок</p>;
    }

    return !isLoading && <WorkoutsList workouts={workouts} />;
};

export default WorkoutsPage;
