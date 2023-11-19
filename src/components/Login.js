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
            {login ? 
                <div className='inputs'>
                    <h1 className='login-header'>Login</h1>
                    <input className="in" type="email" placeholder='Email Address' />
                    <input className='in' type="password" placeholder='Password' />
                    <button className='btn-login'>Login</button>
                    <href onClick={newUser}><p>Create an Account</p></href>
                </div> :
                <div className='inputs'>
                    <h1 className='login-header'>Register</h1>
                    <input className="in" type="first" placeholder='First Name' />
                    <input className="in" type="last" placeholder='Last Name'/>
                    <input className="in" type="email" placeholder='Email Address'/>
                    <input className='in' type="password" placeholder='Password'/>
                    <input className='in' type="password" placeholder='Confirm Password'/>
                    <button className='btn-login'>Create Account</button>
                    <p>Already have an account? <href onClick={returnUser}>Login</href></p>
                </div>

            }
        </div>
    );
}

export default Login;