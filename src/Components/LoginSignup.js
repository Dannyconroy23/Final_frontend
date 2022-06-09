import React from 'react';
import Login from "./Components/Login";
import Signup from "./Components/Signup";



function LoginSignup({ setUser, setIsAuthenticated }) {

    return (
        <div className='login-signup-page'>
            <div className='forms-div'>
                <div className='login-form-div'>
                    <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
                <div className='signup-form-div'>
                    <Signup setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignup;