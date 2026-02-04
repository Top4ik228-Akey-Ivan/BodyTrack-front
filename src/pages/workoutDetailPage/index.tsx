import styles from './workoutsDetailpage.module.css';

import ExercisesList from '../../components/exercises/exercisesList';
import WorkoutDesc from '../../components/workouts/workousDesc';
import { useGetMyWorkoutByIdQuery } from '../../features/workouts/api/workoutsApi';
import { useParams } from 'react-router-dom';
import AddButton from '../../components/addButton';
import { useState } from 'react';
import Modal from '../../components/modal';
import AddExerciseModal from '../../components/modal/addExerciseModal';

const WorkoutDetailPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { id } = useParams();
    const workoutId = Number(id);

    const { data: workout, isLoading } = useGetMyWorkoutByIdQuery(
        { workoutId },
        { skip: Number.isNaN(workoutId) },
    );

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    if (!workout || isLoading) {
        return <div>Загрузка</div>;
    }

    return (
        <div className={styles.page}>
            {workout && <WorkoutDesc title={workout.title} desc={workout.desc} />}
            <ExercisesList exercises={workout?.exercises} />
            <AddButton text="Добавить упражнение" handleClick={toggleModal} />
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <AddExerciseModal
                    onClose={toggleModal}
                    workoutId={workoutId}
                    exercisesLen={workout?.exercises.length}
                />
            </Modal>
        </div>
    );
};

export default WorkoutDetailPage;
