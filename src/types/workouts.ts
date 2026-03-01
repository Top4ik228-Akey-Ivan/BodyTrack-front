import type { IExerciseInWeek } from './exercises';

export interface CreateWorkoutRequest {
    title: string;
    desc?: string;
}

// НОВЫЕ

export interface IWorkoutCard {
    id: number;
    title: string;
    desc?: string;
    createdAt: string;
}

export interface IWeek {
    id: number;
    weekIndex: number;
    createdAt: string;
    exercises: IExerciseInWeek[];
}

export interface IWorkoutWeek {
    id: number;
    userId: number;
    title: string;
    desc?: string;
    createdAt: string;
    updatedAt: string;
    weeks: IWeek[];
}
