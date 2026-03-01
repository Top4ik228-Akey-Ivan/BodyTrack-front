export interface ISet {
    id: number;
    weight?: number;
    reps: number;
    orderIndex: number;
}

export interface CreateSetRequest {
    workoutId: number;
    workoutExerciseWeekId: number;
    weight?: number;
    reps: number;
    orderIndex: number;
}

export interface UpdateSetRequest {
    workoutId: number;
    workoutExerciseWeekId: number;
    weight?: number;
    reps?: number;
    setId: number;
}

export interface deleteSetRequest {
    workoutId: number;
    workoutExerciseWeekId: number;
    setId: number;
}

// НОВЫЕ

export interface ISetWeek {
    id: number;
    workoutExerciseWeekId: number;
    weight?: number;
    reps: number;
    orderIndex: number;
}
