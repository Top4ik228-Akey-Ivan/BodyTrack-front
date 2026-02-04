import { baseApi } from '../../../shared/api/baseApi';
import type {
    addExerciseToWorkoutRequest,
    CreateExerciseRequest,
    IExercise,
} from '../../../types/exercises';

export const exercisesApi = baseApi.injectEndpoints({
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

        // deleteWorkout: builder.mutation<{ success: boolean }, number>({
        //     query: (id) => ({
        //         url: `/exercise/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Exercise'],
        // }),
    }),
});

export const {
    useGetMyExercisesQuery,
    useCreateExerciseMutation,
    useAddExerciseToWorkoutMutation,
} = exercisesApi;
