import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    console.log(user)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
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
        signIn,
        loading,
        setLoading,
        signInWithGoogle,
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>
};

export default AuthProvider;
