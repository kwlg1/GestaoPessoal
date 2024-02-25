import { useEffect, useState } from 'react';
import firebase from './src/config/firebaseConfig';
import Home from './src/screens/Home';
import Stack from './src/routes/Stack';

export default function App() {
    
    const [user, setUser] = useState();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        })
    }, [])

    
    if(user){
        return <Home></Home>
    } else {
        return (
            <Stack />
        )
    }
}
