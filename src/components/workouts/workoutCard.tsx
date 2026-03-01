import styles from './workouts.module.css';
import authorPhoto from '../../assets/photos/users/rebecca.png';
import trashIcon from '../../assets/icons/other/trash.svg';
import type { IWorkoutCard } from '../../types/workouts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../modal';
import InfoModal from '../modal/infoModal';
import { useDeleteWorkoutMutation } from '../../features/workouts/api/workoutsApi';

type workoutCardProps = {
    workout: IWorkoutCard;
};

const WorkoutCard: React.FC<workoutCardProps> = ({ workout }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [deleteWorkout] = useDeleteWorkoutMutation();

    const author = useSelector((state: RootState) => state.auth.user?.name);
    const navigate = useNavigate();

    const handleCardCLick = () => {
        navigate(`/workouts/${workout.id}`);
    };

    const handleTrshClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalOpen(true);
        e.stopPropagation();
    };

    const handleDeleteWorkout = async () => {
        try {
            await deleteWorkout(workout.id).unwrap();
        } catch (err) {
            console.error('Произошла ошибка при удалении тренировки', err);
        }
    };

    return (
        <div className={styles.workoutCard} onClick={handleCardCLick}>
            <div className={styles.titleBox}>
                <p className={styles.workoutTitle}>{workout.title}</p>
                <button
                    type="button"
                    className={styles.iconButton}
                    onClick={handleTrshClick}
                    aria-label="Удалить тренировку"
                >
                    <img className={styles.icon} src={trashIcon} alt="" />
                </button>
            </div>
            <p className={styles.workoutDesc}>{workout.desc || 'Описания нет'}</p>
            <div className={styles.authorBox}>
                <p className={styles.author}>Автор:</p>
                <div className={styles.avatarBox}>
                    <p className={styles.authorName}>{author}</p>
                    <img className={styles.avatar} src={authorPhoto} alt="Автор" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <InfoModal
                    title="Вы действительно хотите удалить тренировку ?"
                    closeOption="Назад"
                    acceptOption="Удалить"
                    onClose={() => setIsModalOpen(false)}
                    onAccept={handleDeleteWorkout}
                />
            </Modal>
        </div>
    );
};

export default WorkoutCard;
