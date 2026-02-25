import { baseApi } from '../../../shared/api/baseApi';
import type {
    addExerciseToWorkoutRequest,
    IExercise,
    IExerciseInWeek,
} from '../../../types/exercises';

export const workoutExercisesWeekApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addExerciseToWorkout: builder.mutation<IExercise, addExerciseToWorkoutRequest>({
            query: ({ workoutId, ...body }) => ({
                url: `/workouts/${workoutId}/exercises`,
                method: 'POST',
                body,
            }),
            invalidatesTags: (_result, _error, { workoutId }) => [
                { type: 'Workout', id: workoutId },
            ],
        }),
        getWorkoutExerciseWeekById: builder.query<
            IExerciseInWeek,
            { workoutExerciseWeekId: number; workoutId: number }
        >({
            query: ({ workoutExerciseWeekId, workoutId }) =>
                `/workouts/${workoutId}/exercises/${workoutExerciseWeekId}`,
            providesTags: ['WorkoutExercise'],
        }),
        deleteWorkoutExerciseWeek: builder.mutation<
            { message: string },
            { workoutExerciseWeekId: number; workoutId: number }
        >({
            query: ({ workoutExerciseWeekId, workoutId }) => ({
                url: `/workouts/${workoutId}/exercises/${workoutExerciseWeekId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Workout'],
        }),
    }),
});

export const {
    useAddExerciseToWorkoutMutation,
    useGetWorkoutExerciseWeekByIdQuery,
    useDeleteWorkoutExerciseWeekMutation,
} = workoutExercisesWeekApi;
