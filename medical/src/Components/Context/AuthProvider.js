import React, { createContext } from 'react';
import { useFirebase } from '../../hooks/UseFirebase/UseFirebase';


export const AuthContext = createContext()

const AuthProvider = ( {children}) => {
    const allContexxt = useFirebase()
    return (
        <AuthContext.Provider value ={allContexxt}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;