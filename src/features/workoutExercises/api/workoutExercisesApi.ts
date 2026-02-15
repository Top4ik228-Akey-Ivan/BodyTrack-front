import { baseApi } from '../../../shared/api/baseApi';
import type {
    addExerciseToWorkoutRequest,
    IExercise,
    IExerciseDetail,
} from '../../../types/exercises';

export const workoutExercisesApi = baseApi.injectEndpoints({
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
        getWorkoutExerciseById: builder.query<
            IExerciseDetail,
            { workoutExerciseId: number; workoutId: number }
        >({
            query: ({ workoutExerciseId, workoutId }) =>
                `/workouts/${workoutId}/exercises/${workoutExerciseId}`,
            providesTags: ['WorkoutExercise'],
        }),
    }),
});

export const { useAddExerciseToWorkoutMutation, useGetWorkoutExerciseByIdQuery } =
    workoutExercisesApi;
