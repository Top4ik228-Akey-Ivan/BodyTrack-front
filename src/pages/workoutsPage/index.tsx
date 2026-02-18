import styles from './workoutPage.module.css';

import warningIcon from '../../assets/icons/other/warning.svg';

import { useState } from 'react';
import WorkoutsList from '../../components/workouts/workoutsList';
import {
    useCreateWorkoutMutation,
    useGetMyWorkoutsQuery,
} from '../../features/workouts/api/workoutsApi';
import AddButton from '../../components/addButton';
import Modal from '../../components/modal';
import AddWorkoutModal from '../../components/modal/addWorkoutModal';
import EmptyWindow from '../../components/emptyWindow';

const WorkoutsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data: workouts = [], isLoading, error } = useGetMyWorkoutsQuery();
    const [createWorkout] = useCreateWorkoutMutation();

    const hasWorkouts = workouts.length > 0;

    const addWorkout = async (title: string, desc?: string) => {
        try {
            await createWorkout({ title, desc }).unwrap();
            setIsModalOpen(false);
        } catch (err) {
            console.error('Произошла ошибка при создании тренировки', err);
        }
    };

    if (isLoading || error) {
        return <div>будет скелетон</div>;
    }

    return (
        <div className={styles.workoutPage}>
            {hasWorkouts ? (
                <>
                    <WorkoutsList workouts={workouts} />
                    <AddButton text="Создать тренировку" handleClick={() => setIsModalOpen(true)} />
                </>
            ) : (
                <EmptyWindow
                    title="Похоже, у вас пока нет тренировок"
                    desc="Начните создавать свои тренировки, чтобы следить за прогрессом и ставить цели"
                    iconPath={warningIcon}
                    buttonText="Создать тренировку"
                    onAction={() => setIsModalOpen(true)}
                />
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddWorkoutModal onClose={() => setIsModalOpen(false)} onAccept={addWorkout} />
            </Modal>
        </div>
    );
};

export default WorkoutsPage;
