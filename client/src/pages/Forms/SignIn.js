import React, { useState } from 'react';
import axios from 'axios';
import ApiUrls from '../Includes/corsUrls';
import { Toaster,toast} from 'sonner';
import DOMPurify from 'dompurify';
import { Link,useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    email: '',
    password: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value.trim());
    setState({ ...state, [name]: sanitizedValue });
  }

  const handleSignIn = () => {
    const data = {
      email: state.email,
      password: state.password,
    };
    if (!data.email || !data.password) {
      toast.error('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!data.email.match(emailRegex)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!data.password.match(passwordRegex)) {  
      toast.error('Password should be min 8 characters long and includes atleast one uppercase and lowercase and special character.');
      return;
    }

    axios.post(ApiUrls['login'], data)
      .then((response) => {
        const successMessage = response.data.message;
        setState({ ...state, message: successMessage });
        toast.success(successMessage);
        navigate('/dashboard')
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : 'Error: Unable to log in.';
        setState({ ...state, message: errorMessage });
        toast.error(errorMessage);
      });
  }

  return (
    <main className="main-content mt-0">
      <section>
        <div className="page-header min-vh-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-start">
                    <h4 className="font-weight-bolder">Sign In</h4>
                    <p className="mb-0">Welcome back Captain !</p>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        aria-label="Email"
                        required
                        value={state.email}
                        onChange={handleInputChange}
                      />
                      <Toaster richColors position='top-center' />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        aria-label="Password"
                        required
                        minLength='8'
                        value={state.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <div className="text-center">
                      {typeof state.message !== 'undefined' && (
                        <div className="alert alert-custom" role="alert">
                          <span>{state.message}</span>
                        </div>
                      )}
                      <button
                        onClick={handleSignIn}
                        className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Forgot your password?{' '}
                      <a
                        href="javascript:;"
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Reset
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden">
                  <span style={{ backgroundColor: 'white' }} className="mask opacity-7">
                    <img src="img/logo.png" className="logo-style" alt="Logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
