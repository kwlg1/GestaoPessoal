import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './src/config/firebaseConfig'

import Home from './src/screens/Home';
import Stack from './src/routes/Stack';

export default function App() {
    
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
