import './App.css';
import AppRouter from './components/appRouter';
import { useGetMeQuery } from './features/auth/api/authApi';

function App() {
    useGetMeQuery();
    return <AppRouter />;
}

export default App;
