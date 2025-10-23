import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    console.log(user)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
           unsubscribe(); 
        }
    },[]);

    const AuthData = {
        user,
        setUser,
        createUser,
        logOut,
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>
};

export default AuthProvider;
