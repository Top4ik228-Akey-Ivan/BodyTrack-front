import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBarLayout from '../sidebar/sidebarLayout';
import LoginPage from '../auth/login';
import RegisterPage from '../auth/register';
import WorkoutPage from '../../pages/workoutPage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SideBarLayout />}>
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />

                <Route path="/workouts" element={<WorkoutPage />} />
                <Route path="/diet" element={<div>Diet</div>} />
                <Route path="/figure" element={<div>Figure</div>} />

                <Route path="/" element={<Navigate to="/workouts" replace />} />

                <Route path="*" element={<div>Page not found</div>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
