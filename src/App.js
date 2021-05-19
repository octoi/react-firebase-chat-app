import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import ChakraWrap from './utils/ChakraWrap';
import Header from './components/Header';
import './App.css'

function App() {
    const [user] = useAuthState(auth);

    return (
        <ChakraWrap>
            <Header user={user} />
        </ChakraWrap>
    );
}

export default App;
