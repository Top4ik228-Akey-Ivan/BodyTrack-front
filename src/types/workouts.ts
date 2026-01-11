export interface IWorkout {
    id: number;
    title: string;
    desc?: string;
    createdAt: string;
}

export interface CreateWorkoutRequest {
    title: string;
    desc?: string;
}
