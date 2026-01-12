import styles from './workouts.module.css';
import authorPhoto from '../../assets/photos/users/rebecca.png';
import type { IWorkout } from '../../types/workouts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';

type workoutCardProps = {
    workout: IWorkout;
};

const WorkoutCard: React.FC<workoutCardProps> = ({ workout }) => {
    const author = useSelector((state: RootState) => state.auth.user?.name);
    const navigate = useNavigate();

    const handleCardCLick = () => {
        navigate(`/workouts/${workout.id}`);
    };

    return (
        <div className={styles.workoutCard} onClick={handleCardCLick}>
            <p className={styles.workoutTitle}>{workout.title}</p>
            <p className={styles.workoutDesc}>{workout.desc || 'Описания нет'}</p>
            <div className={styles.authorBox}>
                <p className={styles.author}>Автор:</p>
                <div className={styles.avatarBox}>
                    <p className={styles.authorName}>{author}</p>
                    <img className={styles.avatar} src={authorPhoto} alt="Автор" />
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;
