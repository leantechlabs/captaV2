import React, { useState } from 'react';
import Layout from './Layout/Layout';
import ScriptSection from './Includes/ScriptSection';
import Form from './Forms/SignInForm';
import './main.css'
const SignIn = () => {
  const [message , setMessage] = useState('');

  const updateMessage = () => {
    setMessage('Invalid email and password');
  };
  return (
    <html lang="en">
     <Layout/>
      <body className="">
        <main className="main-content">
          <section>
            <div className="page-header min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                    <div className="card card-plain">
                      <div className="card-header pb-0 text-start">
                        <h4 className="font-weight-bolder">Sign In</h4>
                        <p className="mb-0">Welcome back Captain !.</p>
                      </div>
                      <div className="card-body">
                        <Form  message={message} updateMessage={updateMessage}/>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <p className="mb-4 text-sm mx-auto">
                          Forgot your password?
                          <a href="javascript:;" className="text-primary text-gradient font-weight-bold">
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
        <ScriptSection/>
      </body>
    </html>
  );
};

export default SignIn;
