import styles from './workoutsDetailpage.module.css';
import warningIcon from '../../assets/icons/other/warning.svg';

import ExercisesList from '../../components/exercises/exercisesList';
import WorkoutDesc from '../../components/workouts/workousDesc';
import { useGetMyWorkoutByIdQuery } from '../../features/workouts/api/workoutsApi';
import { useParams } from 'react-router-dom';
import AddButton from '../../components/addButton';
import { useEffect, useState } from 'react';
import Modal from '../../components/modal';
import AddExerciseModal from '../../components/modal/addExerciseModal';
import EmptyWindow from '../../components/emptyWindow';
import WeekTabs from '../../components/weekTabs';
import { useCreateWeekMutation } from '../../features/weeks/api/weeksApi';
import { getSocket } from '../../socket/socket';
import AnalyzeModal from '../../components/modal/analyzeModal';

const WorkoutDetailPage: React.FC = () => {
    const { workoutId } = useParams();
    const workoutIdNum = Number(workoutId);

    const [isAnalyzeModalOpen, setIsAnalyzeModalOpen] = useState<boolean>(false);
    const [chunks, setChunks] = useState<string>('');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
    const [createWeek] = useCreateWeekMutation();

    const { data: workout, isLoading } = useGetMyWorkoutByIdQuery(
        { workoutId: workoutIdNum },
        { skip: Number.isNaN(workoutId) },
    );

    const lastWeekIndex = workout?.weeks?.length
        ? Math.max(...workout.weeks.map((w) => w.weekIndex))
        : 1;

    const activeWeek = selectedWeek ?? lastWeekIndex;

    useEffect(() => {
        const socket = getSocket();

        const handleChunk = (chunk: string) => {
            setChunks((prevChunks) => prevChunks + chunk);
            console.log(chunk);
        };

        const handleDone = () => {
            console.log('done');
        };

        socket.on('chunk', handleChunk);
        socket.on('done', handleDone);

        return () => {
            socket.off('chunk', handleChunk);
            socket.off('done', handleDone);
        };
    }, []);

    const startAnalyze = (weeks: number) => {
        setChunks('');
        toggleAnalyzeModal();
        const socket = getSocket();

        socket.emit('startAnalyze', {
            workoutId: workoutIdNum,
            weeks: weeks,
        });
    };

    const handleCreateWeek = async () => {
        try {
            await createWeek({ workoutId: workoutIdNum }).unwrap();
            setSelectedWeek(null);
        } catch (err) {
            console.error('Не удалось создать неделю', err);
        }
    };

    const toggleAnalyzeModal = () => {
        setIsAnalyzeModalOpen((prev) => !prev);
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    if (!workout || isLoading) {
        return <div>Загрузка</div>;
    }

    const currentWeek = workout.weeks.find((w) => w.weekIndex === activeWeek);
    const exercises = currentWeek?.exercises ?? [];
    const hasExercises = exercises.length > 0;

    return (
        <div className={styles.page}>
            {hasExercises ? (
                <>
                    <WorkoutDesc title={workout.title} desc={workout.desc} />
                    <WeekTabs
                        selectedWeek={activeWeek}
                        onSelect={setSelectedWeek}
                        weeks={workout.weeks.map((w) => ({ weekIndex: w.weekIndex }))}
                        handleCreateWeek={handleCreateWeek}
                        startAnalyze={startAnalyze}
                    />
                    <ExercisesList exercises={exercises} />
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
                    exercisesLen={exercises.length}
                    weekIndex={activeWeek}
                />
            </Modal>

            <Modal isOpen={isAnalyzeModalOpen} onClose={toggleAnalyzeModal}>
                <AnalyzeModal chunks={chunks} />
            </Modal>
        </div>
    );
};

export default WorkoutDetailPage;
