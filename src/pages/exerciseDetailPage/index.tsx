import { useParams } from 'react-router-dom';
import SetsCardsList from '../../components/sets/setsCardsList';
import { useCreateSetMutation, useDeleteSetMutation } from '../../features/sets/api/setsApi';
import { useGetWorkoutExerciseByIdQuery } from '../../features/workoutExercises/api/workoutExercisesApi';

const ExerciseDetailPage: React.FC = () => {
    const { workoutId, workoutExerciseId } = useParams();
    const workoutIdNum = Number(workoutId);
    const workoutExerciseIdNum = Number(workoutExerciseId);

    const [addSet] = useCreateSetMutation();
    const [deleteSet] = useDeleteSetMutation();
    const { data: exercise } = useGetWorkoutExerciseByIdQuery({
        workoutExerciseId: workoutExerciseIdNum,
        workoutId: workoutIdNum,
    });

    console.log(exercise);
    const handleAddSet = async (workoutExerciseId: number) => {
        try {
            await addSet({
                workoutId: workoutIdNum,
                workoutExerciseId,
                weight: 0,
                reps: 1,
                orderIndex: 1,
            }).unwrap();
        } catch (err) {
            console.error('Не удалось добавить подход', err);
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
                deleteSetClick={handleDeleteSet}
                workoutExerciseId={workoutExerciseIdNum}
                sets={exercise.sets}
            />
        </div>
    );
};
export default ExerciseDetailPage;
