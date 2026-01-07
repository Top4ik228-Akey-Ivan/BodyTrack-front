import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { useGetMeQuery } from '../features/auth/api/authApi';

export const RequireAuth = () => {
    const { isAuth } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    const { isLoading } = useGetMeQuery();

    if (!isAuth && !isLoading) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};
