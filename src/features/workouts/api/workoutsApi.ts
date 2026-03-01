import { baseApi } from '../../../shared/api/baseApi';
import type { CreateWorkoutRequest, IWorkoutCard, IWorkoutWeek } from '../../../types/workouts';

export const workoutsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyWorkouts: builder.query<IWorkoutCard[], void>({
            query: () => '/workouts',
            providesTags: ['Workout'],
        }),

        getMyWorkoutById: builder.query<IWorkoutWeek, { workoutId: number }>({
            query: ({ workoutId }) => `/workouts/${workoutId}`,
            providesTags: (_result, _error, { workoutId }) => [{ type: 'Workout', id: workoutId }],
        }),

        createWorkout: builder.mutation<IWorkoutCard, CreateWorkoutRequest>({
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
