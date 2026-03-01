import { useParams } from 'react-router-dom';
import SetsCardsList from '../../components/sets/setsCardsList';
import {
    useCreateSetMutation,
    useDeleteSetMutation,
    useUpdateSetMutation,
} from '../../features/sets/api/setsApi';
import { useGetWorkoutExerciseWeekByIdQuery } from '../../features/workoutExercisesWeek/api/workoutExercisesWeekApi';

const ExerciseDetailPage: React.FC = () => {
    const { workoutId, workoutExerciseWeekId } = useParams();
    const workoutIdNum = Number(workoutId);
    const workoutExerciseWeekIdNum = Number(workoutExerciseWeekId);

    const [addSet] = useCreateSetMutation();
    const [updateSet] = useUpdateSetMutation();
    const [deleteSet] = useDeleteSetMutation();
    const { data: exercise } = useGetWorkoutExerciseWeekByIdQuery({
        workoutExerciseWeekId: workoutExerciseWeekIdNum,
        workoutId: workoutIdNum,
    });

    const handleAddSet = async () => {
        try {
            await addSet({
                workoutId: workoutIdNum,
                workoutExerciseWeekId: workoutExerciseWeekIdNum,
                weight: 0,
                reps: 12,
                orderIndex: (exercise?.sets.length ?? 0) + 1,
            }).unwrap();
        } catch (err) {
            console.error('Не удалось добавить подход', err);
        }
    };

    const handleUpdateSet = async (setId: number, weight?: number, reps?: number) => {
        try {
            await updateSet({
                workoutExerciseWeekId: workoutExerciseWeekIdNum,
                workoutId: workoutIdNum,
                setId,
                weight,
                reps,
            }).unwrap();
        } catch (err) {
            console.error('Не удалось обновить подход', err);
        }
    };

    const handleDeleteSet = async (setId: number) => {
        try {
            await deleteSet({
                workoutId: workoutIdNum,
                workoutExerciseWeekId: workoutExerciseWeekIdNum,
                setId,
            }).unwrap();
        } catch (err) {
            console.error('Не удалось удалить подзод', err);
        }
    };

    if (!exercise) {
        return <div>Ошибка получения упражнения</div>;
    }

    return (
        <div>
            <h1>{exercise.title}</h1>
            <p className="textSecondary">{exercise.desc}</p>
            <SetsCardsList
                addSetClick={handleAddSet}
                updateSetClick={handleUpdateSet}
                deleteSetClick={handleDeleteSet}
                sets={exercise.sets}
            />
        </div>
    );
};
export default ExerciseDetailPage;
