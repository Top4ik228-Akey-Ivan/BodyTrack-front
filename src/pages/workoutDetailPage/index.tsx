import styles from './workoutsDetailpage.module.css';
import warningIcon from '../../assets/icons/other/warning.svg';

import ExercisesList from '../../components/exercises/exercisesList';
import WorkoutDesc from '../../components/workouts/workousDesc';
import { useGetMyWorkoutByIdQuery } from '../../features/workouts/api/workoutsApi';
import { useParams } from 'react-router-dom';
import AddButton from '../../components/addButton';
import { useState } from 'react';
import Modal from '../../components/modal';
import AddExerciseModal from '../../components/modal/addExerciseModal';
import EmptyWindow from '../../components/emptyWindow';

const WorkoutDetailPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { workoutId } = useParams();
    const workoutIdNum = Number(workoutId);

    const { data: workout, isLoading } = useGetMyWorkoutByIdQuery(
        { workoutId: workoutIdNum },
        { skip: Number.isNaN(workoutId) },
    );

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    if (!workout || isLoading) {
        return <div>Загрузка</div>;
    }

    const hasExercises = workout.exercises.length > 0;

    return (
        <div className={styles.page}>
            {hasExercises ? (
                <>
                    <WorkoutDesc title={workout.title} desc={workout.desc} />
                    <ExercisesList exercises={workout.exercises} />
                    <AddButton text="Добавить упражнение" handleClick={toggleModal} />
                </>
            ) : (
                <EmptyWindow
                    title="В тренировке пока нет упражнений"
                    desc="Начните добавлять упражнения в тренивроки"
                    iconPath={warningIcon}
                    buttonText="Добавить упражнение"
                    onAction={() => setIsModalOpen(true)}
                />
            )}
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <AddExerciseModal
                    onClose={toggleModal}
                    workoutId={workoutIdNum}
                    exercisesLen={workout.exercises.length}
                />
            </Modal>
        </div>
    );
};

export default WorkoutDetailPage;
