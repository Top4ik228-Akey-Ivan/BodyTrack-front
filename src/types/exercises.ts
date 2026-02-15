import type { ISet } from './sets';

export type MuscleGroup = 'CHEST' | 'BACK' | 'LEGS' | 'SHOULDERS' | 'ARMS' | 'CORE';

export interface IExercise {
    id: number;
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
}

export interface IExerciseInWorkout {
    workoutExerciseId: number;
    exerciseId: number;
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
    orderIndex: number;
    sets: number[];
}

export interface IExerciseDetail {
    title: string;
    desc?: string;
    sets: ISet[];
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
}
