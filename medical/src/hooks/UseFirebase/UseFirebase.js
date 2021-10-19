import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged } from "firebase/auth";
import initialize from './../initialize/initialize';

initialize()

const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [isLoading,setLoading] =useState (true)
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const singInUsingGoogle = ()=>{
        setLoading(true)
        signInWithPopup(auth,googleprovider)
        .then((result)=>{
            setUser(result.user)
            console.log(result.user)
        })
        .finally (()=>setLoading(false))
    }


    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>setLoading(false) )
    }

    const unSubscribe = useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setLoading(false)
        
        })
        return unSubscribe
    },[])


    return {
        user,
        singInUsingGoogle,
        logOut,
        isLoading
    }
}

export  {useFirebase};