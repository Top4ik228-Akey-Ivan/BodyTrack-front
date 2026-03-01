import { baseApi } from '../../../shared/api/baseApi';
import type { CreateWeekResponse } from '../../../types/weeks';

export const weeksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createWeek: builder.mutation<CreateWeekResponse, { workoutId: number }>({
            query: ({ workoutId }) => ({
                url: `/workouts/${workoutId}/weeks`,
                method: 'POST',
            }),
            invalidatesTags: ['Workout'],
        }),
    }),
});

export const { useCreateWeekMutation } = weeksApi;
