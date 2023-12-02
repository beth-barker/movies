import React from 'react';
import '../styles/login.css'
import { useState } from 'react';

function Login() {

    const [login, setLogin] = useState(true)

    const newUser = () => {
        setLogin(false)
        //post user info to database
        //get userid
        //authenticate and sign in user
    }

    const returnUser = () => {
        setLogin(true)
        //post password and username 
        //get userid 
        //authenticate to store id in global context for all requests to use
    }

    //logout - reset/clear userid from global 




    return (
        <div className='login'>
            <h1>BB Movies</h1><br />
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    );
}

export default Login;