import { baseApi } from '../../../shared/api/baseApi';
import type { CreateSetRequest, deleteSetRequest, ISet } from '../../../types/sets';

export const setsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSet: builder.mutation<ISet, CreateSetRequest>({
            query: ({ workoutId, workoutExerciseId, ...body }) => ({
                url: `workouts/${workoutId}/exercises/${workoutExerciseId}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['WorkoutExercise'],
        }),
        deleteSet: builder.mutation<ISet, deleteSetRequest>({
            query: ({ workoutId, workoutExerciseId, setId }) => ({
                url: `workouts/${workoutId}/exercises/${workoutExerciseId}/sets/${setId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['WorkoutExercise'],
        }),
    }),
});

export const { useCreateSetMutation, useDeleteSetMutation } = setsApi;
