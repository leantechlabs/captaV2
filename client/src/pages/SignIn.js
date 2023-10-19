import React, { useState } from 'react';
import Layout from './Layout';
import ScriptSection from './ScriptSection';
import Form from './Form';
import './signin.css';

const SignIn = () => {
  const [message , setMessage] = useState('');

  const updateMessage = () => {
    setMessage('Invalid email and password');
  };
  

  return (
    <html lang="en">
     <Layout/>
      <body className="">
        <main className="main-content ">
          <section>
            <div className="page-header ">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"> {/* css file exception inline command*/ }
                    <div className="card card-plain">
                      <div className="card-header">
                        <h4 className="font-weight">Sign In</h4>
                        <p className="margin">Welcome back Captain !.</p>
                      </div>
                      <div className="card-body">
                        <Form  message={message} updateMessage={updateMessage}/>
                      </div>
                      <div className="card-footer">
                        <p className="custom-paragraph">
                          Forgot your password?
                          <a href="javascript:;" className="text-primary text-gradient font-weight-bold"> {/* css file exception inline command*/ }
                            Reset
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"> {/* css file exception inline command*/ }
                    <div className="custom-container">
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
