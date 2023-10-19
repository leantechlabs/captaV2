import React, { useState } from 'react'
import axios from 'axios';

const Form = ({message , updateMessage}) => {

    //Variable Declaration
    const [ email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [statusCode , setStatusCode] = useState('');


    const handleSignIn = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('/login', { email, password });
      
          if (response.status === 200) {
            if (response.data === 'success') {
              updateMessage('Logged in successfully, redirecting to the dashboard');
            } else {
              updateMessage('Invalid email and password');
              setStatusCode(401);
            }
          } else {
            setStatusCode(response.status);
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          updateMessage('An error occurred during sign-in');
        }
      };
      
    
  return (
    <div>
      <form role="form"  onSubmit={handleSignIn}>
        <div className="mb-3">
            <input type="email"
                name="email"
                id="email" 
                className="form-control form-control-lg" 
                placeholder="Email"
                aria-label="Email"
                required 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                />
        </div>

        <div className="mb-3">
            <input type="password" 
                name="password"
                id="password" 
                className="form-control form-control-lg" 
                placeholder="Password" 
                aria-label="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>

        <div className="text-center">

            {message && (
                <div className="alert alert-custom" role="alert">
                <span>{message}</span>
                </div>
            )}
            <button
                type="submit"
                className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"          
            >
                Sign in
            </button>
        </div>

     </form>
    </div>
  )
}

export default Form
