import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import ChakraWrap from './utils/ChakraWrap';
import Header from './components/Header';
import Login from './components/Login';
import Chat from './components/Chat';
import './App.css'

function App() {
    const [user, loading, error] = useAuthState(auth);

    if (error) {
        console.log(error);
        console.log(loading);
        alert("Oops something went wrong !");
    }

    return (
        <section>
            <ChakraWrap>
                <Header user={user} />
                {user ? <Chat /> : <Login />}
            </ChakraWrap>
        </section>
    );
}

export default App;
