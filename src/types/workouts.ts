import type { IExerciseInWorkout } from './exercises';

export interface IWorkout {
    id: number;
    title: string;
    desc?: string;
    createdAt: string;
}

export interface IWorkoutDetail extends IWorkout {
    exercises: IExerciseInWorkout[];
}

export interface CreateWorkoutRequest {
    title: string;
    desc?: string;
}
