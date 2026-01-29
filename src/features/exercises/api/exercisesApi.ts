import { baseApi } from '../../../shared/api/baseApi';
import type { CreateExerciseRequest, IExercise } from '../../../types/exercises';

export const workoutsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyExercises: builder.query<IExercise[], void>({
            query: () => '/exercises',
            providesTags: ['Exercise'],
        }),

        createExercise: builder.mutation<IExercise, CreateExerciseRequest>({
            query: (body) => ({
                url: '/exercises',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Exercise'],
        }),

        // deleteWorkout: builder.mutation<{ success: boolean }, number>({
        //     query: (id) => ({
        //         url: `/exercise/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Exercise'],
        // }),
    }),
});

export const { useGetMyExercisesQuery, useCreateExerciseMutation } = workoutsApi;
