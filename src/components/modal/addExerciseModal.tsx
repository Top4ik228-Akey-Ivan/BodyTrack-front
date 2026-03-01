import { useState } from 'react';
import styles from './modal.module.css';
import AddExercisesList from '../exercises/addExercisesList';
import AddExerciseForm from './createExerciseForm';
import type { CreateExerciseRequest } from '../../types/exercises';
import {
    useCreateExerciseMutation,
    useGetMyExercisesQuery,
} from '../../features/exercises/api/exercisesApi';
import { useAddExerciseToWorkoutMutation } from '../../features/workoutExercisesWeek/api/workoutExercisesWeekApi';

interface AddExerciseModalProps {
    onClose: () => void;
    workoutId: number;
    exercisesLen: number;
    weekIndex: number;
}

const AddExerciseModal: React.FC<AddExerciseModalProps> = ({
    onClose,
    workoutId,
    exercisesLen,
    weekIndex,
}) => {
    const [isExisting, setIsExisting] = useState(true);

    const { data: existingExercises } = useGetMyExercisesQuery();
    const [createExercise] = useCreateExerciseMutation();
    const [addExerciseToWorkout] = useAddExerciseToWorkoutMutation();

    const toggleTabs = () => {
        setIsExisting((prev) => !prev);
    };

    const handleCreateExercise = async (data: CreateExerciseRequest) => {
        try {
            await createExercise(data).unwrap();
            toggleTabs();
        } catch (err) {
            console.error('Произошла ошибка при создании упражнения', err);
        }
    };

    const handleAddExercise = async (exerciseId: number, orderIndex: number) => {
        try {
            await addExerciseToWorkout({ workoutId, exerciseId, orderIndex, weekIndex }).unwrap();
            onClose();
        } catch (err) {
            console.error('Ошибка при добавлении упражнения в тренировку', err);
        }
    };

    return (
        <div className={styles.addExerciseModal}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${isExisting ? styles.active : ''}`}
                    onClick={toggleTabs}
                >
                    Добавить упражнение
                </button>

                <button
                    className={`${styles.tab} ${!isExisting ? styles.active : ''}`}
                    onClick={toggleTabs}
                >
                    Создать упражнение
                </button>
            </div>

            <div className={styles.content}>
                {isExisting ? (
                    existingExercises && (
                        <AddExercisesList
                            existingExercises={existingExercises}
                            addExercise={handleAddExercise}
                            exercisesLen={exercisesLen}
                        />
                    )
                ) : (
                    <AddExerciseForm onClose={onClose} onAccept={handleCreateExercise} />
                )}
            </div>
        </div>
    );
};

export default AddExerciseModal;
