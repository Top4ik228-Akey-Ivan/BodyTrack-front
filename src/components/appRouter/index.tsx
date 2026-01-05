import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBarLayout from '../sidebar/sidebarLayout';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SideBarLayout />}>
                <Route path="/workouts" element={<div>workouta</div>} />
                <Route path="/diet" element={<div>Diet</div>} />
                <Route path="/figure" element={<div>Figure</div>} />

                <Route path="/" element={<Navigate to="/workouts" replace />} />

                <Route path="*" element={<div>Page not found</div>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
