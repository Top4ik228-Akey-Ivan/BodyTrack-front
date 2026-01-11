import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBarLayout from '../sidebar/sidebarLayout';
import LoginPage from '../auth/login';
import RegisterPage from '../auth/register';
import WorkoutsPage from '../../pages/workoutsPage';
import { RequireAuth } from '../../providers/requireAuth';

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
                    <Route path="/diet" element={<div>Diet</div>} />
                    <Route path="/figure" element={<div>Figure</div>} />

                    <Route path="/" element={<Navigate to="/workouts" replace />} />
                </Route>
            </Route>

            {/* fallback */}
            <Route path="*" element={<Navigate to="/workouts" replace />} />
        </Routes>
    );
};

export default AppRouter;
