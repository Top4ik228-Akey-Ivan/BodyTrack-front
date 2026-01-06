import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const WorkoutPage: React.FC = () => {
    const authState = useSelector((state: RootState) => state.auth);
    console.log(authState);
    return <div>Workouts</div>;
};

export default WorkoutPage;
