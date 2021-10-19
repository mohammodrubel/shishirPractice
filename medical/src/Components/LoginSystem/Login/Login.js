import React, { useEffect } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button'
import useAurh from './../../../hooks/UseAuth';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,sendEmailVerification ,sendPasswordResetEmail,updateProfile} from "firebase/auth";
import initialize from './../../../hooks/initialize/initialize';
import { useState } from 'react';
initialize()

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const auth = getAuth();
    const [login,setLogin] = useState(false)
    const [name,setName] = useState('')
    

    const emailInput = (e)=>{
        setEmail(e.target.value)
    }
    const passInput = (e) =>{
        setPassword(e.target.value)
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        if(password.length <6 ){
            setError('password must be 6 characters long')
            return
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must be 2 Uppercase word requard')
            return
        }
        
        login ? logInSystem(email,password) : createNewUser(email,password)
       
        }
        const logInSystem = (email,password)=>{
            signInWithEmailAndPassword(auth,email,password)
            .then((result)=>{
                const user = result.user
                console.log(user)
                setError('')
            })
            .catch((error)=>{
                setError('You have not registered before! Please register')
            })
        }

        const createNewUser = (email,password) =>{
            createUserWithEmailAndPassword(auth,email,password)
            .then((result)=>{
                const user = result.user
                console.log(user)
                setError('')
                emailVarification()
                updateUserName()
            })
            .catch((error)=>{
                setError(' this email already registerd! please Login')
            })
    
        }
        const updateUserName = ()=>{
            updateProfile(auth.currentUser,{displayName:name})
            .then(result => {})
        }

    const toggle = (e)=>{
        setLogin(e.target.checked)
    }

    // google sing in 
    const {singInUsingGoogle} = useAurh()
    //email varification  sendEmailVerification

    const emailVarification = ()=>{
        sendEmailVerification(auth.currentUser)
        .then( ()=> {})
    }

    // reset password 
    const resetPassword = ()=>{
        sendPasswordResetEmail(auth,email)
        .then(()=>{})
    }

    // full name 
    const handleFullName =  (e)=>{
        setName(e.target.value)
    }
    
    


    
    return (
        <div className="col-md-5 mx-auto">
            <h2 style={{textAlign:'center'}}>Welcome To RDX Medical please {login ? 'LogIn' :'Register'}</h2>
{/* -------------------------------Login -------------------------------------------------- */}

            <form onSubmit={formSubmit} className=" formSection"> <hr />

                {!login && <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input onBlur={handleFullName} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>}

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onBlur={emailInput} type="email" className="form-control" />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onBlur={passInput} type="password" className="form-control" />
                </div>
                <div className="col-md-4 w-100"><button type="submit" className="w-100 btn btn-primary">{login ? 'LogIn' : 'Register'}</button></div>

                <div class="mb-3 form-check">
                    <input onChange={toggle}  type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">if You Already Registered! please Login</label>
                </div>

                <h5 className="text-center mt-2 text-warning">{error} </h5>
            </form>
                
{/*----------------------------------- ----------Login----------------------------------------- */}
            
            
             <hr />
           <div className="text-center mt-2"> <Button variant="warning" onClick={singInUsingGoogle}>SingIn with GOOGLE </Button></div>
           <div className="text-center mt-2"> <Button variant="warning" onClick={resetPassword}>Reset Password </Button></div>
        </div>
    );
};

export default Login;