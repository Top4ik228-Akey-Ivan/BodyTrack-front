import { baseApi } from '../../../shared/api/baseApi';
import type {
    CreateSetRequest,
    deleteSetRequest,
    ISetWeek,
    UpdateSetRequest,
} from '../../../types/sets';

export const setsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSet: builder.mutation<ISetWeek, CreateSetRequest>({
            query: ({ workoutId, workoutExerciseWeekId, ...body }) => ({
                url: `workouts/${workoutId}/exercises/${workoutExerciseWeekId}/sets`,
                method: 'POST',
                body,
            }),
            invalidatesTags: (_result, _error, { workoutId }) => [
                { type: 'Workout', id: workoutId },
            ],
        }),
        updateSet: builder.mutation<ISetWeek, UpdateSetRequest>({
            query: ({ workoutId, workoutExerciseWeekId, setId, ...body }) => ({
                url: `workouts/${workoutId}/exercises/${workoutExerciseWeekId}/sets/${setId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (_result, _error, { workoutId }) => [
                { type: 'Workout', id: workoutId },
            ],
        }),
        deleteSet: builder.mutation<{ message: string }, deleteSetRequest>({
            query: ({ workoutId, workoutExerciseWeekId, setId }) => ({
                url: `workouts/${workoutId}/exercises/${workoutExerciseWeekId}/sets/${setId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['WorkoutExercise'],
        }),
    }),
});

export const { useCreateSetMutation, useDeleteSetMutation, useUpdateSetMutation } = setsApi;
