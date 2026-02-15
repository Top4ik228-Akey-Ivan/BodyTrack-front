export interface ISet {
    id: number;
    weight?: number;
    reps: number;
    orderIndex: number;
}

export interface CreateSetRequest {
    workoutId: number;
    workoutExerciseId: number;
    weight?: number;
    reps: number;
    orderIndex: number;
}

export interface deleteSetRequest {
    workoutId: number;
    workoutExerciseId: number;
    setId: number;
}
