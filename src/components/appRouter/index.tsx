import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBarLayout from '../sidebar/sidebarLayout';
import LoginPage from '../auth/login';
import RegisterPage from '../auth/register';
import WorkoutsPage from '../../pages/workoutsPage';
import { RequireAuth } from '../../providers/requireAuth';
import WorkoutDetailPage from '../../pages/workoutDetailPage';
import ExerciseDetailPage from '../../pages/exerciseDetailPage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {/* Публичные */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />

            {/* Защищённые */}
            <Route element={<RequireAuth />}>
                <Route element={<SideBarLayout />}>
                    <Route path="/workouts" element={<WorkoutsPage />} />
                    <Route path="/workouts/:workoutId" element={<WorkoutDetailPage />} />
                    <Route path="/diet" element={<div>Diet</div>} />
                    <Route path="/figure" element={<div>Figure</div>} />
                    <Route path="/" element={<Navigate to="/workouts" replace />} />
                    <Route
                        path="/workouts/:workoutId/exercises/:workoutExerciseId"
                        element={<ExerciseDetailPage />}
                    />
                </Route>
            </Route>

            {/* fallback */}
            <Route path="*" element={<Navigate to="/workouts" replace />} />
        </Routes>
    );
};

export default AppRouter;
