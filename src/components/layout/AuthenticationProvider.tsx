import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from "firebase/auth";
import {auth} from "../../registerFirebase";

export interface FireAuthContext {
    user: User | null;
    signIn: () => void;
    signOut: () => void;
}

const authenticationContext = createContext<FireAuthContext>({
    user: null,
    signIn: () => {
    },
    signOut: () => {
    }
});

const performGoogleSignIn = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
};

const performSignOut = async (): Promise<void> => {
    await signOut(auth);
};

export const AuthenticationProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        onAuthStateChanged(auth, setUser, (error) => {
            console.error(error);
        });
    }, [user]);
    return (
        <authenticationContext.Provider value={{user, signIn: performGoogleSignIn, signOut: performSignOut}}>
            {children}
        </authenticationContext.Provider>
    );
};

export const useAuthentication = () => {
    const context = useContext(authenticationContext);
    if (context === undefined) {
        throw new Error('useAuthentication must be used within a AuthenticationProvider');
    }
    return context;
};
