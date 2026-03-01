import type { ISetWeek } from './sets';

export type MuscleGroup = 'CHEST' | 'BACK' | 'LEGS' | 'SHOULDERS' | 'ARMS' | 'CORE';

export interface IExercise {
    id: number;
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
}

export interface CreateExerciseRequest {
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
}

export interface addExerciseToWorkoutRequest {
    workoutId: number;
    exerciseId: number;
    orderIndex: number;
    weekIndex: number;
}

// НОВЫЕ

export interface IExerciseInWeek {
    workoutExerciseWeekId: number;
    exerciseId: number;
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
    orderIndex: number;
    sets: ISetWeek[];
}
