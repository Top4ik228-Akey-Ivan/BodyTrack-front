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
