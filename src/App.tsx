import { useSelector } from 'react-redux';
import './App.css';
import AppRouter from './components/appRouter';
import { useGetMeQuery } from './features/auth/api/authApi';
import type { RootState } from './app/store';

function App() {
    const { isAuth } = useSelector((state: RootState) => state.auth);
    console.log(isAuth);
    const { isLoading } = useGetMeQuery();
    return !isLoading && <AppRouter />;
}

export default App;
