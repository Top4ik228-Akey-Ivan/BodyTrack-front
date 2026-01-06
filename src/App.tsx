import './App.css';
import Sidebar from './components/sidebar';
import { store } from './app/store';
console.log(store.getState());

function App() {
    return (
        <>
            PENSIL
            <Sidebar />
        </>
    );
}

export default App;
