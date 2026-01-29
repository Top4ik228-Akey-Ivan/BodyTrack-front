import { baseApi } from '../../../shared/api/baseApi';
import type { IWorkout, CreateWorkoutRequest } from '../../../types/workouts';

export const workoutsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyWorkouts: builder.query<IWorkout[], void>({
            query: () => '/workouts',
            providesTags: ['Workout'],
        }),

        getMyWorkoutById: builder.query<IWorkout, { workoutId: number }>({
            query: ({ workoutId }) => `/workouts/${workoutId}`,
            providesTags: ['Workout'],
        }),

        createWorkout: builder.mutation<IWorkout, CreateWorkoutRequest>({
            query: (body) => ({
                url: '/workouts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Workout'],
        }),

        deleteWorkout: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/workouts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Workout'],
        }),
    }),
});

export const {
    useGetMyWorkoutsQuery,
    useCreateWorkoutMutation,
    useDeleteWorkoutMutation,
    useGetMyWorkoutByIdQuery,
} = workoutsApi;
