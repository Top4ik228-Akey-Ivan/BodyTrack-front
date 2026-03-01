import { useNavigate, useParams } from 'react-router-dom';
import type { IExerciseInWeek } from '../../types/exercises';
import styles from './exercises.module.css';

import trashIcon from '../../assets/icons/other/trash.svg';
import Modal from '../modal';
import InfoModal from '../modal/infoModal';
import { useState } from 'react';
import { useDeleteWorkoutExerciseWeekMutation } from '../../features/workoutExercisesWeek/api/workoutExercisesWeekApi';

type exerciseCardProps = {
    exercise: IExerciseInWeek;
};

const ExerciseCard: React.FC<exerciseCardProps> = ({ exercise }) => {
    const { workoutId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [deleteWorkoutExerciseWeek] = useDeleteWorkoutExerciseWeekMutation();

    const setsLen = exercise.sets.length;
    const maxWeight = exercise.sets.reduce((max, set) => Math.max(max, set.weight ?? 0), 0);

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`exercises/${exercise.workoutExerciseWeekId}`);
    };

    const handleTrshClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalOpen(true);
        e.stopPropagation();
    };

    const handleDeleteExercise = async () => {
        try {
            await deleteWorkoutExerciseWeek({
                workoutExerciseWeekId: exercise.workoutExerciseWeekId,
                workoutId: Number(workoutId),
            }).unwrap();
        } catch (err) {
            console.error('Произошла ошибка при удалении упражнения', err);
        }
    };

    return (
        <div className={styles.exerciseCard} onClick={handleCardClick}>
            <p className={styles.exerciseOrder}>{exercise.orderIndex}</p>
            <div className={styles.exerciseInfo}>
                <div className={styles.titleBox}>
                    <p className={styles.exerciseTitle}>{exercise.title}</p>
                    <button
                        type="button"
                        className={styles.iconButton}
                        onClick={handleTrshClick}
                        aria-label="Удалить тренировку"
                    >
                        <img className={styles.icon} src={trashIcon} alt="" />
                    </button>
                </div>
                <div className={styles.exerciseStats}>
                    <p>{exercise.muscleGroup}</p>
                    <p>Подходы: {setsLen}</p>
                    <p>Вес: {maxWeight}кг</p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <InfoModal
                    title="Вы действительно хотите удалить тренировку ?"
                    closeOption="Назад"
                    acceptOption="Удалить"
                    onClose={() => setIsModalOpen(false)}
                    onAccept={handleDeleteExercise}
                />
            </Modal>
        </div>
    );
};

export default ExerciseCard;
