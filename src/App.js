import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import ChakraWrap from './utils/ChakraWrap';
import Header from './components/Header';
import Login from './components/Login';
import Chat from './components/Chat';
import './App.css'

function App() {
    const [user] = useAuthState(auth);

    return (
        <ChakraWrap>
            <Header user={user} />
            {user ? <Chat /> : <Login />}
        </ChakraWrap>
    );
}

export default App;
