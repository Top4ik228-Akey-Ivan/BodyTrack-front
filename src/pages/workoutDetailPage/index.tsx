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

    const { data: workout } = useGetMyWorkoutByIdQuery(
        { workoutId },
        { skip: Number.isNaN(workoutId) },
    );

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className={styles.page}>
            {workout && <WorkoutDesc workout={workout} />}
            <ExercisesList />
            <AddButton text="Добавить упражнение" handleClick={toggleModal} />
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <AddExerciseModal onClose={toggleModal} />
            </Modal>
        </div>
    );
};

export default WorkoutDetailPage;
