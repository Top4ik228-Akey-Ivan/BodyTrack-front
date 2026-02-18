import { useParams } from 'react-router-dom';
import SetsCardsList from '../../components/sets/setsCardsList';
import {
    useCreateSetMutation,
    useDeleteSetMutation,
    useUpdateSetMutation,
} from '../../features/sets/api/setsApi';
import { useGetWorkoutExerciseByIdQuery } from '../../features/workoutExercises/api/workoutExercisesApi';

const ExerciseDetailPage: React.FC = () => {
    const { workoutId, workoutExerciseId } = useParams();
    const workoutIdNum = Number(workoutId);
    const workoutExerciseIdNum = Number(workoutExerciseId);

    const [addSet] = useCreateSetMutation();
    const [updateSet] = useUpdateSetMutation();
    const [deleteSet] = useDeleteSetMutation();
    const { data: exercise } = useGetWorkoutExerciseByIdQuery({
        workoutExerciseId: workoutExerciseIdNum,
        workoutId: workoutIdNum,
    });

    const handleAddSet = async () => {
        try {
            await addSet({
                workoutId: workoutIdNum,
                workoutExerciseId: workoutExerciseIdNum,
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
                workoutExerciseId: workoutExerciseIdNum,
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
                workoutExerciseId: workoutExerciseIdNum,
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
