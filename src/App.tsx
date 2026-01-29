import './App.css';
import AppRouter from './components/appRouter';
import { useGetMeQuery } from './features/auth/api/authApi';

function App() {
    const { isLoading } = useGetMeQuery();
    return !isLoading && <AppRouter />;
}

export default App;
