import styles from './workoutPage.module.css';

import { useState } from 'react';
import WorkoutsList from '../../components/workouts/workoutsList';
import {
    useCreateWorkoutMutation,
    useGetMyWorkoutsQuery,
} from '../../features/workouts/api/workoutsApi';
import AddButton from '../../components/addButton';
import Modal from '../../components/modal';
import AddWorkoutModal from '../../components/modal/addWorkoutModal';

const WorkoutsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data: workouts = [], isLoading, error } = useGetMyWorkoutsQuery();
    const [createWorkout] = useCreateWorkoutMutation();

    const addWorkout = async (title: string, desc?: string) => {
        try {
            await createWorkout({ title, desc }).unwrap();
            setIsModalOpen(false);
        } catch (err) {
            console.error('Произошла ошибка при создании тренировки', err);
        }
    };

    if (workouts.length === 0) {
        return <p>Тренировок пока нет</p>;
    }

    if (error) {
        return <p>Ошибка получения тренировок</p>;
    }

    return (
        <div className={styles.workoutPage}>
            {!isLoading && <WorkoutsList workouts={workouts} />}
            <AddButton text="Создать тренировку" handleClick={() => setIsModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddWorkoutModal onClose={() => setIsModalOpen(false)} onAccept={addWorkout} />
            </Modal>
        </div>
    );
};

export default WorkoutsPage;
